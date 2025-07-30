import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      if (response.data.status) {
        setIsAuthenticated(true);
        navigate('/profile');
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (err) {
      console.log(err);
      setError('An error occurred during login');
    }
  };

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
              <h4 className='text-center mb-3 fc-purple'>Login</h4>
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
                <div className="form-group">
                  <label htmlFor="password">Password</label>
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
                <button type="submit" className="btn btn-tranparent-white btn-block btn-sm">Login</button>
              </form>
              <div className='d-flex justify-content-between mt-2 mb-0 fc-purple'>
                <p>Back to <NavLink to="/"><i className='fa fa-home mr-1 ml-2'></i>Home</NavLink></p>
                <p><NavLink to='/forgot'><i className='fa fa-key mr-1'></i>Forgot Password</NavLink></p>
              </div>
              <p className="register-link mt-1 text-center">
                Don't have an account? <NavLink to="/register" className='fc-purple'>Register here</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
