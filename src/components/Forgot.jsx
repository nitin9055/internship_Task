import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Forgot = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    axios.defaults.withCredentials =true
    const handleLogin = async (e) => {
      e.preventDefault();
      setError('');
        axios.post('http://localhost:5000/api/forgot-password', {
           email
           }).then(response =>{
            if(response.data.status){
              navigate('/dashboard')
            }
            console.log(response.data)
           }).catch(err=>{
              console.log(err)
           })
        }
  return (
    <>
        <div className='mt-100'></div>
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6 offset-md-3 offset-lg-3">
                <div className="card bg-light p-3">
                    <div className='text-center'>
                        <i className='fa fa-user-circle-o fa-3x fc-purple'></i>
                    </div>
                    <h4 className='text-center mb-3 fc-purple'>Forgot Password</h4>
                    <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        className='form-control'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button type="submit" className="btn btn-tranparent-white btn-block btn-sm">Send</button>
                    </form>
                    <div className='d-flex justify-content-between mt-2 mb-0 fc-purple'>
                        <p>Back to <a href="/"><i className='fa fa-home mr-1 ml-2'></i>Home</a></p>
                    </div> 
                    <p className="register-link mt-1 text-center">
                    Don't have an account? <a href="/register" className='fc-purple'>Register here</a>
                    </p>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Forgot