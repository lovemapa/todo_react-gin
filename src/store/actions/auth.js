import * as actionTypes from './actionTypes'
import axios from '../../axios-todo'


export const authStart = () => {

    return {
        type: actionTypes.AUTH_START
    }
}


export const authSuccess = (token, userId) => {

    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}


export const authFail = (error) => {

    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}


export const checkAuthExpired = (expirationTime) => {

    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime)
    }

}

export const auth = (email, password) => {

    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        axios.post("user/login", authData)
            .then(response => {

                const date = new Date(response.data.data.tokenExpiresAt)
                localStorage.setItem('token', response.data.data.token)
                localStorage.setItem('expirationTime', date)
                localStorage.setItem('userId', response.data.data.id)
                dispatch(authSuccess(response.data.data.token, response.data.data.id))
                dispatch(checkAuthExpired(response.data.data.tokenExpiresAt / 1000))
            }).catch(error => {

                dispatch(authFail(error.response.data.error))
                dispatch(authSetFalse())
            })
    }

}


export const logout = () => {
    localStorage.removeItem('expirationTime')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}


export const authSetFalse = () => {

    return dispatch => {
        setTimeout(() => {
            dispatch(setErrorFalse())
        }, 1000)
    }

}

export const setErrorFalse = () => {
    return {
        type: actionTypes.AUTH_STATUS_SET_FALSE,
    }

}



export const authCheckState = () => {
    return dispatch => {

        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())

        }
        else {
            const expirationTime = new Date(localStorage.getItem('expirationTime'))

            if (expirationTime <= new Date())
                dispatch(logout())
            else {
                const userId = localStorage.getItem('userId')
                dispatch(authSuccess(token, userId))
                dispatch(checkAuthExpired((expirationTime / 1000)))
            }
        }
    }
}
