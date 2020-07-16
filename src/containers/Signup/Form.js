import React, { Component } from 'react'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import classes from './Form.css'
import { connect } from "react-redux";
import * as actions from '../../store/actions/index'
import { Link } from 'react-router-dom'

class Form extends Component {

    state = {
        contactForm: {
            firstName: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your First Name"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },

            lastName: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Last Name"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Your email"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: "input",
                elementConfig: {
                    type: "password",
                    autoComplete: "on",
                    placeholder: "Your password"
                },
                value: "",
                autocomplete: "on",
                validation: {
                    required: true,
                    minLength: 3

                }
            }
            ,
            mobile: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Mobile No"
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 3,
                },
                valid: false,
                touched: false
            },

        },
        formIsValid: false,


    }


    checkValidity(value, rules) {

        let isValid = true
        if (rules.required) {
            isValid = value.trim() !== "" && isValid
        }

        if (rules.minLength) { isValid = value.length >= rules.minLength && isValid }

        if (rules.maxLength) { isValid = value.length <= rules.maxLength && isValid }
        return isValid
    }


    inputChangeHandler = (event, formIdentifier) => {


        const updatedorderForm = {
            ...this.state.contactForm
        }

        const OrderFormValue = {
            ...updatedorderForm[formIdentifier]
        }

        OrderFormValue.value = event.target.value
        OrderFormValue.valid = this.checkValidity(OrderFormValue.value, OrderFormValue.validation)
        OrderFormValue.touched = true

        updatedorderForm[formIdentifier] = OrderFormValue

        let isFormValid = true
        for (let identifier in updatedorderForm) {


            isFormValid = updatedorderForm[identifier].valid && isFormValid
        }


        this.setState({ contactForm: updatedorderForm, formIsValid: isFormValid })

    }

    submitFormhandler = (event) => {
        event.preventDefault()

        const formData = {}
        for (let formId in this.state.contactForm) {
            formData[formId] = this.state.contactForm[formId].value
        }

        this.props.onSubmitForm(formData)

    }

    render() {

        const formArray = []
        for (let key in this.state.contactForm) {
            formArray.push({
                id: key,
                config: this.state.contactForm[key]
            })
        }



        let form = (<form
            className={classes.Form} onSubmit={this.submitFormhandler}>
            <h4 className={classes.h4}>Enter your data</h4>
            {
                formArray.map(element => {

                    return < Input key={element.id}
                        elementType={element.config.elementType}
                        elementConfig={element.config.elementConfig}
                        value={element.config.value}
                        invalid={!element.config.valid}
                        shouldValidate={element.config.validation}
                        touched={element.config.touched}
                        changed={(event) => this.inputChangeHandler(event, element.id)}
                    />

                })
            }

            <Button disabled={!this.state.formIsValid || this.props.isDisconnected} btnType="Success"> Submit</Button>
            <div>
                <Link to="/">Click here to sign In</Link>
            </div>

        </form>)

        if (this.props.loading)
            form = <Spinner />

        let Message = null
        if (this.props.error) {
            Message = (<h4 className={classes.error}>
                {this.props.error}
            </h4>)
        }

        return (
            <div >
                {form}
                {Message}
            </div >
        )
    }
}


const mapStateToprops = state => {
    return {
        loading: state.signup.loading,
        error: state.signup.error,
    }
}


const mapDispatchStateToProps = dispatch => {
    return {
        onSubmitForm: (userData) => dispatch(actions.signup(userData))
    }

}
export default connect(mapStateToprops, mapDispatchStateToProps)(Form)