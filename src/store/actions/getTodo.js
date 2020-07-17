import * as actionTypes from './actionTypes'

import axios from '../../axios-todo'

export const getTodoInit = () => {
    return {
        type: actionTypes.GET_TODO_INIT
    }
}

export const getTodoSuccess = (todo) => {
    return {
        type: actionTypes.GET_TODO_SUCCESS,
        todo: todo
    }
}

export const getTodoFail = (error) => {


    return {
        type: actionTypes.GET_TODO_FAIL,
        error: error
    }
}

export const getTodo = (postId, token) => {

    return dispatch => {

        dispatch(getTodoInit())
        const options = {
            method: 'get',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'token': token
            },
            url: `todo/getTodo/${postId}`,
        }
        axios(options).then(response => {

            dispatch(getTodoSuccess(response.data.data))

        }).catch(error => {
            console.log(error);
            dispatch(getTodoFail(error.response))


        })
    }
}


