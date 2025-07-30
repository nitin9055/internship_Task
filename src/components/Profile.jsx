import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './loading.css'; // Assuming you have a CSS file for loader styles

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const username = 'admin'; // Get username from localStorage

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!username) {
          throw new Error('Username not found.');
        }

        const response = await axios.get(`http://localhost:5000/api/profile/${username}`);
        
        setTimeout(() => {
          setUserData(response.data);
          setLoading(false);
        }, 1000); // Adjusted to 1000ms for a more typical loading delay
      } catch (error) {
        setError(`Error fetching user data: ${error.message}`);
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    const verifyUser = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/verify');
        if (!res.data.status) {
          navigate('/register');
        } else {
          fetchUserData();
        }
      } catch (error) {
        console.error("Verification failed:", error);
        setError("Verification failed");
        setLoading(false);
        navigate('/register');
      }
    };

    verifyUser();
  }, [navigate, username]);

  if (loading) {
    return (
      <div className="loading">
        <style>{`
          .loader {
            position: relative;
            width: 54px;
            height: 54px;
            border-radius: 10px;
            margin: 0 auto; /* Center the loader */
          }

          .loader div {
            width: 8%;
            height: 24%;
            background: rgb(128, 128, 128);
            position: absolute;
            left: 50%;
            top: 30%;
            opacity: 0;
            border-radius: 50px;
            box-shadow: 0 0 3px rgba(0,0,0,0.2);
            animation: fade458 1s linear infinite;
          }

          @keyframes fade458 {
            from {
              opacity: 1;
            }
            to {
              opacity: 0.25;
            }
          }

          .loader .bar1 { transform: rotate(0deg) translate(0, -130%); animation-delay: 0s; }
          .loader .bar2 { transform: rotate(30deg) translate(0, -130%); animation-delay: -1.1s; }
          .loader .bar3 { transform: rotate(60deg) translate(0, -130%); animation-delay: -1s; }
          .loader .bar4 { transform: rotate(90deg) translate(0, -130%); animation-delay: -0.9s; }
          .loader .bar5 { transform: rotate(120deg) translate(0, -130%); animation-delay: -0.8s; }
          .loader .bar6 { transform: rotate(150deg) translate(0, -130%); animation-delay: -0.7s; }
          .loader .bar7 { transform: rotate(180deg) translate(0, -130%); animation-delay: -0.6s; }
          .loader .bar8 { transform: rotate(210deg) translate(0, -130%); animation-delay: -0.5s; }
          .loader .bar9 { transform: rotate(240deg) translate(0, -130%); animation-delay: -0.4s; }
          .loader .bar10 { transform: rotate(270deg) translate(0, -130%); animation-delay: -0.3s; }
          .loader .bar11 { transform: rotate(300deg) translate(0, -130%); animation-delay: -0.2s; }
          .loader .bar12 { transform: rotate(330deg) translate(0, -130%); animation-delay: -0.1s; }
        `}</style>
        <div className="loader">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <div className="bar4"></div>
          <div className="bar5"></div>
          <div className="bar6"></div>
          <div className="bar7"></div>
          <div className="bar8"></div>
          <div className="bar9"></div>
          <div className="bar10"></div>
          <div className="bar11"></div>
          <div className="bar12"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!userData) {
    return <div className="error">No user data found</div>;
  }

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile</h2>
      <div className="profile-details">
        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Weight:</strong> {userData.weight} kg</p>
        <p><strong>Height:</strong> {userData.height} cm</p>
        <p><strong>Age:</strong> {userData.age}</p>
        <p><strong>Address:</strong> {userData.address}</p>
      </div>
    </div>
  );
};

export default Profile;
