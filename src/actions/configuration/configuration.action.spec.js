import {configurationConstants} from '../../constants'
import * as actions from '../configuration/configuration.action'

describe('Configuration actions', () => {
  it('change language should set new language', () => {
    expect(actions.configLanguage('en')).toEqual({
      type: configurationConstants.CONFIG_LANGUAGE,
      lang: 'en'
    })
  })

  it('change shape should return new shape', () => {
    expect(actions.configShape('circ')).toEqual({
      type: configurationConstants.CONFIG_SHAPE,
      shape: 'circ'
    })
  })

  it('should return newly configured x dimension', () => {
    expect(actions.configWidth(5)).toEqual({
      type: configurationConstants.CONFIG_WIDTH,
      width: 5
    })
  })

  it('should return newly configured height', () => {
    expect(actions.configurHeight(5)).toEqual({
      type: configurationConstants.CONFIG_HEIGHT,
      height: 5
    })
  })

  it('should return newly configured radius', () => {
    expect(actions.configRadius(5)).toEqual({
      type: configurationConstants.CONFIG_RADIUS,
      radius: 5
    })
  })
})
