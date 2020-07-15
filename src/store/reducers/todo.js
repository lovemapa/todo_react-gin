import * as actionTypes from '../actions/actionTypes'
const initialState = {

    todos: [],
    error: null,
    loading: false
}

const todoReducer = (state = initialState, actions) => {


    switch (actions.type) {


        case actionTypes.FETCH_TODOS_INIT: {

            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.FETCH_TODOS_SUCCESS: {

            

            return {
                ...state,
                loading: false,
                todos: actions.todos,
                error:false
            }
        }
        case actionTypes.FETCH_TODOS_FAIL: {

            return {
                ...state,
                error: actions.error,
                loading: false
            }
        }

        default: return state
    }
}


export default todoReducer