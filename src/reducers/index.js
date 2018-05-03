import {combineReducers} from 'redux'
import {configurationReducer} from './configuration/configuration.reducer'
import {navigationReducer} from './navigation/navigation.reducer'

export default combineReducers({configurationReducer, navigationReducer})
