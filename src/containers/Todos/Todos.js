import React, { Component } from 'react'
import Todo from '../../components/Todo/Todo'
import Modal from '../../components/Modal/Modal'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class Todos extends Component {

    state = {
        name: '',
        todos: [],
        isModalVisible: false,

    }




    componentDidMount() {

        this.props.onFetchTodos(this.props.token)

    }


    clickedHandler = (id) => {
        this.props.onGetTodo(id, this.props.token)

        this.setState({ isModalVisible: true })
        // this.setState(prevState => {
        //     console.log(prevState);

        //     return {
        //     isModalVisible: !prevState.isModalVisible
        //     }
        // })
    }

    modalClosedHandler = () => {

        this.setState({ isModalVisible: false })

    }

    deleteHandler = (_id, token) => {

        this.props.onDelete(_id, token)

    }

    render() {

        let display = (
            this.props.todos.map(todo => (
                <Todo
                    key={todo._id}
                    clicked={() => { this.clickedHandler(todo._id) }}
                    delete={() => { this.deleteHandler(todo._id, this.props.token) }}
                    name={todo.name}
                    date={todo.date}
                    status={todo.status}
                />
            ))
        )


        return (

            <div >

                <Modal
                    show={this.state.isModalVisible}
                    modalClosed={this.modalClosedHandler}
                />

                {display}
            </div>
        )
    }
}






const mapStateToProps = state => {


    return {
        todos: state.todo.todos,
        error: state.todo.error,
        loading: state.delete.loading,
        token: state.auth.token,
        todo: state.getTodo.todo
    }
}


const mapDispatchStateToProps = dispatch => {

    return {
        onFetchTodos: (token) => dispatch(actions.fetchTodos(token)),
        onGetTodo: (id, token) => dispatch(actions.getTodo(id, token)),
        onDelete: (todoId, token) => dispatch(actions.deleteTodo(todoId, token))
    }
}

export default connect(mapStateToProps, mapDispatchStateToProps)(Todos)
