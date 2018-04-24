import {navigationReducer} from './navigation.reducer'
import {navigationConstants} from '../../constants'
import * as actions from '../../actions/navigation/navigation.action'

it(`should handle ${navigationConstants.SET_POS}`, () => {
  expect(navigationReducer([], actions.setPos({x: 1, y: 4}))).toEqual([{destination: {x: 1, y: 4, dir: 0}}])
})
