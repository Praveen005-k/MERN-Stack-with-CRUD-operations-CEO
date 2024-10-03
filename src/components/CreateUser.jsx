import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');
    const [gender, setGender] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [technology, setTechnology] = useState('');
    const [errors, setErrors] = useState({});
    const [shifts, setShifts] = useState({
        morning: false,
        night: false,
    });
    
    const navigate = useNavigate();

   
    const validateForm = () => {
        const newErrors = {};

        if (!firstname) newErrors.firstname = 'First name is required';
        if (!lastname) newErrors.lastname = 'Last name is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!password) newErrors.password = 'Password is required';
        if (!dateofbirth) newErrors.dateofbirth = 'Date of birth is required';
        if (!gender) newErrors.gender = 'Gender is required';
        if (!mobile) {
            newErrors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(mobile)) {
            newErrors.mobile = 'Mobile number must be 10 digits';
        }
        if (!address) newErrors.address = 'Address is required';
        if (!technology) newErrors.technology = 'Technology is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

   
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            axios.post('http://localhost:5000/createuser', {
                firstname, lastname, email, password, dateofbirth, gender, mobile, address, technology, shifts
            })
                .then(result => {
                    console.log(result);
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='d-flex vh-100  justify-content-center align-items-center ' style={{ backgroundImage: 'url(https://www.wallpapertip.com/wmimgs/160-1606283_web-developer-wallpaper.jpg)' }} >
            <div className='w-50 bg-white rounded p-3' style={{ backgroundImage: 'url(https://storage.pixteller.com/designs/designs-images/2019-03-27/04/business-background-backgrounds-business-1-5c9b8f78e6aa2.png)' }}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2 className='text-center'>Register Form</h2>
                    </div>
                    
                    <div className="mb-2">
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="Enter first name"
                            className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        {errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
                    </div>

                    <div className="mb-2">
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter last name"
                            className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        {errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
                    </div>


                    <div className="mb-2">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>


                    <div className="mb-2">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>


                    <div className="mb-2">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            className={`form-control ${errors.dateofbirth ? 'is-invalid' : ''}`}
                            onChange={(e) => setDateofbirth(e.target.value)}
                        />
                        {errors.dateofbirth && <div className="invalid-feedback">{errors.dateofbirth}</div>}
                    </div>


                    <div className="mb-3">
                        <label>Gender</label><br />
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="form-check-label">Female</label>
                        </div>
                        {errors.gender && <div className="invalid-feedback d-block">{errors.gender}</div>}
                    </div>


                    <div className="mb-2">
                        <label>Mobile</label>
                        <input
                            type="text"
                            placeholder="Enter mobile number"
                            className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                        {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                    </div>


                    <div className="mb-2">
                        <label>Address</label>
                        <input
                            type="text"
                            placeholder="Enter address"
                            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                    </div>

                 

                    <div className="mb-2">
                        <label>Technology</label>
                        <select
                            className={`form-select ${errors.technology ? 'is-invalid' : ''}`} // Bootstrap select class
                            onChange={(e) => setTechnology(e.target.value)}
                            value={technology}
                        >
                            <option value="">Select a technology</option>
                            <option value="Python">Python</option>
                            <option value="Java">Java</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="ReactJS">ReactJS</option>
                            <option value="NodeJS">NodeJS</option>
                            <option value="Database">Database</option>
                        </select>
                        {errors.technology && <div className="invalid-feedback">{errors.technology}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Shifts</label>
                        <div className="form-check form-check-inline">
                            <input
                                type="checkbox"
                                name="shift"
                                value="morning"
                                className="form-check-input"
                                
                                onChange={(e) => setShifts(e.target.value)}
                            />
                            <label className="form-check-label">Morning</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="checkbox"
                                name="shift"
                                value="night"
                                className="form-check-input"
                               
                                onChange={(e) => setShifts(e.target.value)}
                            />
                            <label className="form-check-label">Night</label>
                        </div>
                    </div>

                    

                    

                    <button className='btn btn-success w-100'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateUser;
