import React from 'react'

export const PhoneOTP = () => {
    return (
        <div className='container'>

            <h1 className='main-title'>Please enter recived password</h1>

            <form  className='form'>

                <label htmlFor='otp'>Password :</label>
                <input id='otp' type='number' placeholder='xxxxx'
                     
                // className={errors.email && touched.email ? "input-error" : "input-valid"} 
                />
                <button type='submit' className='submit-btn'>Done</button>
            </form>
        </div>
    )
}
