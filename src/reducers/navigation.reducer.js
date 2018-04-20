const intialState = []
const navigationReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'NAVIGATE': return [...state]
    }
}