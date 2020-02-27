const initialState = {
    user: {
        id: null,
        email: ''
    },
    recipes: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default reducer