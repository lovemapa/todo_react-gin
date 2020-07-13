import React, { Component } from 'react'
import classes from './NewTodo.css'
import axios from '../../axios-todo'

export default class NewTodo extends Component {

    state = {
        name: ''
    }

    todoDataHandler = (event) => {

        const postData = {
            name: this.state.name,
        }

        axios.post('todo/create', postData)
            .then(response => {
                console.log(response);
                this.setState({ submitted: true })

            }).catch(e => { throw e })
    }
    render() {
        return (
            <div className={classes.NewTodo}>
                {/* {redirect} */}
                <h1>Add a New Todo</h1>
                <label>Content</label>
                <textarea rows="4"
                    value={this.state.name}
                    onChange={(event) => this.setState({ name: event.target.value })}
                />

                <button onClick={this.todoDataHandler}>Add</button>
            </div>
        )
    }
}
