import React from 'react';
import './responsive.css';
import group from '../assets/images/Group 111.png'
import background from '../assets/images/background.png'
const Home = () => {
  return (
    <main className="relative bg-cover bg-center h-screen"  style={{ backgroundImage: `url(${background})` ,    opacity: '0.9' }}>
    <img style={{position:'absolute', right:'0'}} src={group} alt="" />
      <div  className="absolute inset-0 bg-black opacity-50"></div>
      <div style={{position :'absolute', left:'30px', bottom:'40px'}} className="relative z-10 text-white p-4 md:p-8 lg:p-8 text-left">
        <h1 className="text-4xl md:text-6xl font-bold">GET THE LATEST IN TECHNOLOGY</h1>
        <h2 className="text-2xl md:text-3xl mt-2">FOR YOUR BUSINESS</h2>
        <p className="mt-4 max-w-lg  text-lg md:text-xl align-left">
          DARAT is a Saudi-based corporation dedicated to the Saudi 2030 vision, offering various integrated solutions
          that encompass top-tier services and high-end products.
        </p>
        <div className="flex justify-center mt-6">
          <span className="h-2 w-2 bg-white rounded-full mx-1"></span>
          <span className="h-2 w-2 bg-gray-400 rounded-full mx-1"></span>
          <span className="h-2 w-2 bg-gray-400 rounded-full mx-1"></span>
        </div>
      </div>
    </main>
  );
};

export default Home;
