import * as actionTypes from './actionTypes'
import axios from '../../axios-todo'


export const deleteTodoInit = () => {
    return {
        type: actionTypes.DELETE_TODO_INIT
    }
}


export const deleteTodoFail = (error) => {


    return {
        type: actionTypes.DELETE_TODO_FAIL,
        error: error
    }
}

export const deleteTodoSuccess = () => {
    return {
        type: actionTypes.DELETE_TODO_SUCCESS
    }
}

export const deletedFetch = (id) => {

    return {
        type: actionTypes.DELETED_FETCH,
        id: id
    }

}


export const deleteTodo = (todoId, token) => {

    return dispatch => {

        dispatch(deleteTodoInit())
        const options = {
            method: 'delete',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'token': token
            },
            url: `todo/deleteTodo/${todoId}`,
        }
        axios(options).then(response => {

            dispatch(deleteTodoSuccess())
            dispatch(deletedFetch(todoId))

        }).catch(error => {
            console.log(error);
            dispatch(deleteTodoFail(error.response))


        })

    }
}