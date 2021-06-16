import React, { useState } from 'react'

import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Card from '../UI/Card'
import Wrapper from '../Helpers/Wrapper'
import './AddUser.css'

const AddUser = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "please provide a valid input"
            })
            return;
        }
        if(+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "please provide a valid age"
            })
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        setEnteredName('')
        setEnteredAge('')
    }

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null)
    }

    return(
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className="input">
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={nameChangeHandler} value={enteredName}/>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge}/>
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser