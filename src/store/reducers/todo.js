import * as actionTypes from '../actions/actionTypes'
const initialState = {

    todos: [],
    error: null,
    loading: false
}

const todoReducer = (state = initialState, actions) => {


    switch (actions.type) {


        case actionTypes.FETCH_TODOS_INIT: {

            return {
                ...state,
                loading: true
            }
        }

        case actionTypes.UPDATED_FETCH: {

            let _id = actions.todo._id

            let arr = [...state.todos] // right way for immutabilty
            let index = arr.findIndex(each => {
                return each._id === _id
            })
            arr[index] = actions.todo
            return {
                ...state,
                todos: arr,
                loading: false,
                error: false

            }
        }


        case actionTypes.DELETED_FETCH: {

            let _id = actions.id

            let arr = [...state.todos] // right way for immutabilty

            let index = arr.findIndex(todo => {
                return todo._id === _id
            })

            arr.splice(index, 1)

            return {
                ...state,
                todos: arr,
                loading: false,
                error: false

            }
        }


        case actionTypes.FETCH_TODOS_FAIL: {

            return {
                ...state,
                error: actions.error,
                loading: false
            }
        }

        case actionTypes.FETCH_TODOS_SUCCESS: {


            return {
                ...state,
                loading: false,
                todos: actions.todos,
                error: false
            }
        }


        default: return state
    }
}


export default todoReducer