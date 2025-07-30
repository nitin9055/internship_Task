import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './loading.css';

const UserTrack = () => {
  const [trackData, setTrackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userId = '64e5d8f9c4b0e5b2a6d6c8b7'; // Retrieve this from localStorage or context

  useEffect(() => {
    const fetchTrackData = async () => {
      try {
        if (!userId) {
          throw new Error('User ID not found.');
        }

        const response = await axios.get(`http://localhost:5000/api/tracks/${userId}`);
        
        // Adding a 1-second delay before setting data and loading state
        setTimeout(() => {
          setTrackData(response.data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError(`Error fetching track data: ${error.message}`);
        console.error('Error fetching track data:', error);
        setLoading(false);
      }
    };

    const verifyUser = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/verify');
        if (!res.data.status) {
          navigate('/login'); // Redirect to login if not logged in
        } else {
          fetchTrackData();
        }
      } catch (error) {
        console.error("Verification failed:", error);
        setError("Verification failed");
        setLoading(false);
        navigate('/login'); // Redirect to login if verification fails
      }
    };

    verifyUser();
  }, [navigate, userId]);

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

  if (trackData.length === 0) {
    return <div className="error">No track data available.</div>;
  }

  return (
    <div className="track-container">
      <h2 className="track-title">Track Details</h2>
      {trackData.map((track) => (
        <div key={track._id} className="track-details">
          <p><strong>Date:</strong> {new Date(track.date).toLocaleDateString() || 'N/A'}</p>
          <p><strong>Calories Burned:</strong> {track.caloriesBurned || 'N/A'} kcal</p>
          <p><strong>Steps Taken:</strong> {track.stepsTaken || 'N/A'}</p>
          <p><strong>Workouts Completed:</strong> {track.workoutsCompleted || 'N/A'}</p>
          <p><strong>Calories Consumed:</strong> {track.caloriesConsumed || 'N/A'} kcal</p>
          <p><strong>Protein:</strong> {track.protein || 'N/A'} g</p>
          <p><strong>Carbs:</strong> {track.carbs || 'N/A'} g</p>
          <p><strong>Fats:</strong> {track.fats || 'N/A'} g</p>
          <p><strong>Current Weight:</strong> {track.currentWeight || 'N/A'} kg</p>
          <p><strong>Goal Weight:</strong> {track.goalWeight || 'N/A'} kg</p>
          <p><strong>Weight Lost:</strong> {track.weightLost || 'N/A'} kg</p>
        </div>
      ))}
    </div>
  );
};

export default UserTrack;
