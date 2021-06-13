import React from 'react'

import Card from '../UI/Card'
import './AddUser.css'

const AddUser = (props) => {
    return(
        <Card className="input">
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age"/>
                <button type="submit">Submit</button>
            </form>
        </Card>
    )
}

export default AddUser