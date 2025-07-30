import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/logout', { withCredentials: true });
      if (res.data.status) {
        setIsAuthenticated(false);
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-0 bg-light">
      <NavLink className="navbar-brand p-0" to="/">
        <img src='/fitlife.png' alt="Logo" style={{ height: '70px' }} />
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' nav-active' : '')} to="/"><i className="fa fa-home mr-1"></i>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' nav-active' : '')} to="/about"><i className="fa fa-book mr-1"></i>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' nav-active' : '')} to="/contact"><i className="fa fa-phone mr-1"></i>Contact</NavLink>
          </li>
          {!isAuthenticated ? (
            <li className="nav-item">
              <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' nav-active' : '')} to="/login"><i className="fa fa-user-circle-o mr-1"></i>Login</NavLink>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' nav-active' : '')} to="/profile"><i className="fa fa-user mr-1"></i>Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' nav-active' : '')} to="/track"><i className="fa fa-line-chart mr-1"></i>Track</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => 'nav-link' + (isActive ? ' nav-active' : '')} to="/diet-plan"><i className="fa fa-cutlery mr-1"></i>Diet Plan</NavLink>
              </li>
              <li className="nav-item">
                <a onClick={handleLogout} className="nav-link" href="/"><i className="fa fa-sign-out mr-1"></i>Logout</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
