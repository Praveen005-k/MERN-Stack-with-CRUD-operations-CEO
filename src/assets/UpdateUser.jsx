import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateUser = () => {
    

    const { id } = useParams()
    const [user, setUser] = useState();


    const [firstname, setFirstName] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [dateodbirth, setDateofBirth] = useState()
    const [gender, setGender] = useState()
    const [mobile, setMobile] = useState()
    const [address, setAddress] = useState()
    const [technology, settechnology] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/getuser/' + id)
            .then(res => {
                console.log(res)
                setFirstName(res.data.firstname)
                setLastname(res.data.lastname)
                setEmail(res.data.email)
                setPassword(res.data.password)
                setDateofBirth(res.data.dateodbirth)
                setGender(res.data.gender)
                setMobile(res.data.mobile)
                setAddress(res.data.address)
                settechnology(res.data.technology)
            })
            .catch(err => console.log(err))

    }, [])


    

   

    const Update = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:5000/updateuser/${id}`, { firstname, lastname, email, password, dateodbirth, mobile, gender, address, technology })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-warning justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Update}>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder='Enter name.' className='form-control'
                            value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder='Enter email.' className='form-control' value={lastname}
                            onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter age.' className='form-control' value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder='Enter age.' className='form-control' value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Date of Birth</label>
                        <input type="date" placeholder='Enter age.' className='form-control' value={dateodbirth}
                            onChange={(e) => setDateofBirth(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Gender</label>
                        <input type="text" placeholder='Enter gender.' className='form-control' value={gender}
                            onChange={(e) => setGender(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Mobile</label>
                        <input type="text" placeholder='Enter mobile.' className='form-control' value={mobile}
                            onChange={(e) => setMobile(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder='Enter address.' className='form-control' value={address}
                            onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Technology</label>
                        <input type="text" placeholder='Enter technology.' className='form-control' value={technology}
                            onChange={(e) => settechnology(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>

            </div>

        </div>
    )
}

export default UpdateUser