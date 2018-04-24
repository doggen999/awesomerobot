import {configurationReducer} from './configuration.reducer'
import {configurationConstants} from '../../constants'
import * as actions from '../../actions/configuration/configuration.action'

describe('Configuration reducer', () => {
  it('should handle initial state', () => {
    expect(
      configurationReducer(undefined, {})
    ).toEqual([])
  })
  it(`should handle ${configurationConstants.CONFIG_LANGUAGE}`, () => {
    expect(
      configurationReducer([], {type: configurationConstants.CONFIG_LANGUAGE, lang: 'en'})
    ).toEqual([{lang: 'en'}])
  })
  it(`it should handle ${configurationConstants.CONFIG_SHAPE}`, () => {
    expect(
      configurationReducer([], {type: configurationConstants.CONFIG_SHAPE, shape: 'circ'})
    ).toEqual([{shape: 'circ'}])
  })
  it(`should handle ${configurationConstants.CONFIG_WIDTH}`, () => {
    expect(configurationReducer([], actions.configWidth(4))).toEqual([{width: 4}])
  })
  it(`should handle ${configurationConstants.CONFIG_HEIGHT}`, () => {
    expect(configurationReducer([], actions.configurHeight(5))).toEqual([{height: 5}])
  })
  it(`should handle ${configurationConstants.CONFIG_RADIUS}`, () => {
    expect(configurationReducer([], actions.configRadius(19))).toEqual([{radius: 19}])
  })
})
