import React from 'react'

import './Button.css'

const Button = (props) => {
    return <button 
    className="button" 
    type={props.type || 'submit'}
    onClick={props.onClick}
    >Submit
    </button>
}

export default Button