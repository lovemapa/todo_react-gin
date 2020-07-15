import React, { Component } from 'react'

import Form from './containers/Signup/Form'

import Navitems from './containers/NavigationItems/NavigationItems'
import Login from './containers/Auth/Auth'
import { connect } from "react-redux"
import * as actions from './store/actions/index'
import Logout from './containers/Auth/Logout/Logout'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup()
  }



  render() {

    let router = (
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/signUp" component={Form} />
        <Route exact path="/" component={Login} />
        <Redirect to="/" />
      </Switch>
    )

    if (this.props.isAuthenticated) router = (
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route exact path="/" component={Login} />
        {/* <Route path="/" exact component={Login} /> */}
        <Redirect to="/" />
      </Switch>
    )




    return (
      <div>

        <Navitems isAuth={this.props.isAuthenticated} />
        {router}
        {/* <Form isDisconnected={props.isDisconnected} /> */}
      </div>
    )
  }
}


const mapStateToProps = state => {


  return {
    isAuthenticated: state.auth.token !== null
  }
}


const mapDispatchToProps = dispatch => {

  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
