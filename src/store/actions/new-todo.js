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
            
            dispatch(newTodoFail(error.response))


        })
    }
}