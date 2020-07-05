import React from 'react'
import './Button.css'


export default function Button(props) {
    return (
        <button
            disabled={props.disabled}
            // className={[classes.Button, classes[props.btnType]].join(' ')}
            className='Button Success'

            onClick={props.clicked}>
            {props.children}
        </button>
    )
}
