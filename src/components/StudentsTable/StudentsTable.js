import React, { useEffect, useState } from 'react'
import './StudentsTable.css'
import { db } from '../../services/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function StudentsTable() {

    const [students, setStudent] = useState([])

    const usersCollectionRed = collection(db, "users")

    useEffect(() => {
        const getStudents = async () => {
            const data = await getDocs(usersCollectionRed)
            setStudent(data.docs.map(doc => doc.data()))
            console.log(students)
        }
        getStudents()

    }, [])

    console.log(students)
    return (
        <div>
            <div className='container'>
                <h1 className='main-title'>Students List</h1>

                <table className='table'>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Registered Course</th>
                    </tr>
                    {students.length && students.map(student => (

                        <tr>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.selectedCourse}</td>
                        </tr>

                    ))}
                </table>
            </div>
        </div>
    )
}
