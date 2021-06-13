import React from 'react'

const AddUser = (props) => {
    return(
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username"/>
            <label htmlFor="age">Age</label>
            <input type="number" id="age"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddUser