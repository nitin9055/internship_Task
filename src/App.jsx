import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Forgot from './components/Forgot';
import ResetPassword from './components/ResetPassword';
// import About from './components/About';
// import Contact from './components/Contact';
import Profile from './components/Profile';
import Track from './components/Track';
// import DietPlanGenerator from './components/DietPlanGenerator';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: '/login',
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: '/register',
      element: (
        <>
          <Register />
        </>
      ),
    },
    {
      path: '/forgot',
      element: (
        <>
          <Forgot />
        </>
      ),
    },
    {
      path: '/resetPassword/:token',
      element: (
        <>
          <ResetPassword />
        </>
      ),
    },
    // {
    //   path: '/about',
    //   element: (
    //     <>
    //       <Navbar />
    //       <About />
    //       <Footer />
    //     </>
    //   ),
    // },
    // {
    //   path: '/contact',
    //   element: (
    //     <>
    //       <Navbar />
    //       <Contact />
    //       <Footer />
    //     </>
    //   ),
    // },
    {
      path: '/profile',
      element: (
        <>
          <Navbar />
          <Profile />
          <Footer />
        </>
      ),
    },
    {
      path: '/track',
      element: (
        <>
          <Navbar />
          <Track />
          <Footer />
        </>
      ),
    },
    // {
    //   path: '/diet-plan',
    //   element: (
    //     <>
    //       <Navbar />
    //       <DietPlanGenerator />
    //       <Footer />
    //     </>
    //   ),
    // },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
