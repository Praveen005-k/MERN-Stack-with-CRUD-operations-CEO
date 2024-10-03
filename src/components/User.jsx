import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';


const User = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))

    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/deleteuser/' + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-success justify-content-center align-items-center' 
            style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp3950117.jpg)' }}>
            <div className='w-70 bg-white rounded p-3' >
                <Link to='/create' className='btn btn-success'>Add</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Date-of-Birth</th>
                            <th>Gender</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Technology</th>
                            <th>Shifts</th>

                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.dateofbirth}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.address}</td>
                                    <td>{user.technology}</td>
                                    <td>{user.shifts}</td>
                                    

                                    <td>
                                        <Link to={`/update/${user._id}`} className="btn btn-success me-2">
                                            <i className="bi bi-pencil-fill"></i> 
                                            
                                        </Link>
                                        <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)}>
                                            <i className="bi bi-trash-fill"></i> 
                                            
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User