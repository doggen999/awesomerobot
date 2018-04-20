import React from 'react';
import {connect} from 'react-redux'

class ConfigurationComponent extends React.Component {
    render() {
        return (<div>ConfigurationComponent</div>)
    }
}

export const ConfigurationContainer = connect()(ConfigurationComponent)