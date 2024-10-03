import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserUpdate = () => {

    const { id } = useParams()
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [dateofbirth, setDateofbith] = useState()
    const [gender, setGender] = useState()
    const [mobile, setMobile] = useState()
    const [address, setAddess] = useState()
    const [technology, setTechnology] = useState()


    
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/getuser/' + id)
            .then(res => {
                console.log(res)
                
                setFirstname(req.data.firstname);
                setLastname(req.bata.lastname);
                setEmail(req.data.email);
                setPassword(req.data.password);
                setDateofbith(req.data.dateofbirth);
                setGender(req.data.gender);
                setMobile(req.data.mobile);
                setAddess(req.data.address);
                setTechnology(req.data.technology);

            })
            .catch(err => console.log(err))

    }, [])

    const Update = (e) => {
        e.preventDefault()
        axios.put("http://localhost:5000/updateuser/" + id, {  email, password,dateofbirth, gender, mobile, address, technology ,firstname, lastname})
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Update}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder='Enter first name.' className='form-control'
                            value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder='Enter last name..' className='form-control' value={lastname}
                            onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter email.' className='form-control' value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Enter password..' className='form-control' value={email}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Data of Birth</label>
                        <input type="date" placeholder='Enter data of birth.' className='form-control' value={email}
                            onChange={(e) => setDateofbith(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Gender</label>
                        <input type="text" placeholder='Enter gender.' className='form-control' value={email}
                            onChange={(e) => setGender(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Mobile</label>
                        <input type="text" placeholder='Enter mobile.' className='form-control' value={email}
                            onChange={(e) => setMobile(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder='Enter address.' className='form-control' value={email}
                            onChange={(e) => setAddess(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Technology</label>
                        <input type="text" placeholder='Enter technology.' className='form-control' value={technology}
                            onChange={(e) => setTechnology(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>

            </div>

        </div>
    )
}

export default UserUpdate