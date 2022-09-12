import React from 'react'
import "../Styles/ErrorHandler.css"



const ErrorHandler = ({errorMsg}) => {
    return (
        <div className='error-head'>
            <div className='error-body'>
                <h4>{errorMsg}</h4>
            </div>
        </div>
    )
}

export default ErrorHandler