import React, { Component } from 'react'
import Todo from '../../components/Todo/Todo'
// import classes from './Todos.css'
import Modal from '../../components/Modal/Modal'

import { connect } from 'react-redux'
// import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import * as actions from '../../store/actions/index'

class Todos extends Component {

    state = {
        name: '',
        isModalVisible: false,

    }


    componentDidMount() {
        this.props.onFetchTodos(this.props.token)
    }


    clickedHandler = (id) => {
        this.props.onGetTodo(id, this.props.token)

        this.setState(prevState => {
            return {

                isModalVisible: !prevState.isModalVisible
            }
        })
    }

    modalClosedHandler = () => {
        this.setState({ isModalVisible: false })
    }


    render() {


        return (
            <div >
                <Modal
                    show={this.state.isModalVisible}
                    modalClosed={this.modalClosedHandler}
                />

                {this.props.todos.map(todo => (
                    <Todo
                        clicked={() => { this.clickedHandler(todo._id) }}
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
        token: state.auth.token,
        todo: state.getTodo.todo
    }
}


const mapDispatchStateToProps = dispatch => {

    return {
        onFetchTodos: (token) => dispatch(actions.fetchTodos(token)),
        onGetTodo: (id, token) => dispatch(actions.getTodo(id, token))
    }
}

export default connect(mapStateToProps, mapDispatchStateToProps)(Todos)
