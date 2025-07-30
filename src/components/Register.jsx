import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        username,
        name,
        age,
        email,
        address,
        weight,
        height,
        password
      });
      
      if (response.data.message === "Registered Successfully..") {
        setSuccess('Registration successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Redirect after 2 seconds
      } else {
        setError(response.data.message);
      }

    } catch (err) {
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6 offset-md-3 offset-lg-3">
          <div className="card bg-light p-3">
            <div className='text-center'>
              <i className='fa fa-user-circle-o fa-3x mt-2 mb-0 fc-purple'></i>
            </div>
            <h2 className='text-center mt-1 mb-3 fc-purple'>Register</h2>
            <form onSubmit={handleRegister} className="register-form">
              <div className="form-group">
                <label htmlFor="Username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='form-control'
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='form-control'
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className='form-control'
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='form-control'
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className='form-control'
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="weight">Weight (kg)</label>
                <input
                  type="number"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className='form-control'
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="height">Height (cm)</label>
                <input
                  type="number"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className='form-control'
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='*************'
                  className='form-control'
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder='*************'
                  className='form-control'
                  required
                />
              </div>
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}
              <button type="submit" className="btn btn-transparent-white btn-block btn-sm">Register</button>
            </form>
            <div className='d-flex justify-content-between'>
              <p className="mt-2 mb-0">
                Already have an account? <a href="/login" className='fc-purple'>Login here</a>
              </p>
              <p className="mt-2">
                <a href="/" className='fc-purple'><i className='fa fa-home mr-1'>Home</i></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
