import * as actionTypes from '../actions/actionTypes'
const initailState = {
    todo: null,
    error: null,
    loading: false
}



const reducer = (state = initailState, actions) => {

    switch (actions.type) {

        case actionTypes.GET_TODO_INIT: {

            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.GET_TODO_SUCCESS: {

            return {
                ...state,
                todo: actions.todo,
                error: false,
                loading: false
            }
        }

        case actionTypes.GET_TODO_FAIL: {

            return {
                ...state,
                error: actions.error,
                loading: false
            }

        }





        default: return state
    }

}


export default reducer