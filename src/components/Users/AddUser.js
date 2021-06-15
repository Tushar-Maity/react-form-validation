import React, { useState } from 'react'

import Button from '../UI/Button'
import Card from '../UI/Card'
import './AddUser.css'

const AddUser = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredName, enteredAge);
    }

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return(
        <Card>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={nameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" onChange={ageChangeHandler}/>
                <Button type="submit">Submit</Button>
            </form>
        </Card>
    )
}

export default AddUser