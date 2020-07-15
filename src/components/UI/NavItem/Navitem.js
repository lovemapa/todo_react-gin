import React from 'react'
import classes from './Navitem.css'
import { NavLink } from 'react-router-dom'

export default function Navitem(props) {


    return (
        <li className={classes.NavigationItem}>


            <NavLink to={props.link} >
                {props.children}
            </NavLink>
        </li >
    )
}
