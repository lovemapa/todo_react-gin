import React from 'react'
import classes from './Todo.css'
import Button from '../UI/Button/Button'
import moment from 'moment'

export default function Todo(props) {


    return (
        <div >
            <div className={classes.Todo} onClick={props.clicked}>
                <h4 className={classes.Name}>{props.name}</h4>
              Created At : <strong className={classes.strong}>
                    {moment(Date.parse(props.date)).format("DD MMM YYYY hh:mm a")}
                </strong>
                {/* <p style={{ fontWeight: 'bold' }}>{props.status ? "Completed" : "Not Completed"}</p> */}
                <br></br>
                <Button btnType="Success" clicked={props.checkoutContinue}>Update</Button>
                <Button btnType="Danger" clicked={props.checkoutContinue}> Delete</Button>
            </div>

        </div>
    )
}


