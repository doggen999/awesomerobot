import React from 'react'
import {NavigationContainer} from './components/navigation/navigation.container';
import {ConfigurationContainer} from './components/configuration/configuration.container'


export const App = () => {
    return (
        <div>
            <NavigationContainer/>
            <ConfigurationContainer/>
        </div>
    ) 
}