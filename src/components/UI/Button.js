import React from 'react'

import './Button.css'

const Button = (props) => {
    return <button 
    className="button" 
    type={props.type || 'submit'}
    >Submit
    </button>
}

export default Button