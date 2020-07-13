import * as actionTypes from '../actions/actionTypes'

const initialState = {

    error: null,
    loading: false,
    data: {}
}


const reducer = (state = initialState, actions) => {


    switch (actions.type) {
        case actionTypes.INITIALIZE_SIGNUP:
            return {
                ...state,
                loading: true,
                error: null
            }

        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                data: actions.data,
                error: false,
            }
        case actionTypes.SIGNUP_FAIL:
            return {
                ...state,
                loading: false,
                error: actions.error,
            }


        default: return state
    }

}


export default reducer