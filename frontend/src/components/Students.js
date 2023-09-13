import React, {useEffect, useState} from 'react';

import {Table} from 'react-bootstrap';

import {getStudents} from '../services/StudentService.js';
import '../App.css';

const Students = () => {

    let [ students, setStudents] = useState([])

    useEffect(() => {
        let mounted = true
        // getStudents()
        //     .then(data => {
        //         if (mounted){
        //             setStudents(data)
        //             return () => mounted = false;
        //         }
               
        //     })
        fetch('http://127.0.0.1:8000/students', {
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                
            },
        })
            .then(res => res.json() )
            .then(res => {
                console.log(res)
                
                setStudents(res)
                return () => mounted = false;
            })
            .catch(error => {
                console.log("ERROR OCCURED", error)
                throw error
            })
        
    }, [])

    return(
        <div className='row'>
        <Table striped bordered hover>
            <thead>
                <tr>
                
                <th>First Name</th>
                <th>Last Name</th>
                <th>Registration Number</th>
                <th>Email</th>
                <th>Course</th>
                </tr>
            </thead>
            <tbody>
                {students.map((stud) => 
                    <tr key = {stud.studentId}>
                        <td>{stud.Firstname}</td>
                        <td>{stud.Lastname}</td>
                        <td>{stud.RegistrationNo}</td>
                        <td>{stud.Email}</td>
                        <td>{stud.Course}</td>

                    </tr>
                )}
                
            </tbody>
        </Table>
        </div>
    )

}

export default Students;