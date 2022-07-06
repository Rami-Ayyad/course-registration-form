import React from 'react'
import './CourseFrom.css'

export const CourseFrom = () => {
    return (
        <div className='container'>
            <h1 className='main-title'>Course Registration Form</h1>
            <form className='form'>
                <label htmlFor='firstName'>First Name</label>
                <input id='firstName' type='text' placeholder='Enter First Name' />

                <label htmlFor='midName'>Middle Name</label>
                <input id='midName' type='text' placeholder='Enter Middle Name' />

                <label htmlFor='lastName'>Last Name</label>
                <input id='lastName' type='text' placeholder='Enter Last Name' />

                <label htmlFor='phoneNumber'>Phone Number</label>
                <input id='phoneNumber' type='tel' placeholder='Enter Phone Number' />

                <label htmlFor='nationalID'>National ID</label>
                <input id='nationalID' type='text' placeholder='Enter National ID' />

                <label htmlFor='email'>Email</label>
                <input id='email' type='email' placeholder='Enter Email' />

                <label htmlFor='address1'>First Address</label>
                <input id='address1' type='text' placeholder='Enter First Address' />

                <label htmlFor='address2'>Second Address</label>
                <input id='address2' type='text' placeholder='Enter Second Address' />

                <label htmlFor='linkedInProfile'>LinkedIn Profile Link</label>
                <input id='linkedInProfile' type='url' placeholder='LinkedIn Profile Link' />

                <label htmlFor='twitterProfile'>Twitter Profile Link</label>
                <input id='twitterProfile' type='url' placeholder='Twitter Profile Link' />

                <label htmlFor='facebookProfile'>Facebook Profile Link</label>
                <input id='facebookProfile' type='url' placeholder='Facebook Profile Link' />

                <label htmlFor='courses'>Please Select Desired Course</label>
                <select id='courses' defaultValue='Select' className='select'>
                    <option disabled>-- Select a course --</option>
                    <option value='React.JS'>React.JS</option>
                    <option value='Angular'>Angular</option>
                    <option value='Flutter'>Flutter</option>
                    <option value='Kotlin'>Kotlin</option>
                </select>



            </form>
        </div>
    )
}
