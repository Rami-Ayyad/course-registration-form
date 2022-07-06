import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrFacebook } from 'react-icons/gr'
import { FcGoogle } from 'react-icons/fc'
import './EntryForm.css'
import { useFormik } from 'formik';
import { emailOnlySchema } from '../../helpers/validationSchema';
import { useUserContext } from '../../context/UserContext';


export const EntryForm = () => {

    const [btnError, setBtnError] = useState("")

    const {
        signUp, setEmail, signUpWithGoogle,
        signUpWithFacebook, setfName, setlName
    } = useUserContext()

    const navigate = useNavigate()

    const onSubmit = async (values, actions) => {

        try {
            const res = await signUp(values.email, "123456789")
            setEmail(res.user.email)
            navigate('/course-from', { replace: false })


        } catch (error) {
            console.log(error.message)
            errors.email = "this email have been used before !"
        }

        //need to clear feiled after submit & disable btn while submiting
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, } = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: emailOnlySchema,
        onSubmit,
    })

    const handleOnSubmitGL = async (e) => {
        e.preventDefault()
        try {
            const res = await signUpWithGoogle()
            console.log(res)
            console.log(res._tokenResponse.firstName,res._tokenResponse.lastName)
            setEmail(res.user.email)
            setfName(res._tokenResponse.firstName)
            setlName(res._tokenResponse.lastName)
            navigate('/course-from', { replace: false })

        } catch (error) {

            console.log(error.message)
            setBtnError(error.message)
        }
    }

    const handleOnSubmitFB = async (e) => {
        e.preventDefault()
        try {
            const res = await signUpWithFacebook()
            console.log(res)
            // setEmail(res.user.email)
            // navigate('/course-from', { replace: false })

        } catch (error) {
            console.log(error.message)
            setBtnError(error.message)
        }
    }


    return (
        <div className='container'>

            <h1 className='main-title'>Form Login</h1>

            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor='email'>Email :</label>
                <input id='email' type='email' placeholder='Ex:jon@gmail.com'
                    value={values.email} onChange={handleChange} onBlur={handleBlur}
                    className={errors.email && touched.email ? "input-error" : "input-valid"} />
                {errors.email && touched.email && <p className='error'>{errors.email}</p>}

                {/* <label htmlFor='midName'>Paddword :</label>
                <input id='midName' type='text' placeholder='Ex:Ned' /> */}
                <button type='submit' className='submit-btn'>Continue with Email</button>

                <button type='submit' className='submit-btn-gl' onClick={e => handleOnSubmitGL(e)}>
                    Continue with Google account
                    <FcGoogle size={30} style={{ backgroundColor: 'white', verticalAlign: '-8px', marginLeft: '10px' }} />
                </button>
                {btnError && <p className='error'>{btnError}</p>}

                <button type='submit' className='submit-btn-fb' onClick={e => handleOnSubmitFB(e)}>
                    Continue with Facebook account
                    <GrFacebook size={30} style={{ verticalAlign: '-8px', marginLeft: '10px' }} />
                </button>
                {btnError && <p className='error'>{btnError}</p>}
            </form>
        </div>
    )
}
