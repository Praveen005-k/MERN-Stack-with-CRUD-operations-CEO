import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const { id } = useParams(); 
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dateofbirth, setDateofBirth] = useState('');
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

   
    
    useEffect(() => {
        axios.get(`http://localhost:5000/getuser/${id}`)
            .then(res => {
                const userData = res.data;
                setFirstName(userData.firstname);
                setLastname(userData.lastname);
                setEmail(userData.email);
                setPassword(userData.password);
                setDateofBirth(userData.dateofbirth);
                setGender(userData.gender);
                setMobile(userData.mobile);
                setAddress(userData.address);
                setTechnology(userData.technology);
                setShifts(userData.shifts)
               
            })
            .catch(err => console.log(err));
    }, [id]);

   
    
    const validateForm = () => {
        const newErrors = {};
        if (!firstname) newErrors.firstname = 'First name is required';
        if (!lastname) newErrors.lastname = 'Last name is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email address';
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


    const handleUpdate = (e) => {
        e.preventDefault();
        if (validateForm()) {
            axios.put(`http://localhost:5000/updateuser/${id}`, {
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
        <div className='d-flex vh-100 bg-warning justify-content-center align-items-center' style={{ backgroundImage: 'url(https://www.innovationnewsnetwork.com/wp-content/uploads/2022/05/%C2%A9-iStock-Who_I_am.jpg)' }}>
            <div className='w-50 bg-white rounded p-3' style={{ backgroundImage: 'url(https://img.freepik.com/premium-vector/white-abstract-background-design_665257-26.jpg?w=2000)' }}>
                <form onSubmit={handleUpdate}>
                    <h2 className='text-center'>Update User</h2>
                    <div className="mb-2">
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="Enter first name"
                            className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
                    </div>

                    <div className="mb-2">
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter last name"
                            className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                            value={lastname}
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
                            value={email}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>

                    <div className="mb-2">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            className={`form-control ${errors.dateofbirth ? 'is-invalid' : ''}`}
                            value={dateofbirth}
                            onChange={(e) => setDateofBirth(e.target.value)}
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
                                checked={gender === 'male'}
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
                                checked={gender === 'female'}
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
                            value={mobile}
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
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                    </div>

                    <div className="mb-2">
                        <label>Technology</label>
                        <input
                            type="text"
                            placeholder="Enter technology"
                            className={`form-control ${errors.technology ? 'is-invalid' : ''}`}
                            value={technology}
                            onChange={(e) => setTechnology(e.target.value)}
                        />
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

                   

                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;
