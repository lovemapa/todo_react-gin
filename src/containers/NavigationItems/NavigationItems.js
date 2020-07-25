import React from 'react'
import classes from './NavigationItems.css'
import Navitem from '../../components/UI/NavItem/Navitem'
import Aux from '../../hoc/Aux/Auxilliary'



export default function NavigationItems(props) {

    return (
        <Aux>
            <ul className={classes.NavigationItems}>

                {props.isAuth ? <Navitem link="/">My Todos</Navitem> : null}
                {props.isAuth ? <Navitem link="/new-Todo">New Todo</Navitem> : null}
                {!props.isAuth ? <Navitem link="/signUp" >Signup</Navitem>
                    :
                    <Navitem link="/logout" >Logout</Navitem>}
            </ul>

        </Aux>
    )
}
