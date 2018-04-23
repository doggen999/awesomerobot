import React from 'react'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import {App} from './app'
import rootReducer from './reducers'
const store = createStore(rootReducer, applyMiddleware(thunk))

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)