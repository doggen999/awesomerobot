import {navigationReducer} from './navigation.reducer'
import {navigationConstants} from '../../constants'
import * as actions from '../../actions/navigation/navigation.action'

it(`should handle ${navigationConstants.SET_XPOS}`, () => {
  // expect(navigationReducer([], actions.setPos({x: 1, y: 4}))).toEqual({destination: {x: 1, y: 4, dir: 0}})
  expect(navigationReducer([], actions.setXPos(3))).toEqual({destination: {x: 3}})
})
it(`should handle ${navigationConstants.SET_YPOS}`, () => {
  expect(navigationReducer([], actions.setYPos(4))).toEqual({destination: {y: 4}})
})
