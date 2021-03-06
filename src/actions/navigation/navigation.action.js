import {navigationConstants} from '../../constants'

export function navigate (instructions) {
  return (dispatch, getState) => {
    let translatedInstructions = translateInstructions(instructions, getState().configurationReducer.lang)

    if (translatedInstructions.toUpperCase().replace(new RegExp('L*R*F*', 'g'), '').length > 0) {
      return Promise.resolve(dispatch({type: navigationConstants.NAVIGATE_ERROR}))
    }

    return Promise.resolve(recursiveNavigation(translatedInstructions, getState().navigationReducer.destination))
      .then(result => {
        dispatch({type: navigationConstants.NAVIGATE_FULFILLED, payload: result})
      })
  }
}

export function modGrad (val) {
  return ((((val) % 360) + 360) % 360)
}

export function setXPos (x) {
  return ({type: navigationConstants.SET_XPOS, x})
}

export function setYPos (y) {
  return ({type: navigationConstants.SET_YPOS, y})
}

const translateInstructions = (instructions, lang) => {
  switch (lang.toLowerCase()) {
    case 'se':
      return instructions
        .replace(new RegExp('V', 'g'), 'L')
        .replace(new RegExp('H', 'g'), 'R')
        .replace(new RegExp('G', 'g'), 'F')
    default: return instructions
  }
}

const recursiveNavigation = (instructions, destination) => {
  if (instructions.length === 0) {
    return destination
  }
  switch (instructions[0]) {
    case 'F':
      destination = translatePosition(destination)
      break
    case 'L': destination = Object.assign({}, destination, {dir: modGrad(destination.dir - 90)})
      break
    case 'R': destination = Object.assign({}, destination, {dir: modGrad(destination.dir + 90)})
      break
  }
  return (Promise.resolve(recursiveNavigation(instructions.slice(1), destination)))
}

const translatePosition = (destination) => {
  switch (destination.dir) {
    case 0:
      return Object.assign({}, destination, {y: +destination.y + 1})
    case 90:
      return Object.assign({}, destination, {x: +destination.x + 1})
    case 180:
      return Object.assign({}, destination, {y: destination.y - 1})
    case 270:
      return Object.assign({}, destination, {x: destination.x - 1})
  }
}
