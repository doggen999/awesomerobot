import {navigationConstants} from '../../constants'
const intialState = {inProgress: false, error: false, destination: {x: 0, y: 0, dir: 0}}

export const navigationReducer = (state = intialState, action) => {
  switch (action.type) {
    case navigationConstants.NAVIGATE_INPROGRESS:
      return Object.assign({}, state, {inProgress: true, error: false})
    case navigationConstants.NAVIGATE_ERROR:
      return Object.assign({}, state, {inProgress: false, error: true, instructions: action.payload})
    case navigationConstants.NAVIGATE_FULFILLED:
      return Object.assign({}, state, {inProgress: false, error: false, instructions: false, destination: action.payload})
    case navigationConstants.SET_XPOS:
      return Object.assign({}, state, {destination: Object.assign({}, state.destination, {x: action.x})})
    case navigationConstants.SET_YPOS:
      return Object.assign({}, state, {destination: Object.assign({}, state.destination, {y: action.y})})
    default: return state
  }
}
