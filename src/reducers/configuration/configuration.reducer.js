import {configurationConstants} from '../../constants/constants'

export const initialState = {lang: 'se'}
export const configurationReducer = (state = initialState, action) => {
  switch (action.type) {
    case configurationConstants.CONFIG_LANGUAGE:
      return Object.assign({}, state, {lang: action.lang})
    case configurationConstants.CONFIG_SHAPE:
      return Object.assign({}, state, {shape: action.shape})
    case configurationConstants.CONFIG_WIDTH:
      return Object.assign({}, state, {width: action.width})
    case configurationConstants.CONFIG_HEIGHT:
      return Object.assign({}, state, {height: action.height})
    case configurationConstants.CONFIG_RADIUS:
      return Object.assign({}, state, {radius: action.radius})
    default:
      return state
  }
}
