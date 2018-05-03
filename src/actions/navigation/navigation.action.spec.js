import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {navigate, modGrad, setYPos, setXPos} from './navigation.action'
import {navigationConstants} from '../../constants'

const mockStore = configureStore([thunk])

describe('navigation', () => {
  let store

  beforeEach(() => {
    store = mockStore({
      navigationReducer: {
        destination: {
          x: 0, y: 0, dir: 0
        }
      },
      configurationReducer: {
        lang: 'se'
      }
    })
  })

  it('should return positive grad values', () => {
    expect(modGrad(-90)).toEqual(270)
    expect(modGrad(-180)).toEqual(180)
    expect(modGrad(-270)).toEqual(90)
    expect(modGrad(-360)).toEqual(0)
  })

  it('should return error with incorrect instructions', () => {
    return store.dispatch(navigate('ABC'))
      .then(() => {
      }, () => {
        const storeActions = store.getActions()
        expect(storeActions[0]).toEqual({type: navigationConstants.NAVIGATE_ERROR, payload: 'ABC'})
      })
  })

  it('should return navigate_success with position', () => {
    store.dispatch(navigate('GGG'))
      .then(() => {
        store.dispatch(navigate('VGHG'))
      })
      .then(() => {
        const storeActions = store.getActions()
        expect(storeActions[0]).toEqual({type: navigationConstants.NAVIGATE_FULFILLED, payload: {x: 0, y: 3, dir: 0}})
        expect(storeActions[1]).toEqual({type: navigationConstants.NAVIGATE_FULFILLED, payload: {x: -1, y: 1, dir: 0}})
      })
  })

  it('should return success with position with configured startpos', () => {
    store = mockStore({navigationReducer: {destination: {x: 1, y: 2, dir: 0}}, configurationReducer: {lang: 'se'}})
    store.dispatch(navigate('HGHGGHGHG')).then(() => {
      const storeActions = store.getActions()
      expect(storeActions[0]).toEqual({type: navigationConstants.NAVIGATE_FULFILLED, payload: {x: 1, y: 1, dir: 0}})
    })
  })

  it('should return navigate_fulfilled with position with english instructions', () => {
    store = mockStore({navigationReducer: {destination: {x: 0, y: 0, dir: 0}}, configurationReducer: {lang: 'en'}})
    store.dispatch(navigate('LFRRF')).then(() => {
      store.dispatch(navigate('LLF')).then(() => {
        store.dispatch(navigate('RRFLFFLRF')).then(() => {
          const storeActions = store.getActions()
          expect(storeActions[0]).toEqual({type: navigationConstants.NAVIGATE_FULFILLED, payload: {x: 0, y: 0, dir: 90}})
          expect(storeActions[1]).toEqual({type: navigationConstants.NAVIGATE_FULFILLED, payload: {x: 0, y: -1, dir: 180}})
          expect(storeActions[2]).toEqual({type: navigationConstants.NAVIGATE_FULFILLED, payload: {x: 3, y: -1, dir: 90}})
        })
      })
    })
  })

  it('should return set_pos with configured start pos', () => {
    expect(setXPos(3)).toEqual({type: navigationConstants.SET_XPOS, x: 3})
    expect(setYPos(5)).toEqual({type: navigationConstants.SET_YPOS, y: 5})
  })
})
