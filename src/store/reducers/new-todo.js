import * as actionTypes from '../actions/actionTypes'
const initailState = {
    todo: null,
    error: null,
    loading: false
}



const reducer = (state = initailState, actions) => {

    switch (actions.type) {

        case actionTypes.NEW_TODO_INIT: {

            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.NEW_TODO_SUCCESS: {

            return {
                ...state,
                todo: actions.todo,
                error: false,
                loading: false
            }
        }

        case actionTypes.NEW_TODO_FAIL: {

            return {
                ...state,
                error: actions.error,
                loading: false
            }
        }
        case actionTypes.NEW_TODO_SET_FALSE: {

            return {
                ...state,
                error: null
            }
        }


        default: return state
    }

}


export default reducer