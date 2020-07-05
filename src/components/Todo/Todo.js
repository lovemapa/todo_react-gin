import React from 'react'
import './Todo.css'
import Button from '../UI/Button/Button'


export default function Todo(props) {
    return (
        <div >
            <div className="Todo">
                Sample Todo
                <Button btnType="Success"> Edit </Button>
            </div>

        </div>
    )
}
