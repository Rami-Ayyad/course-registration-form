import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { GrFacebook } from 'react-icons/gr'
import { FcGoogle } from 'react-icons/fc'
import './EntryForm.css'


export const EntryForm = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/course-from', { replace: false })
    }
    return (
        <div className='container'>

            <h1 className='main-title'>Form Login</h1>

            <form className='form'>
                <label htmlFor='email'>Email :</label>
                <input id='email' type='text' placeholder='Ex:jon@gmail.com' />

                {/* <label htmlFor='midName'>Paddword :</label>
                <input id='midName' type='text' placeholder='Ex:Ned' /> */}
                <button type='submit' className='submit-btn' onClick={e => handleSubmit(e)}>Continue with Email</button>
                <button type='submit' className='submit-btn-gl' onClick={e => handleSubmit(e)}>
                    Continue with Google account
                    
                    <FcGoogle size={30} style={{ backgroundColor: 'white', verticalAlign: '-8px', marginLeft: '10px' }} />
                </button>
                <button type='submit' className='submit-btn-fb' onClick={e => handleSubmit(e)}>
                    Continue with Facebook account
                    <GrFacebook size={30} style={{verticalAlign: '-8px', marginLeft: '10px' }} />
                    
                </button>
            </form>
        </div>
    )
}
