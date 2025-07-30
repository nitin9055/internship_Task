import React, { useState } from 'react';
import { NavLink, useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {token} =useParams()
  const navigate = useNavigate();
  axios.defaults.withCredentials =true
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
      axios.post('http://localhost:5000/api/reset-password/'+token, {
          password
         }).then(response =>{
          if(response.data.status){
            navigate('/login')
          }
          console.log(response.data)
         }).catch(err=>{
            console.log(err)
         })
  };

  return (
    <>
        <div className='mt-100'></div>
        <div className="container my-5">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-6 offset-md-3 offset-lg-3">
            <div className="card bg-light p-3">
                <div className='text-center'>
                    <i className='fa fa-key fa-3x fc-purple'></i>
                </div>
                <h4 className='text-center mb-3 fc-purple'>Reset Password</h4>
                <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="password">New Password</label>
                    <input
                    type="password"
                    id="password"
                    className='form-control'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit" className="btn btn-tranparent-white btn-block btn-sm">Submit</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </>
    
  );
};

export default ResetPassword;
