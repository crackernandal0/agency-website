import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Electromachanical.css';
import group from '../assets/images/Group 145.png'
import group2 from '../assets/images/Group 146.png'
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import logo from '../assets/images/logo (2).png'

import background from '../assets/images/electro.png'
 // Import custom CSS for blurring effect
import ecard1 from '../assets/images/ecard1.png' 
import ecard2 from '../assets/images/ecard2.png' 
import ecard3 from '../assets/images/ecard3.png' 
import ecard4 from '../assets/images/ecard4.png' 
import ecard5 from '../assets/images/ecard5.png' 
import ecard11 from '../assets/images/ecard11.png' 
import ecard22 from '../assets/images/ecard22.png' 
import ecard33 from '../assets/images/ecard33.png' 
import ecard44 from '../assets/images/ecard44.png' 
import ecard55 from '../assets/images/ecard55.png' 



const Electromachanical = () => {
  const Solutions = [
    {
      title: 'Private Power Agreement - PPAs',
      description: 'A long-term contract for purchasing electricity between a power provider and a customer.',
      imageUrl: ecard1, // Replace with actual image path
    },
    {
      title: 'Electrical Infrastructure Planning',
      description: 'Strategic development of electrical systems to meet current and future energy needs.',
      imageUrl: ecard2, // Replace with actual image path
    },
    {
      title: 'Electrical Studies',
      description: 'Analytical assessments of electrical systems to ensure safety, reliability, and efficiency.',
      imageUrl: ecard3, // Replace with actual image path
    },
    {
      title: 'Substation Design',
      description: 'Engineering and planning of electrical substations to manage and distribute power efficiently.',
      imageUrl: ecard4, // Replace with actual image path
    },
    {
      title: 'Transmission Lines Design',
      description: 'Design of overhead or underground lines to efficiently deliver energy over long distances.',
      imageUrl: ecard5, // Replace with actual image path
    },
  ];

  const servicesOffered = [
    {
      title: "Control Systems for Machines and Processes with PLC / SCADA Technology",
      imageUrl: ecard55, // Replace with actual image paths
    },
    {
      title: "Distributed Control Systems (DCS) for Process Automation",
      imageUrl: ecard11,
    },
    {
      title: "Remote Supervision and Control (Telecontrol)",
      imageUrl: ecard22,
    },
    {
      title: "Energy Management Systems with Supervision Software",
      imageUrl: ecard33,
    },
    {
      title: "Motor Control Center (MCC) with Relays, Softstarters, and Variators",
      imageUrl: ecard44,
    },
  ];
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one main slide at a time
    centerMode: true, // Center the slide
    centerPadding: '0', // Adjust padding to show partial slides on both sides
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '25%', // Show partial slides on mobile
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '20%', // Narrower padding for smaller screens
        },
      },
    ],
  };


  return (
    <>
     <main className="relative bg-cover bg-center "  style={{ backgroundImage: `url(${background})` ,    opacity: '0.9' , height:'125vh'}}>
    <img className='electro-image' style={{position:'absolute', right:'0'}} src={group} alt="" />
    <img className='electro-image-1' style={{position:'absolute', left:'0', bottom:'0'}} src={group} alt="" />
      <div  className="absolute inset-0 bg-black opacity-50"></div>
      <div style={{position :'absolute', bottom:'40px'}} className="relative electro-heading z-10 text-white p-4 md:p-16 lg:p-16 text-left">
        <h1 style={{fontSize:'35px'}} className="electro-title font-bold">Electromechanical, energy and automation</h1>
        <p style={{fontSize:'48px'}}  className="mt-4 electro-des italic align-left">
        Powering innovation where <br /> precision meets performance.
        </p>
       
      </div>
    </main>  
    <div className="container mx-auto px-4 py-12 relative overflow-hidden">
      <img
        className="electro-image-2 absolute right-0"
        src={group}
        alt=""
      />
      <h2 className="text-3xl service-solution md:mt-16 font-bold mb-8">
        Energy Solutions
      </h2>

      {/* Desktop grid view */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={solution.imageUrl}
              alt={solution.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view slider */}
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {Solutions.map((solution, index) => (
            <div
              key={index}
              className={`slider-card ${index === 0 ? 'center-card' : 'side-card'}`} >
              <img
                src={solution.imageUrl}
                alt={solution.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold mb-1">{solution.title}</h3>
                <p style={{display:'none'}} className="text-gray-600 text-sm">{solution.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>  

      <div className="container mx-auto py-12 px-4">
      <img className='electro-image-3' style={{display:'none'}} src={group2} alt="" />
        <h2 className="text-3xl service-solution font-bold mb-2">Industrial Automation and Process Control</h2>
        <p className="text-lg mb-6">Services Offered</p>
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {servicesOffered.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={service.imageUrl} alt={service.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-sm font-medium">{service.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view slider */}
        <div className="md:hidden">
          <Slider {...sliderSettings}>
            {servicesOffered.map((service, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={service.imageUrl} alt={service.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <p className="text-sm font-medium">{service.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    <div className="container mx-auto py-12 px-4">
    <img className='electro-image-2' style={{position:'absolute', right:'0'}} src={group} alt="" />
      <h2 className="md:text-3xl md:mt-20 service-solution font-bold mb-6">
        Solutions for Gearless Mill Drive Motors (GMD’s)
      </h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl service-solution-heading font-semibold mb-2">Quality Control Management</h3>
          <ul className="list-disc service-solution-description list-inside space-y-1">
            <li>Establishment and/or validation of criteria and standards for the design, manufacture, installation and maintenance of GMD systems for mill drives, installation, operation and maintenance of GMD systems for drives.</li>
            <li>Elaboration, review and supervision of the QA/QC plan, pre-commissioning and commissioning.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl service-solution-heading font-semibold mb-2">Specialized Technical Support for Procure and Logistic</h3>
          <ul className="list-disc service-solution-description list-inside space-y-1">
            <li>Comparative analysis of Gearless Mill Drive technologies for purchase decision.</li>
            <li>Comparative analysis of GMD technologies for purchase decision and elaboration of bidder qualification matrix.</li>
            <li>Conformity of components, special tools and materials prior to packing release.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl service-solution-heading font-semibold mb-2">Installation, Testing and Start-up</h3>
          <ul className="list-disc service-solution-description list-inside space-y-1">
            <li>Preparation, review and supervision of the Project Execution Plan.</li>
            <li>Planning and supervision during transportation and handling of main component of GMD type engines.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl service-solution-heading font-semibold mb-2">Maintenance</h3>
          <ul className="list-disc service-solution-description list-inside space-y-1">
            <li>Maintenance strategy for critical inspections and monitoring conditions (winding diagnostics, partial discharge test, etc).</li>
            <li>Premature failure risk assessment: recommended controls, protection and monitoring of controls, protection and monitoring of operational conditions.</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="banner">
    
      <div className="content">
        <p className="text">
          DARAT is a saudi-based corporation dedicated to the Saudi 2030 vision, offering various integrated solutions that encompass top-tier services and high end products.
        </p>
        <div className="logo-section">
          <h1 className="logo">
            <img style={{width:'50%'}} src={logo} alt="" />
          </h1>
          <div className="flex social-media space-x-4">
        <a href="#instagram" className="text-white text-xl"><FaInstagram /></a>
        <a href="#instagram" className="text-white text-xl"><FaTiktok /></a>
        <a href="#linkedin" className="text-white text-xl"><FaLinkedinIn /></a>
      </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Electromachanical;
