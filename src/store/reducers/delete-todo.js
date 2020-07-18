import * as actionTypes from '../actions/actionTypes'
const initailState = {
    error: null,
    loading: false
}





const reducer = (state = initailState, actions) => {

    switch (actions.type) {

        case actionTypes.DELETE_TODO_INIT: {

            return {
                ...state,
                loading: true,

            }
        }
        case actionTypes.DELETE_TODO_SUCCESS: {

            return {
                ...state,
                error: false,
                loading: false
            }
        }

        case actionTypes.DELETE_TODO_FAIL: {

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