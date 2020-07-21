import * as actiontypes from '../actions/actionTypes'
import axios from '../../axios-todo'

export const onSignupStart = () => {

    return {
        type: actiontypes.INITIALIZE_SIGNUP
    }
}



export const onSignupSuccess = (userInfo) => {

    return {
        type: actiontypes.SIGNUP_SUCCESS,
        data: userInfo
    }
}

export const onSignupError = (error) => {

    return {
        type: actiontypes.SIGNUP_FAIL,
        error: error
    }
}


export const signUpSetFalse = () => {


    return dispatch => {
        setTimeout(() => {
            dispatch(setErrorFalse())
        }, 1000)
    }

}

export const setErrorFalse = () => {
    return {
        type: actiontypes.SIGNUP_ERROR_FALSE
    }

}



export const signup = (userInfo) => {

    return dispatch => {
        dispatch(onSignupStart())

        let userData = new FormData();
        for (let key in userInfo)
            userData.append(key, userInfo[key])

        axios(
            {
                method: 'post',
                url: 'user/register',
                data: userData,
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then(response => {

                dispatch(onSignupSuccess(response.data.data))

            }).catch(err => {


                if (err.response === undefined) {

                    dispatch(onSignupError("Server not connnected"))
                }
                else {
                    dispatch(onSignupError(err.response.data.error))
                }
                dispatch(signUpSetFalse())
            })

    }

}

