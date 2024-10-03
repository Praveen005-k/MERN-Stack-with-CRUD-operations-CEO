import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserCreate = () => {



    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setemail] = useState()
    const [password, setPassword] = useState()
    const [dateofbirth, setDateofbith] = useState()
    const [gender, setGender] = useState()
    const [mobile, setMobile] = useState()
    const [address, setAddess] = useState()
    const [technology, setTechnology] = useState()

    const navigate = useNavigate()

    const [errors, setErrors] = useState({});
    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstname) newErrors.firstname = 'First name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.password) newErrors.password = 'Password is required';
       
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.technology) newErrors.technology = 'Technology is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/createuser", { firstname, lastname, email,password, dateofbirth, gender, mobile, address, technology })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder='Enter first name.' className='form-control '
                            onChange={(e) => setFirstname(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder='Enter last name..' className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                            onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter email..' className='form-control'
                            onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder='Enter password..' className='form-control'
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Date of Birth</label>
                        <input type="date" placeholder='Enter date of birth.' className='form-control'
                            onChange={(e) => setDateofbith(e.target.value)} />
                    </div>

                  

                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label><br />
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                // className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                                // onChange={handleChange}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                // className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                                // onChange={handleChange}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="form-check-label">Female</label>
                        </div>
                        {/* {errors.gender && <div className="invalid-feedback d-block">{errors.gender}</div>} */}
                    </div>


                    <div className="mb-2">
                        <label htmlFor="">Mobile</label>
                        <input type="text" placeholder='Enter mobile...' className='form-control'
                            onChange={(e) => setMobile(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder='Enter address.' className='form-control'
                            onChange={(e) => setAddess(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Technology</label>
                        <input type="text" placeholder='Enter technology.' className='form-control'
                            onChange={(e) => setTechnology(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>

            </div>

        </div>
    )
}

export default UserCreate