import React from 'react'
import {connect} from 'react-redux'

class NavigationComponent extends React.Component {
    render() {
        return (
        <div>
            <label><input /></label>
        </div>) 
    }
}

export const NavigationContainer = connect()(NavigationComponent)