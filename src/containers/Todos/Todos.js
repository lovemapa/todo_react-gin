import React, { Component } from 'react'
import Todo from '../../components/Todo/Todo'
import classes from './Todos.css'
import axios from '../../axios-todo'
import NewTodo from '../NewTodo/NewTodo'

import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

export default class Todos extends Component {


    state = {
        todos: [],
        auth: true

    }

    componentDidMount() {

        // let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE1OTM3NjgyNDQwMDAsInVzZXJfaWQiOiI1ZWZlZjkyNWMzN2U4ZTMxMTVlMDllOTEifQ.DHh35SLMOY71fkTTxld5VU22KA-qz-doeEZRP3pyJP4`
        axios.get('todo/getTodos',
        ).then(response => {

            let fetchedTodo = []
            fetchedTodo = response.data
            console.log(fetchedTodo.data);

            this.setState({ todos: fetchedTodo.data })

        }).catch(err => {
            console.log(err);

        })
    }
    render() {

        return (
            <div >
                <div className={classes.Blog}>

                    {/* <li> <NavLink exact activeClassName={classes.active} to="/new-Todo" >New Todo</NavLink></li> */}
                    <li> <NavLink to="/new-Todo" >New Todo</NavLink></li>

                    <ul>
                    </ul>
                    {/* <a className={classes.active} href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a> */}
                </div>

                <Switch>

                    {this.state.auth ? <Route path="/new-todo" exact component={NewTodo} /> : null}


                </Switch>
                {this.state.todos.map(todo => (
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
