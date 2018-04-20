import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {App} from './app'
import rootReducer from './reducers'
const store = createStore(rootReducer)

// const App = () => {return(<div>foo</div>)}

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)