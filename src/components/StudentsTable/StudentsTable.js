import React, { useEffect, useState } from 'react'
import './StudentsTable.css'
import { db } from '../../services/firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'

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
                <h1 className='main-title'>Please enter code recived via SMS </h1>
                {students.length && students.map(student => (
                    <table>
                        
                    </table>
                ))}
            </div>
        </div>
    )
}
