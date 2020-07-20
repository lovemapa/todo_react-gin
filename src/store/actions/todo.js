import * as actionTypes from '../../store/actions/actionTypes'

import axios from '../../axios-todo'



export const fetchTodosuccess = (todos) => {


    return {
        type: actionTypes.FETCH_TODOS_SUCCESS,
        todos: todos
    }
}


export const fetchTodoFail = (error) => {
    return {
        type: actionTypes.FETCH_TODOS_FAIL,
        error: error
    }
}



export const fetchTodosStart = () => {


    return {
        type: actionTypes.FETCH_TODOS_INIT,
    }
}






export const fetchTodos = (token) => {

    return dispatch => {
        dispatch(fetchTodosStart())

        const options = {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'token': token
            },
            url: 'todo/getTodos',
        }
        axios(options).then(response => {

            let fetchedOrders = []
            for (let key in response.data.data) {
                fetchedOrders.push({
                    ...response.data.data[key],
                    id: key
                })
            }
            dispatch(fetchTodosuccess(fetchedOrders))
       


        }).catch(err => {



            dispatch(fetchTodoFail(err.response))

        })
    }
}