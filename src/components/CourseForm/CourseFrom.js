import React from 'react'
import './CourseFrom.css'
import { useFormik } from 'formik'
import { validarionSchema } from '../../helpers/validationSchema'

export const CourseFrom = () => {

    const onSubmit = (values, actions) => {
        console.log("submiteed")
        console.log(values)
        console.log(actions)
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            firstName: "",
            midName: "",
            lastName: "",
            phoneNumber: "",
            nationalID: "",
            email: "",
            address1: "",
            address2: "",
            linkedInProfile: "",
            twitterProfile: "",
            facebookProfile: "",
            courses: ""
        },
        validationSchema: validarionSchema,
        onSubmit,
    })

    console.log(errors)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log("clicked")
    }

    return (
        <div className='container'>

            <h1 className='main-title'>Course Registration Form</h1>

            <h4 style={{ color: 'white', marginLeft: '20%' }}>* means field is required</h4>

            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor='firstName'>*First Name :</label>
                <input id='firstName' type='text' placeholder='Ex:Jon'
                value={values.firstName} onChange={handleChange} onBlur={handleBlur}
                className={errors.firstName && touched.firstName ? "input-error" : "input-valid"} />
                {errors.firstName && touched.firstName && <p className='error'>{errors.firstName}</p>}

                <label htmlFor='midName'>Middle Name :</label>
                <input id='midName' type='text' placeholder='Ex:Ned'
                value={values.midName} onChange={handleChange} onBlur={handleBlur}
                className={errors.midName && touched.midName ? "input-error" : "input-valid"} />
                {errors.midName && touched.midName && <p className='error'>{errors.midName}</p>}

                <label htmlFor='lastName'>*Last Name :</label>
                <input id='lastName' type='text' placeholder='Ex:Stark'
                value={values.lastName} onChange={handleChange} onBlur={handleBlur}
                className={errors.lastName && touched.lastName ? "input-error" : "input-valid"} />
                {errors.lastName && touched.lastName && <p className='error'>{errors.lastName}</p>}

                <label htmlFor='phoneNumber'>*Phone Number :</label>
                <input id='phoneNumber' type='tel' placeholder='Ex:011*****577'
                value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur}
                className={errors.phoneNumber && touched.phoneNumber ? "input-error" : "input-valid"} />
                {errors.phoneNumber && touched.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}

                <label htmlFor='nationalID'>*National ID :</label>
                <input id='nationalID' type='number' placeholder='Ex:201***********20'
                value={values.nationalID} onChange={handleChange} onBlur={handleBlur}
                className={errors.nationalID && touched.nationalID ? "input-error" : "input-valid"} />
                {errors.nationalID && touched.nationalID && <p className='error'>{errors.nationalID}</p>}

                <label htmlFor='email'>*Email :</label>
                <input id='email' type='email' placeholder='Ex:jon@gmail.com'
                value={values.email} onChange={handleChange} onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : "input-valid"} />
                {errors.email && touched.email && <p className='error'>{errors.email}</p>}

                <label htmlFor='address1'>*First Address :</label>
                <input id='address1' type='text' placeholder='Ex:13 St. Egypt, Cairo...'
                value={values.address1} onChange={handleChange} onBlur={handleBlur}
                className={errors.address1 && touched.address1 ? "input-error" : "input-valid"} />
                {errors.address1 && touched.address1 && <p className='error'>{errors.address1}</p>}

                <label htmlFor='address2'>Second Address :</label>
                <input id='address2' type='text' placeholder='Ex:25 St. Egypt, Alex...'
                value={values.address2} onChange={handleChange} onBlur={handleBlur}
                className={errors.address2 && touched.address2 ? "input-error" : "input-valid"} />
                {errors.address2 && touched.address2 && <p className='error'>{errors.address2}</p>}

                <label htmlFor='linkedInProfile'>*LinkedIn Profile Link :</label>
                <input id='linkedInProfile' type='url' placeholder='Ex:https://www.linkedin.com/...'
                value={values.linkedInProfile} onChange={handleChange} onBlur={handleBlur}
                className={errors.linkedInProfile && touched.linkedInProfile ? "input-error" : "input-valid"} />
                {errors.linkedInProfile && touched.linkedInProfile && <p className='error'>{errors.linkedInProfile}</p>}

                <label htmlFor='twitterProfile'>Twitter Profile Link :</label>
                <input id='twitterProfile' type='url' placeholder='Ex:https://www.twitter.com/...'
                value={values.twitterProfile} onChange={handleChange} onBlur={handleBlur}
                className={errors.twitterProfile && touched.twitterProfile ? "input-error" : "input-valid"} />
                {errors.twitterProfile && touched.twitterProfile && <p className='error'>{errors.twitterProfile}</p>}

                <label htmlFor='facebookProfile'>Facebook Profile Link :</label>
                <input id='facebookProfile' type='url' placeholder='Ex:https://www.facebook.com/...'
                value={values.facebookProfile} onChange={handleChange} onBlur={handleBlur}
                className={errors.facebookProfile && touched.facebookProfile ? "input-error" : "input-valid"} />
                {errors.facebookProfile && touched.facebookProfile && <p className='error'>{errors.facebookProfile}</p>}

                <label htmlFor='courses'>*Please Select Desired Course :</label>
                <select id='courses' defaultValue='Select' className='select'
                    value={values.courses} onChange={handleChange} onBlur={handleBlur} >
                    

                    <option disabled>-- Select a course --</option>
                    <option value='React.JS'>React.JS</option>
                    <option value='Angular'>Angular</option>
                    <option value='Flutter'>Flutter</option>
                    <option value='Kotlin'>Kotlin</option>

                </select>
                {errors.courses && touched.courses && <p className='error'>{errors.courses}</p>}

                <button type='submit' className='submit-btn' >Register Course</button>
                {/* onClick={e => handleOnSubmit(e)} */}

            </form>
        </div>
    )
}
