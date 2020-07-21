import React, { Component } from 'react'
import classes from './NewTodo.css'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'

import Spinner from '../../components/UI/Spinner/Spinner'

class NewTodo extends Component {

    state = {
        name: "",
    }

    todoDataHandler = (event) => {

        this.props.onAddTodo(this.state.name, this.props.token)
        this.setState({ name: "" })

    }

    render() {


        let todo = (<div>
            <h1>Add a New Todo</h1>
            <label>Content</label>
            <textarea rows="4"
                name="name"
                value={this.state.name}
                onChange={(event) => this.setState({ name: event.target.value })}
            />

            <button onClick={this.todoDataHandler}>Add</button>
        </div>)
 
        let errorMessage = null
        if (this.props.error) {
            errorMessage = (<h4 className={classes.error}>
                {this.props.error}
            </h4>)
        }

        if (this.props.loading)
            todo = <Spinner />
        return (

            <div className={classes.NewTodo}>
                {todo}
                {errorMessage}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        loading: state.newTodo.loading,
        error: state.newTodo.error,
        todo: state.newTodo.todo,
    }

}


const mapDispatchToProps = dispatch => {
    return {

        onAddTodo: (newTodo, token) => dispatch(actions.newTodo(newTodo, token))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(NewTodo)