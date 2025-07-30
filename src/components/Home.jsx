import React from 'react';
import { NavLink } from 'react-router-dom';
// import './HomePage.css';
const Home = () => {
    return(
        <>
            <div className="container-fluid">
               <div className='row align-items-center'>
                    <div className='col-12 col-md-6 col-lg-6 text-left'>
                        <h1 className='mt-4 font-weight-bold pl-2 pl-md-4 pl-lg-4'>Welcome to <span className='fc-purple'>FitLife</span></h1>
                        <h5 className='pl-2 pl-md-4 pl-lg-4 font-weight-bold'>Your Personalized Fitness and Nutrition Journey Starts Here</h5>
                        <p className='fc-grey fs-md mt-1 pl-2 pl-md-4 pl-lg-4'>Your ultimate companion for achieving your health and fitness goals. Whether you're looking to lose weight, build muscle, or simply lead a healthier lifestyle, Fitlife is here to help you every step of the way.</p>
                        <div className='pl-2 pl-md-4 pl-lg-4'>
                           <NavLink className='btn font-weight-bold btn-tranparent-white px-5' to='/register'>Join Us</NavLink> 
                        </div>
                   </div>
                   <div className='col-12 col-md-6 col-lg-6'>
                       <img src="/banner1.png" alt="banner2" className='w-100'/>
                   </div>
                </div>
            </div>
            <h2 className='font-weight-bold text-center my-5'>What We Offer?</h2>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12 col-md-3 col-lg-3'>
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center px-4 mb-3">
                                    <img src="/diet.png"/>
                                    {/* <a href="https://www.flaticon.com/free-icons/time-and-date" title="time and date icons">Time and date icons created by Muhammad Ali - Flaticon</a> */}
                                </div>
                                <h6 className="text-center font-weight-bold">Personalized Diet Plans</h6>
                                <p className="card-text text-justify fs-sm">Generate customized meal plans based on your unique profile and dietary needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-lg-3'>
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center px-4 mb-3">
                                    <img src="/success.png"/>
                                    {/* <a href="https://www.flaticon.com/free-icons/progression" title="progression icons">Progression icons created by Elzicon - Flaticon</a> */}
                                </div>
                                <h6 className="text-center font-weight-bold">Progress Tracking</h6>
                                <p className="card-text text-justify fs-sm">Keep track of your fitness journey with detailed progress logs and visualizations.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-lg-3'>
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center px-4 mb-3">
                                    <img src="/dashboard.png"/>
                                    {/* <a href="https://www.flaticon.com/free-icons/monitor" title="monitor icons">Monitor icons created by Design Circle - Flaticon</a> */}
                                </div>
                                <h6 className="text-center font-weight-bold">User-Friendly Dashboard</h6>
                                <p className="card-text text-justify fs-sm">Access all your important information at a glance with our intuitive dashboard.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-lg-3'>
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center px-4 mb-3">
                                    <img src="/secure.png"/>
                                    {/* <a href="https://www.flaticon.com/free-icons/authentication" title="authentication icons">Authentication icons created by Uniconlabs - Flaticon</a> */}
                                </div>
                                <h6 className="text-center font-weight-bold">Secure User Authentication</h6>
                                <p className="card-text text-justify fs-sm">Rest assured that your data is safe with our robust security measures and platform</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='my-5 font-weight-bold text-center'>Our Key Features</h2> 
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-6'>
                       <div className="card my-3">
					        <div className="row no-gutters align-items-center">
					            <div className="col-md-4 p-4">
					                <img src="/login.png" className="w-100" alt="Image" />
                                    {/* <a href="https://www.flaticon.com/free-icons/login" title="login icons">Login icons created by srip - Flaticon</a> */}
					            </div>
					            <div className="col-md-8">
					                <div className="card-body px-2">
					                    <h6 className="card-title font-weight-bold">Easy Registration and Login</h6>
					                    <p className="card-text fs-sm">Create your account or log in to access your personalized dashboard.</p>
					                </div>
					            </div>
					        </div>
					    </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6'>
                       <div className="card my-3">
					        <div className="row no-gutters align-items-center">
					            <div className="col-md-4 p-4">
					                <img src="/manager.png" className="w-100" alt="Image" />
                                    {/* <a href="https://www.flaticon.com/free-icons/manager" title="manager icons">Manager icons created by Flat Icons - Flaticon</a> */}
					            </div>
					            <div className="col-md-8">
					                <div className="card-body px-2">
					                    <h6 className="card-title font-weight-bold">Profile Management</h6>
					                    <p className="card-text fs-sm">Update your personal information and dietary preferences with ease.</p>
					                </div>
					            </div>
					        </div>
					    </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6'>
                       <div className="card my-3">
					        <div className="row no-gutters align-items-center">
					            <div className="col-md-4 p-4">
					                <img src="/nutrition.png" className="w-100" alt="Image" />
                                    {/* <a href="https://www.flaticon.com/free-icons/nutrition" title="nutrition icons">Nutrition icons created by Freepik - Flaticon</a> */}
					            </div>
					            <div className="col-md-8">
					                <div className="card-body px-2">
					                    <h6 className="card-title font-weight-bold">Diet Plan Generation</h6>
					                    <p className="card-text fs-sm">Get tailored meal plans that suit your goals and preferences.</p>
					                </div>
					            </div>
					        </div>
					    </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6'>
                       <div className="card my-3">
					        <div className="row no-gutters align-items-center">
					            <div className="col-md-4 p-4">
					                <img src="/planning.png" className="w-100" alt="Image" />
                                    {/* <a href="https://www.flaticon.com/free-icons/project" title="project icons">Project icons created by itim2101 - Flaticon</a> */}
					            </div>
					            <div className="col-md-8">
					                <div className="card-body px-2">
					                    <h6 className="card-title font-weight-bold">Progress Monitoring</h6>
					                    <p className="card-text fs-sm">Log your progress and visualize your achievements over time.</p>
					                </div>
					            </div>
					        </div>
					    </div>
                    </div>
                </div>
            </div>
            <h2 className='text-center font-weight-bold my-4'>Join Us Today</h2>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <img src="/banner2.png" alt="banner2" className='w-100' />
                    </div>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <p className='px-2 px-lg-5 px-md-4 fs-grey'>Ready to take control of your health and fitness? Sign up now and start your journey with Fitlife. Whether you're a fitness newbie or a seasoned pro, our tools and resources are designed to help you succeed.</p>
                        <p className='px-2 px-lg-5 px-md-4 fs-grey mt-3'>FitLife is dedicated to helping individuals achieve their health and fitness goals through personalized nutrition and fitness planning. Our team of experts works tirelessly to ensure that you have the best tools and resources at your disposal.</p>
                        <div className='px-2 px-lg-5 px-md-4 text-center'>
                           <NavLink className='btn font-weight-bold btn-tranparent-white' to='/register'>Join Us</NavLink> 
                        </div>
                        <p className='px-2 px-lg-5 px-md-4 fs-grey mt-3'>Have questions or need support? Reach out to us at contact@fitLife.com or visit our Contact Page for more information.</p>
                        <h5 className='px-2 px-lg-5 px-md-4 mt-3'>Follow us On:</h5>
                        <div className='d-flex mt-3 px-2 px-lg-5 px-md-4'>
                            <NavLink><i className='fa fa-instagram fa-2x'></i></NavLink>
                            <NavLink><i className='fa fa-facebook-square fa-2x ml-3'></i></NavLink>
                            <NavLink><i className='fa fa-linkedin-square fa-2x ml-3'></i></NavLink>
                            <NavLink><i className='fa fa-twitter-square fa-2x ml-3'></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>   
        </>


    )
}

export default Home;

            /* //   <section className="home-features">
            //     <div className="feature">
            //       <h2>Secure User Authentication</h2>
            //       <p>Register, log in, and manage your account securely.</p>
            //     </div>
            //     <div className="feature">
            //       <h2>Personalized Diet Plans</h2>
            //       <p>Get diet plans tailored to your specific needs and goals.</p>
            //     </div>
            //     <div className="feature">
            //       <h2>Progress Tracking</h2>
            //       <p>Track your fitness journey and see your progress over time.</p>
            //     </div>
            //     <div className="feature">
            //       <h2>Responsive Design</h2>
            //       <p>Enjoy a seamless experience across all your devices.</p>
            //     </div>
            //   </section>
              
            //   <footer className="home-footer">
            //     <Link to="/register" className="home-link">Get Started</Link>
            //     <Link to="/login" className="home-link">Login</Link>
            //   </footer>
            // </div> */