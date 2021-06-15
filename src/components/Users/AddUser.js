import React, { useState } from 'react'

import Button from '../UI/Button'
import Card from '../UI/Card'
import './AddUser.css'

const AddUser = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if(+enteredAge < 1) {
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

    return(
        <Card className="input">
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={nameChangeHandler} value={enteredName}/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge}/>
                <Button type="submit">Submit</Button>
            </form>
        </Card>
    )
}

export default AddUser