import React from 'react';
import './responsive.css'
import { Link } from 'react-router-dom'; // Import Link from React Router
import miningImg from '../assets/images/service3.png'; // replace with your image paths
import electromechImg from '../assets/images/service1.png';
import itImg from '../assets/images/service2.png';
import consultingImg from '../assets/images/service4.png';
import group from '../assets/images/Group 111.png';
import './ServiceSections.css';

const ServiceSections = () => {
  const services = [
    { title: 'Mining', img: miningImg, link: '/minning' },
    { title: 'Electro mechanics', img: electromechImg, link: '/Electro-mechanics' },
    { title: 'IT', img: itImg, link: '/it' },
    { title: 'Consulting', img: consultingImg, link: '/consulting' }
  ];

  return (
    <div className="services grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4">
    <div style={{top:'125px',height:'85%'}} className="mask-group"></div>
      <img className='service-image' style={{ position: 'absolute', right: '0', zIndex: '2' }} src={group} alt="" />
      <img className='service-image-2' style={{ position: 'absolute', left: '0', zIndex: '2', bottom: '10px' }} src={group} alt="" />
      {services.map((service, index) => (
        <div
          key={index}
          className="relative flex items-center md:items-end justify-center text-center text-white"
          style={{
            backgroundImage: `url(${service.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // opacity: '0.6',
            width: '-webkit-fill-available'
          }}
        >
          <div style={{marginBottom:'50%'}} className="bg-opacity-50 service-bottom  p-4 rounded-lg">
            <h2  style={{position: 'relative',
    zIndex: '3',textAlign:'center'}} className="title  font-bold mb-4">{service.title}</h2>
            <Link to={service.link}>
              <button style={{ background: '#E8E3AC',position:'relative', zIndex:'99' }} className="text-black service-button font-semibold py-2 px-4 rounded-full hover:bg-yellow-400">
                See More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSections;
