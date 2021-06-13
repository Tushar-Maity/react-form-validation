import React from 'react'

import Button from '../UI/Button'
import Card from '../UI/Card'
import './AddUser.css'

const AddUser = (props) => {
    return(
        <Card>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age"/>
                <Button>Submit</Button>
            </form>
        </Card>
    )
}

export default AddUser