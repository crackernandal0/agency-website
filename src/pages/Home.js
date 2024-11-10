import React from "react";
import "./responsive.css";
import group from "../assets/images/Group 111.png";
import background from "../assets/images/background.png";
import Graident from "../assets/home/HOME.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Link to="/services">
      {" "}
      <main
        className="relative bg-cover bg-center "
        style={{
          backgroundImage: `url(${background}), url(${Graident}) `,
          opacity: "0.9",
          height: "125vh",
        }}
      >
        <img
          className="home-image"
          style={{ position: "absolute", right: "0" }}
          src={group}
          alt=""
        />
        <img
          className="home-image"
          style={{
            position: "absolute",
            left: "0",
            bottom: "0",
            display: "none",
          }}
          src={group}
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          style={{ position: "absolute", bottom: "40px", marginLeft: "80px" }}
          className="relative z-10  text-white p-4 md:p-8 lg:p-8 text-left"
        >
          <h1
            style={{ fontSize: "49px" }}
            className="text-4xl home-header font-bold"
          >
            GET THE LATEST IN TECHNOLOGY
          </h1>
          <h2 style={{ fontSize: "39px" }} className="text-2xl home-title mt-2">
            FOR YOUR BUSINESS
          </h2>
          <p
            style={{ fontSize: "26px", width: "50%" }}
            className="mt-4 home-description align-left"
          >
            DARAT is a Saudi-based corporation dedicated to the Saudi 2030
            vision, offering various integrated solutions that encompass
            top-tier services and high-end products.
          </p>
          {/* <div className="flex justify-center mt-6">
          <span className="h-2 w-2 bg-white rounded-full mx-1"></span>
          <span className="h-2 w-2 bg-gray-400 rounded-full mx-1"></span>
          <span className="h-2 w-2 bg-gray-400 rounded-full mx-1"></span>
        </div> */}
        </div>
      </main>
    </Link>
  );
};

export default Home;
