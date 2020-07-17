import * as actionTypes from '../actions/actionTypes'
const initailState = {
    todo: null,
    error: null,
    loading: false
}





const reducer = (state = initailState, actions) => {

    switch (actions.type) {

        case actionTypes.UPDATE_TODO_INIT: {

            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.UPDATE_TODO_SUCCEESS: {

            return {
                ...state,
                todo: actions.todo,
                error: false,
                loading: false
            }
        }

        case actionTypes.UPDATE_TODO_FAIL: {

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