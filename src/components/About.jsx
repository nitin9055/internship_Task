import React from 'react';

const About = () => {
    const teamMembers = [
        { name: "John Doe", title: "Founder", imgSrc: "john.jpg", description: "John has over 10 years of experience in fitness and nutrition." },
        { name: "Jane Smith", title: "Nutritionist", imgSrc: "2nd.jpg", description: "Jane specializes in personalized nutrition plans and wellness." },
        { name: "Emily Johnson", title: "Fitness Coach", imgSrc: "emily.jpg", description: "Emily provides expert guidance in strength training and recovery." },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gray-100 h-screen flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                    
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-opacity-60 transition-opacity duration-500 ease-in-out hover:bg-opacity-80">
                        <div className="text-center text-white px-6 py-4">
                            <h1 className="text-4xl font-bold mb-4 transition-transform duration-500 ease-in-out hover:translate-y-[-4px]">
                                Empowering Your Journey to a Healthier You
                            </h1>
                            <p className="text-xl transition-transform duration-500 ease-in-out hover:translate-y-[-2px]">
                                Transforming Lives Through Fitness and Nutrition
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-16 bg-white shadow-md rounded-lg">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-gray-700 text-base">
                        Our mission is to empower individuals to achieve their health and fitness goals through personalized nutrition and fitness strategies. We believe in a holistic approach that nurtures both body and mind.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                    <p className="text-gray-700 text-base">
                        Our journey began 2 years ago when we realized the transformative power of a balanced diet and regular exercise. After gaining relevant qualifications and experience, we decided to share our passion with others by creating a platform that provides customized fitness and nutrition solutions.
                    </p>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
                    <div className="flex flex-wrap -m-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="lg:w-1/3 md:w-1/2 sm:w-full mb-6 p-4">
                                <div className="h-full text-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl">
                                    <img
                                        src={member.imgSrc}
                                        alt={member.name}
                                        className="w-24 h-24 mb-4 object-cover object-center rounded-full border-2 border-gray-200 bg-gray-100"
                                    />
                                    <h3 className="text-gray-900 font-medium title-font tracking-wider text-lg mb-2">
                                        {member.name} – {member.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{member.description}</p>
                                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                    <p className="text-gray-500">{member.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

// export default About;
