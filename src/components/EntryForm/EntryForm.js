import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GrFacebook } from 'react-icons/gr'
import { FcGoogle } from 'react-icons/fc'
import './EntryForm.css'
import { useFormik } from 'formik';
import { emailOnlySchema } from '../../helpers/validationSchema';


export const EntryForm = () => {

    const navigate = useNavigate()

    const onSubmit = (values, actions) => {
        console.log("submiteed")
        console.log(values)
        console.log(actions)
        navigate('/course-from', { replace: false })
        //need to clear feiled after submit & disable btn while submiting
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: emailOnlySchema,
        onSubmit,
    })

    const handleOnSubmit = (e) => {
        e.preventDefault()
        navigate('/course-from', { replace: false })
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

                <button type='submit' className='submit-btn-gl' onClick={e => handleOnSubmit(e)}>
                    Continue with Google account
                    <FcGoogle size={30} style={{ backgroundColor: 'white', verticalAlign: '-8px', marginLeft: '10px' }} />
                </button>

                <button type='submit' className='submit-btn-fb' onClick={e => handleOnSubmit(e)}>
                    Continue with Facebook account
                    <GrFacebook size={30} style={{ verticalAlign: '-8px', marginLeft: '10px' }} />
                </button>
            </form>
        </div>
    )
}
