import React from 'react'
import {connect} from 'react-redux'
import {configLanguage} from '../../actions/configuration/configuration.action'
import {setXPos, setYPos} from '../../actions/navigation/navigation.action'

class ConfigurationComponent extends React.Component {
  handleChange (e) {

  }

  render () {
    return (
      <fieldset>
        <legend>Configurations</legend>
        <label>Language:&nbsp;
          <select value={this.props.lang} onChange={(e) => { this.props.changeLang(e.target.value) }}>
            <option>se</option>
            <option>en</option>
          </select>
        </label>
        {/* <label>Shape: </label> */}
        {/* <label>Width: <input/></label> */}
        {/* <label>Height: <input/></label> */}
        <fieldset>
          <legend>Start position</legend>
          <label>x: <input onChange={(e) => { 
            this.props.setXPos(e.target.value) }} value={this.props.destination.x}/></label>
          <label>y: <input onChange={(e) => { 
            this.props.setYPos(e.target.value) }} value={this.props.destination.y}/></label>
        </fieldset>
      </fieldset>
    )
  }
}
const mapStateToProps = state => ({
  lang: state.configurationReducer.lang,
  destination: state.navigationReducer.destination
})
const mapDispatchToProps = dispatch => ({
  changeLang: val => dispatch(configLanguage(val)),
  setXPos: xVal => dispatch(setXPos(xVal)),
  setYPos: yVal => dispatch(setYPos(yVal))
})

export const ConfigurationContainer = connect(mapStateToProps, mapDispatchToProps)(ConfigurationComponent)
