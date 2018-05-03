/* eslint-disable */
import React from 'react'
import { render } from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import {App} from './app'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
/* eslint-enable */
const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
