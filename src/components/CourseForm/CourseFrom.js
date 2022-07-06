import React from 'react'
import './CourseFrom.css'

export const CourseFrom = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("clicked")
    }

    return (
        <div className='container'>

            <h1 className='main-title'>Course Registration Form</h1>

            <form className='form'>
                <label htmlFor='firstName'>First Name :</label>
                <input id='firstName' type='text' placeholder='Ex:Jon' />

                <label htmlFor='midName'>Middle Name :</label>
                <input id='midName' type='text' placeholder='Ex:Ned' />

                <label htmlFor='lastName'>Last Name :</label>
                <input id='lastName' type='text' placeholder='Ex:Stark' />

                <label htmlFor='phoneNumber'>Phone Number :</label>
                <input id='phoneNumber' type='tel' placeholder='Ex:011*****577' />

                <label htmlFor='nationalID'>National ID :</label>
                <input id='nationalID' type='number' placeholder='Ex:201***********20' />

                <label htmlFor='email'>Email :</label>
                <input id='email' type='email' placeholder='Ex:jon@gmail.com' />

                <label htmlFor='address1'>First Address :</label>
                <input id='address1' type='text' placeholder='Ex:13 St. Egypt, Cairo...' />

                <label htmlFor='address2'>Second Address :</label>
                <input id='address2' type='text' placeholder='Ex:25 St. Egypt, Alex...' />

                <label htmlFor='linkedInProfile'>LinkedIn Profile Link :</label>
                <input id='linkedInProfile' type='url' placeholder='Ex:https://www.linkedin.com/...' />

                <label htmlFor='twitterProfile'>Twitter Profile Link :</label>
                <input id='twitterProfile' type='url' placeholder='Ex:https://www.twitter.com/...' />

                <label htmlFor='facebookProfile'>Facebook Profile Link :</label>
                <input id='facebookProfile' type='url' placeholder='Ex:https://www.facebook.com/...' />

                <label htmlFor='courses'>Please Select Desired Course :</label>
                <select id='courses' defaultValue='Select' className='select'>
                    <option disabled>-- Select a course --</option>
                    <option value='React.JS'>React.JS</option>
                    <option value='Angular'>Angular</option>
                    <option value='Flutter'>Flutter</option>
                    <option value='Kotlin'>Kotlin</option>
                </select>

                <button type='submit' className='submit-btn' onClick={e => handleSubmit(e)}>Register Course</button>

            </form>
        </div>
    )
}
