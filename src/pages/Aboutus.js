import React from "react";
import group from "../assets/images/Group 111.png";
import background from "../assets/home/aboutus.png";
import Graident from "../assets/home/HOME.png";

import "./responsive.css";

const AboutUs = () => {
  return (
    <div
      className="relative bg-cover bg-center "
      style={{
        backgroundImage: `url(${background}),  url(${Graident}) `,
        opacity: "0.9",
        height: "32.5rem",
      }}
    >
      <img
        className="about-us-image"
        style={{ position: "absolute", right: "0", zIndex: "2" }}
        src={group}
        alt=""
      />
      <img
        className="about-us-image-1"
        style={{ position: "absolute", left: "0", zIndex: "2", bottom: "10px" }}
        src={group}
        alt=""
      />
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="relative z-10 md:w-1/2 flex flex-col items-left justify-center text-white px-4 py-16 md:px-10 lg:px-20">
        <h1 className=" font-bold about-header mb-8 ">About us</h1>
        <p className=" max-w-4xl about-text mb-2">
          DARAT is a Saudi-based corporation dedicated to the Saudi 2030 vision,
          offering various integrated solutions that encompass top-tier services
          and high-end products.
        </p>
        <h2
          style={{ fontSize: "20px" }}
          className=" font-semibold about-title mb-2"
        >
          Innovation and technology should simplify life.
        </h2>
        <p className="  about-text max-w-4xl mb-2">
          We are a forerunner in the field of system integrators.
        </p>
        <p className="  about-text max-w-4xl mb-2">
          We provide comprehensive solutions that meet the needs of our
          customers and have built strong ties with our government and private
          sector partners.
        </p>
        <p className="  about-text max-w-4xl">
          We have internationally skilled business experts and engineers ready
          to provide exceptional services to clients in various industries.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
