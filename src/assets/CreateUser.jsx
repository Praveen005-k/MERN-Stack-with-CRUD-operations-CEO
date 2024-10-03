import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';

const CreateUser = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        dateofbirth: '',
        gender: '',
        mobile: '',
        address: '',
        technology: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to validate the form
    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstname) newErrors.firstname = 'First name is required';
        if (!formData.lastname) newErrors.lastname = 'Last name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.dob) newErrors.dob = 'Date of birth is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.mobile) {
            newErrors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number must be 10 digits';
        }
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.technology) newErrors.technology = 'Technology is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            axios.post("http://localhost:5000/createuse", formData,
                {firstname, lastname, email, password, dateofbirth, gender, mobile,  address, technology}
            )
                .then(result => {
                    console.log(result);
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
            <div className="card w-50" style={{ maxWidth: '500px', backgroundColor: 'white', borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <form onSubmit={handleSubmit}>
                    <h2 className="text-center mb-4">Register Form</h2>

                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter first name"
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            onChange={handleChange}
                        />
                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter last name"
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            onChange={handleChange}
                        />
                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            onChange={handleChange}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                            onChange={handleChange}
                        />
                        {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label><br />
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                                onChange={handleChange}
                            />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                className={`form-check-input ${errors.gender ? 'is-invalid' : ''}`}
                                onChange={handleChange}
                            />
                            <label className="form-check-label">Female</label>
                        </div>
                        {errors.gender && <div className="invalid-feedback d-block">{errors.gender}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile</label>
                        <input
                            type="text"
                            name="mobile"
                            placeholder="Enter mobile number"
                            className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                            onChange={handleChange}
                        />
                        {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Enter address"
                            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                            onChange={handleChange}
                        />
                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="technology" className="form-label">Technology</label>
                        <input
                            type="text"
                            name="technology"
                            placeholder="Enter technology"
                            className={`form-control ${errors.technology ? 'is-invalid' : ''}`}
                            onChange={handleChange}
                        />
                        {errors.technology && <div className="invalid-feedback">{errors.technology}</div>}
                    </div>

                    <button type="submit" className="btn btn-success w-100"  >Submit</button>
                    {/* <Link to="/register" className="btn btn-primary">Submit</Link> */}

                    
                </form>
            </div>
        </div>
    );
};

export default CreateUser;
