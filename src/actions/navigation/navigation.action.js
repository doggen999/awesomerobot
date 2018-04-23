const navigate = (directions) => {
    return (dispatch, getState) => {
        const state = getState()
        validate(directions, state)
        .then(
            directions => parse(directions))
            .then(destination => ({type: navigateion_fulfilled, payload: destination}))
            err => dispatch({type: error, payload: 'could not validate input'})
    }
}