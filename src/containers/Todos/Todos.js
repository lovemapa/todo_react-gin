import React, { Component } from 'react'
import Todo from '../../components/Todo/Todo'
// import classes from './Todos.css'

// import NewTodo from '../NewTodo/NewTodo'
import { connect } from 'react-redux'
// import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import * as actions from '../../store/actions/index'

class Todos extends Component {




    componentDidMount() {

        this.props.onFetchOrders(this.props.token)

    }

    render() {

        return (
            <div >
                {this.props.todos.map(todo => (
                    <Todo
                        key={todo._id}
                        name={todo.name}
                        date={todo.date}
                        status={todo.status}
                    />
                ))}
            </div>
        )
    }
}






const mapStateToProps = state => {



    return {
        todos: state.todo.todos,
        error: state.todo.error,
        loading: state.todo.loading,
        token: state.auth.token
    }
}


const mapDispatchStateToProps = dispatch => {

    return {
        onFetchOrders: (token) => dispatch(actions.fetchTodos(token))
    }
}

export default connect(mapStateToProps, mapDispatchStateToProps)(Todos)
