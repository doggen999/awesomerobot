import React from 'react'
import {connect} from 'react-redux'
import {navigate} from '../../actions/navigation/navigation.action'

class NavigationComponent extends React.Component {

  render () {
    let input
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.navigate(input.value)
          input.value = ''
        }}>
          <label>Directions <input ref={node => input = node}/></label>
          <button type='submit'>Navigate</button>
        </form>
        <span>
          {this.props.error
            ? 'Error'
            : `x: ${this.props.destination.x} y: ${this.props.destination.y} dir: ${this.props.destination.dir}`
          }
        </span>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.navigationReducer.error,
    destination: state.navigationReducer.destination
  }
}
const mapDispatchToProps = dispatch => {
  return {
    navigate: instructions => dispatch(navigate(instructions))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationComponent)
