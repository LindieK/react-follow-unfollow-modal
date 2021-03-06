import React from 'react'
import '../styles/Button.css'

const Button = (props) => {
    return (
        <button id="btn1" className="btn primary cta-btn" onClick={props.onClick}>
            {props.btnText}
        </button>
    )
}
export default Button