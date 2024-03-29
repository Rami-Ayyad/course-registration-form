import React, { useState } from 'react'
import { useUserContext } from '../../context/UserContext'
import './PhoneOTP.css'
import { db } from '../../services/firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

export const PhoneOTP = () => {

    const [errorMsg, setErrorMsg] = useState("")
    const [otp, setOtp] = useState("")
    const [successFlag, setSuccessFlag] = useState(false)
    const [validatingFlag, setValidatinFlag] = useState(false)

    const { confirmObj, submitedData } = useUserContext()

    const navigate = useNavigate()
    const usersCollectionRed = collection(db, "users")

    const verifyOtp = async (e) => {
        e.preventDefault()

        if (otp === "" || otp === null) return

        if (!confirmObj) {
            setErrorMsg("Incorrect Code")
            return
        }

        try {

            setValidatinFlag(true)
            await confirmObj.confirm(otp)

            const adding = await addDoc(usersCollectionRed, submitedData)
            setSuccessFlag(true)
            setValidatinFlag(false)
        }
        catch (error) {
            
            setErrorMsg(error.message)
            setValidatinFlag(false)
        }
    }

    return (
        <div className='container'>

            <div style={{ display: !successFlag ? "block" : "none" }}>

                <h1 className='main-title'>Please enter code recived via SMS </h1>

                <form onSubmit={verifyOtp} className='form'>

                    <label htmlFor='otp'>Code numbers :</label>
                    <input maxLength="6" id='otp' className='otp-input' type='text' placeholder='Ex: 9 X X X X 3'
                        onChange={(e) => { setOtp(e.target.value) }} />

                    <button type='submit' className='submit-btn' disabled={otp.length < 6 || validatingFlag}>Done</button>
                    {errorMsg && <p className='error'>{errorMsg}</p>}

                    {validatingFlag && <h3 className='sending-code-msg'>Validating Code ...</h3>}

                </form>
            </div>


            <div className='main-title' style={{ display: successFlag ? "block" : "none" }} >
                <h2>Registration Is Complete !</h2>
                <h2>You've successfully enrolled in the course</h2>
                <button className='submit-btn' onClick={() => navigate('/studetns-table', { replace: true })}>See who else registered !</button>
            </div>

        </div>
    )
}
