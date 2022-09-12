import React from 'react'
import "../Styles/ErrorHandler.css"



const ErrorHandler = ({ errorMsg, color }) => {
    return (
        <div className='error-head' style={{
            backgroundColor: color ? "#90ee90" : "rgb(239, 176, 176)"
        }}>
            <div className='error-body'>
                <h4>{errorMsg}</h4>
            </div>
        </div>
    )
}

export default ErrorHandler