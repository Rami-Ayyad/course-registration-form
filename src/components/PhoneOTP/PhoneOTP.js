import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useUserContext } from '../../context/UserContext'

export const PhoneOTP = () => {

    const [errorMsg, setErrorMsg] = useState("")
    const [otp, setOtp] = useState("")
    const [successFlag, setSuccessFlag] = useState(false)

    const { confirmObj } = useUserContext()

    const verifyOtp = async (e) => {
        e.preventDefault()
        if (otp === "" || otp === null) return

        try {
            setSuccessFlag(false)
            await confirmObj.confirm(otp)
            setSuccessFlag(true)

            console.log("SUCCESS")
        }
        catch (error) {
            console.log(error.message)
            setErrorMsg(error.message)
        }
    }

    return (
        <div className='container'>

            <div style={{ display: !successFlag ? "block" : "none" }}>
                <h1 className='main-title'>Please enter code recived via SMS </h1>
                <form onSubmit={verifyOtp} className='form'>

                    <label htmlFor='otp'>Code numbers :</label>
                    <input id='otp' type='number' placeholder='Ex: 9 X X X X 3'
                        onChange={(e) => { setOtp(e.target.value) }}
                    // className={errors.email && touched.email ? "input-error" : "input-valid"} 
                    />
                    <button type='submit' className='submit-btn'>Done</button>
                    {errorMsg && <p className='error'>{errorMsg}</p>}
                </form>
            </div>


            <div className='main-title'style={{ display:successFlag ? "block" : "none" }} >
                <h2>Registration Is Complete !</h2>
                <h2>You've successfully enrolled in the course</h2>
            </div>



        </div>
    )
}
