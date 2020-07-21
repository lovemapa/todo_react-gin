import * as actionTypes from './actionTypes'
import axios from '../../axios-todo'

export const newTodoInit = () => {
    return {
        type: actionTypes.NEW_TODO_INIT
    }
}

export const newTodoSuccess = (todo) => {
    return {
        type: actionTypes.NEW_TODO_SUCCESS,
        todo: todo
    }
}

export const newTodoFail = (error) => {


    return {
        type: actionTypes.NEW_TODO_FAIL,
        error: error
    }
}



export const newTodoSetFalse = () => {


    return dispatch => {
        setTimeout(() => {
            dispatch(setErrorFalse())
        }, 1000)
    }

}

export const setErrorFalse = () => {
    return {
        type: actionTypes.NEW_TODO_SET_FALSE,
    }

}



export const newTodo = (todoData, token) => {

    return dispatch => {

        dispatch(newTodoInit())

        const options = {
            method: 'post',
            data: { name: todoData },
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'token': token
            },
            url: 'todo/create',
        }
        axios(options).then(response => {

            dispatch(newTodoSuccess(response.data.data))

        }).catch(error => {


            if (error.response === undefined) {

                dispatch(newTodoFail("Server not connnected"))
            }
            else {
                dispatch(newTodoFail(error.response.data.error))
            }

            dispatch(newTodoSetFalse())


        })
    }
}