import * as actionTypes from './actionTypes'

import axios from '../../axios-todo'

export const updateTodoInit = () => {
    return {
        type: actionTypes.UPDATE_TODO_INIT
    }
}


export const updateTodoFail = (error) => {


    return {
        type: actionTypes.UPDATE_TODO_FAIL,
        error: error
    }
}

export const updateTodoSuccess = (todo) => {
    return {
        type: actionTypes.UPDATE_TODO_SUCCEESS,
        todo: todo
    }
}

export const updatedFetch = (todo) => {

    return {
        type: actionTypes.UPDATED_FETCH,
        todo: todo
    }

}


export const updateTodo = (todoId, todo, token) => {

    return dispatch => {

        dispatch(updateTodoInit())
        const options = {
            method: 'patch',
            data: { name: todo },
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'token': token
            },
            url: `todo/updateTodo/${todoId}`,
        }
        axios(options).then(response => {

            dispatch(updateTodoSuccess(response.data.data))
            dispatch(updatedFetch(response.data.data))

        }).catch(error => {
            console.log(error);
            dispatch(updateTodoFail(error.response))


        })

    }
}