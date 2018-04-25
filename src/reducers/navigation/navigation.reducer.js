import {navigationConstants} from '../../constants'
const intialState = [{destination: {x: 0, y: 0, dir: 0}}]

export const navigationReducer = (state = intialState, action) => {
  switch (action.type) {
    case navigationConstants.NAVIGATE_INPROGRESS:
      return [...state, {inProgress: true}]
    case navigationConstants.NAVIGATE_ERROR:
      return [...state, {inProgress: false, instructions: action.payload}]
    case navigationConstants.NAVIGATE_FULFILLED:
      return [...state, {inProgress: false, error: false, destination: action.payload}]
    case navigationConstants.SET_POS:
      return [...state, {destination: action.destination}]
    default: return state
  }
}
