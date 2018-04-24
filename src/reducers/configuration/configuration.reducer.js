import {configurationConstants} from '../../constants/constants'

const initialStated = []
export const configurationReducer = (state = initialStated, action) => {
  switch (action.type) {
    case configurationConstants.CONFIG_LANGUAGE:
      return [...state, { lang: action.lang }]
    case configurationConstants.CONFIG_SHAPE:
      return [...state, {shape: action.shape}]
    case configurationConstants.CONFIG_WIDTH:
      return [...state, {width: action.width}]
    case configurationConstants.CONFIG_HEIGHT:
      return [...state, {height: action.height}]
    case configurationConstants.CONFIG_RADIUS:
      return [...state, {radius: action.radius}]
    case configurationConstants.CONFIG_STARTPOS:
      return [...state, {startPos: action.startPos}]
    default:
      return state
  }
}
