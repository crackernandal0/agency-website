import React from "react";
import "./IT.css";
import "./responsive.css";
import group from "../assets/images/Group 145.png";
import group2 from "../assets/images/Group 146.png";
import background from "../assets/images/IT.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import placeholderImage from "../assets/images/automation.png";
import image1 from "../assets/images/security1.png"; // Replace with actual image paths
import image2 from "../assets/images/security2.png";
import image3 from "../assets/images/security3.png";
import image4 from "../assets/images/security4.png";
import image5 from "../assets/images/security5.png";
import image6 from "../assets/images/security6.png";
import image7 from "../assets/images/telecom4.png";
import image8 from "../assets/images/security8.png";
import image9 from "../assets/images/security9.png";
import hardware1 from "../assets/images/hardware1.png"; // Replace with actual image paths
import hardware2 from "../assets/images/hardware2.png";
import hardware3 from "../assets/images/hardware3.png";
import hardware4 from "../assets/images/hardware4.png";
import hardware5 from "../assets/images/hardware5.png";
import hardware6 from "../assets/images/hardware6.png";
import integrated1 from "../assets/images/integrated1.png"; // Replace with actual image paths
import integrated2 from "../assets/images/integrated2.png";
import integrated3 from "../assets/images/integrated3.png";
import integrated4 from "../assets/images/integrated4.png";
import integrated5 from "../assets/images/integrated5.png";
import integrated6 from "../assets/images/integrated6.png";
import integrated7 from "../assets/images/integrated4.png";
import integrated8 from "../assets/images/integrated8.png";
import integrated9 from "../assets/images/integrated9.png";
import integrated10 from "../assets/images/integrated10.png"; // Replace with actual image paths
import integrated12 from "../assets/images/integrated12.png";
import integrated13 from "../assets/images/integrated13.png";
import integrated14 from "../assets/images/integrated14.png";
import integrated15 from "../assets/images/integrated15.png";
import integrated11 from "../assets/images/integrated11.png";
import it1 from "../assets/images/it1.png"; // Replace with actual image paths
import it2 from "../assets/images/it2.png";
import it3 from "../assets/images/it3.png";
import it4 from "../assets/images/it4.png";
import it5 from "../assets/images/it5.png";
import it6 from "../assets/images/it6.png";
import it7 from "../assets/images/it4.png";
import it8 from "../assets/images/it8.png";
import telecom1 from "../assets/images/telecom1.png";
import telecom2 from "../assets/images/telecom2.png";
import telecom3 from "../assets/images/telecom3.png";
import telecom4 from "../assets/images/telecom4.png";
import telecom5 from "../assets/images/telecom5.png";
import telecom6 from "../assets/images/telecom6.png";
import droneImage from "../assets/images/drones1.png";
import drone from "../assets/images/drone.png";
import Graident from "../assets/home/HOME.png";

import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import logo from "../assets/images/logo (2).png";

// import 'slick-carousel/slick/slick-theme.css';

const solutions = [
  {
    title: "Electrical Work",
    description:
      "Ensure reliable and efficient power supply for your operations.",
    imageUrl: integrated1,
  },
  {
    title: "Network Testing & Commissioning",
    description:
      "We assess and deploy network infrastructure for optimal performance and connectivity.",
    imageUrl: integrated2,
  },
  {
    title: "Operator Training",
    description:
      "Equip your team with the knowledge and skills to maximize technology investments.",
    imageUrl: integrated3,
  },
  {
    title: "Structured Cabling System",
    description:
      "Experience flawless data transmission through organized cabling solutions.",
    imageUrl: integrated4,
  },
  {
    title: "IP Telephone & Networking",
    description:
      "Enhance communication efficiency with our IP telephone and networking solutions.",
    imageUrl: integrated5,
  },
  {
    title: "MATV & IPTV",
    description:
      "Deliver multimedia content to multiple screens with our MATV and IPTV systems.",
    imageUrl: integrated6,
  },
  {
    title: "Wireless Access Solutions",
    description: "Innovative solutions for wireless connectivity and mobility.",
    imageUrl: integrated7,
  },
  {
    title: "CCTV & Access Control",
    description:
      "Protect premises with CCTV monitoring and access control systems.",
    imageUrl: integrated8,
  },
  {
    title: "Queuing System",
    description:
      "Streamline customer flow and enhance service with queuing systems.",
    imageUrl: integrated9,
  },
  // Additional 6 cards
  {
    title: "Remote Monitoring Solutions",
    description: "24/7 monitoring for enhanced security and reliability.",
    imageUrl: integrated10,
  },
  {
    title: "Data Center Solutions",
    description:
      "Optimize and secure your data centers for improved performance.",
    imageUrl: integrated11,
  },
  {
    title: "Smart Building Systems",
    description:
      "Integrate smart technologies for efficient building management.",
    imageUrl: integrated12,
  },
  {
    title: "Public Address Systems",
    description: "Broadcast clear announcements with our reliable PA systems.",
    imageUrl: integrated13,
  },
  {
    title: "Fire Alarm Systems",
    description: "Protect your premises with advanced fire alarm solutions.",
    imageUrl: integrated14,
  },
  {
    title: "Digital Signage Solutions",
    description: "Engage customers with dynamic digital displays.",
    imageUrl: integrated15,
  },
];
const cards = [
  {
    title: "Microwave Communications",
    description:
      "Our microwave communication systems offer high-speed, point-to-point connectivity, enabling seamless data and voice transmission across vast distances.",
    imageUrl: telecom1, // Replace with actual image paths
  },
  {
    title: "Supply and Installation of Shelters",
    description:
      "We offer end-to-end solutions for supplying and installing shelters, providing a secure and controlled environment for your sensitive equipment.",
    imageUrl: telecom2,
  },
  {
    title: "Remote Monitoring Controller",
    description:
      "Enable real-time monitoring and control of your infrastructure from a centralized location. Manage your systems, optimize performance, and minimize downtime.",
    imageUrl: telecom3,
  },
  {
    title: "Self-Support Towers",
    description:
      "A sturdy and reliable infrastructure for various communication systems. It is designed for durability and stability and ensures excellent signal transmission, even in harsh environments.",
    imageUrl: telecom4,
  },
  {
    title: "Monopoles & Rooftop Mount",
    description:
      "Solutions for efficient and space-saving communication infrastructure. Our expert team designs and installs these structures, optimizing signal strength and coverage while minimizing visual impact.",
    imageUrl: telecom5,
  },
  {
    title: "Broadcast Towers",
    description:
      "Specifically designed to meet the demanding requirements of the broadcasting industry, you can ensure optimal signal quality, coverage, and reliability for your operations.",
    imageUrl: telecom6,
  },
];

const cardss = [
  {
    title: "Networking/Data Cabinets",
    description:
      "Our state-of-the-art networking and data cabinets are designed to provide a secure and organized space for your network equipment.",
    imageUrl: it1, // Replace with actual image paths
  },
  {
    title: "Fiber/UTP Patch Panels",
    description:
      "High-quality fiber and UTP patch panels enable a structured connection. These panels provide a central hub for connecting and managing your network cables, ensuring optimal performance and flexibility.",
    imageUrl: it2,
  },
  {
    title: "Fiber Optic Cables & UTP/Copper Cable",
    description:
      "Enable real-time monitoring and control of your infrastructure from a centralized location. Manage your systems, optimize performance, and minimize downtime.",
    imageUrl: it3,
  },
  {
    title: "Ducts & Sub-Ducts",
    description:
      "Provide a secure pathway for routing your network cables. Designed for durability and ease of installation, it ensures excellent cable protection, reducing the risk of damage and signal interference.",
    imageUrl: it4,
  },
  {
    title: "Manhole & Handholes",
    description:
      "Serve as access points to your underground network infrastructure. They provide convenient entry for maintenance and upgrades, ensuring easy access and efficient management.",
    imageUrl: it5,
  },
  {
    title: "Conduit System & Cable Tray System",
    description:
      "Provide a reliable and organized solution for managing your network cables. Our cable tray system facilitates installation and protects cabling, simplifying installation and maintenance processes.",
    imageUrl: it6,
  },
  {
    title: "MDF (Main Distribution Frame)",
    description:
      "Serves as the central point for distributing network connectivity. MDFs provide a reliable foundation for routing and organizing your cabling, ensuring excellent performance and reducing network disruptions.",
    imageUrl: it7,
  },
  {
    title: "Grounding & Bonding",
    description:
      "We prioritize the grounding and bonding of infrastructure, ensuring a stable foundation for all network components. Proper grounding enhances safety, performance, and long-term reliability of your systems.",
    imageUrl: it8,
  },
];

const hardwareSolutions = [
  {
    title: "Input",
    description:
      "Enhance productivity with intuitive input devices like ergonomic keyboards, barcode scanners, and RFID readers.",
    imageUrl: hardware1,
  },
  {
    title: "Output",
    description:
      "Immerse yourself in stunning visuals with high-resolution monitors and immersive audio systems.",
    imageUrl: hardware2,
  },
  {
    title: "Processing",
    description:
      "Power through demanding tasks with cutting-edge CPUs and GPUs for optimal performance.",
    imageUrl: hardware3,
  },
  {
    title: "Storage",
    description:
      "Keep your data secure and easily accessible with reliable storage solutions like SSDs and hard drives.",
    imageUrl: hardware4,
  },
  {
    title: "Communications",
    description:
      "Stay connected with reliable networking solutions including high-speed routers, switches, and access points.",
    imageUrl: hardware5,
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "Embrace the future of connectivity with IoT devices that automate and streamline operations.",
    imageUrl: hardware6,
  },
  // Additional cards can be added here
];

const cardsss = [
  {
    title: "Pentesting",
    description:
      "Thorough penetration testing to identify vulnerabilities and strengthen the security of your systems.",
    imageUrl: image1,
  },
  {
    title: "Social engineering",
    description:
      "Comprehensive assessments and training to protect from human-based security threats.",
    imageUrl: image2,
  },
  {
    title: "Critical infrastructure security",
    description:
      "Robust solutions to safeguard critical infrastructures against cyber threats.",
    imageUrl: image3,
  },
  {
    title: "Application security",
    description:
      "Protect your software1 and applications from unauthorized access.",
    imageUrl: image4,
  },
  {
    title: "Network security",
    description:
      "Safeguard your network infrastructure against unauthorized access and data breaches.",
    imageUrl: image5,
  },
  {
    title: "Cloud security",
    description:
      "Ensure your data’s privacy, integrity, and availability in cloud environments.",
    imageUrl: image6,
  },
  {
    title: "Internet of Things (IoT) security",
    description:
      "Protect your devices and networks, including all interconnected devices and protocols, to guard against unauthorized access or control.",
    imageUrl: image7,
  },
  {
    title: "Fencing systems & security lighting",
    description:
      "Provide physical perimeter and enhanced visibility for better protection.",
    imageUrl: image8,
  },
  {
    title: "Gates, gate blockers & barriers",
    description:
      "Control access and prevent unauthorized entry to your facility.",
    imageUrl: image9,
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Show one main slide at a time
  centerMode: true, // Center the slide
  centerPadding: "0", // Adjust padding to show partial slides on both sides
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "25%", // Show partial slides on mobile
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: "20%", // Narrower padding for smaller screens
      },
    },
  ],
};

export default function IT() {
  return (
    <>
      <main
        className="relative bg-cover bg-center "
        style={{
          backgroundImage: `url(${background})   `,
          background: `linear-gradient(77deg, rgba(0,0,0,1) 0%, rgba(81,55,113,1) 50%, rgba(255,255,255,1) 100%)`,
          opacity: "0.9",
          height: "125vh",
          backgroundSize: "cover, cover", // Adjust as needed
          backgroundPosition: "center, center", // Adjust as needed
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <img
          className="electro-image"
          style={{ position: "absolute", right: "0" }}
          src={group}
          alt=""
        />
        <img
          className="electro-image-1"
          style={{ position: "absolute", left: "0", bottom: "0" }}
          src={group}
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          style={{ position: "absolute", bottom: "40px" }}
          className="relative electro-heading z-10 text-white p-4 md:p-8 lg:p-8 text-left"
        >
          <h1 style={{ fontSize: "35px" }} className="it-title font-bold">
            IT
          </h1>
          <p
            style={{ fontSize: "48px" }}
            className="mt-4 it-des italic  align-left"
          >
            Driving the future with seamless connectivity and cutting-edge
            solutions.
          </p>
        </div>
      </main>
      <div className="container mx-auto px-4 py-12 relative overflow-hidden">
        <img className="electro-image-2 absolute right-0" src={group} alt="" />
        <h2 className="text-3xl service-solution md:mt-16 font-bold mb-8">
          Telecom Services
        </h2>

        {/* Desktop grid view */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((solution, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={solution.imageUrl}
                alt={solution.title}
                className="w-full h-48 object-cover"
              />
              <div
                className="p-4"
                style={{
                  textAlign: "center",
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view slider */}
        <div className="md:hidden">
          <Slider {...sliderSettings}>
            {cards.map((solution, index) => (
              <div
                key={index}
                className={`slider-card ${
                  index === 0 ? "center-card" : "side-card"
                }`}
              >
                <img
                  src={solution.imageUrl}
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
                <div
                  className="p-4"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <h3 className="text-sm font-semibold mb-1">
                    {solution.title}
                  </h3>
                  <p
                    style={{ display: "none" }}
                    className="text-gray-600 text-sm"
                  >
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 relative overflow-hidden">
        <img className="electro-image-2 absolute right-0" src={group} alt="" />
        <h2 className="text-3xl service-solution md:mt-16 font-bold mb-8">
          IT Passive solutions (OSP-ISP/PDS)
        </h2>

        {/* Desktop grid view */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((solution, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={solution.imageUrl}
                alt={solution.title}
                className="w-full h-48 object-cover"
              />
              <div
                className="p-4"
                style={{
                  textAlign: "center",
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view slider */}
        <div className="md:hidden">
          <Slider {...sliderSettings}>
            {cardss.map((solution, index) => (
              <div
                key={index}
                className={`slider-card ${
                  index === 0 ? "center-card" : "side-card"
                }`}
              >
                <img
                  src={solution.imageUrl}
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-1">
                    {solution.title}
                  </h3>
                  <p
                    style={{ display: "none", textAlign: "center" }}
                    className="text-gray-600 text-sm"
                  >
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 relative overflow-hidden">
        <img className="electro-image-2 absolute right-0" src={group} alt="" />
        <h2 className="text-3xl service-solution md:mt-16 font-bold mb-8">
          Integrated Communication Solutions
        </h2>

        {/* Desktop grid view */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={solution.imageUrl}
                alt={solution.title}
                className="w-full h-48 object-cover"
              />
              <div
                className="p-4"
                style={{
                  textAlign: "center",
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view slider */}
        <div className="md:hidden">
          <Slider {...sliderSettings}>
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`slider-card ${
                  index === 0 ? "center-card" : "side-card"
                }`}
              >
                <img
                  src={solution.imageUrl}
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
                <div
                  className="p-4"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <h3 className="text-sm font-semibold mb-1">
                    {solution.title}
                  </h3>
                  <p
                    style={{ display: "none", textAlign: "center" }}
                    className="text-gray-600 text-sm"
                  >
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 relative overflow-hidden">
        <img className="electro-image-2 absolute right-0" src={group} alt="" />
        <h2 className=" main-margin text-2xl    font-bold mb-4">
          Hardware Solutions
        </h2>
        <p className="mt-4 mb-4 harware-text text-bold">
          Darat offers a range of innovative hardware solutions, including
          cutting-edge input devices like advanced barcode scanners for seamless
          inventory management, state-of-theart output devices, high-resolution
          projectors that bring presentations to life, and powerful processing
          units like our custom-designed ASICs that accelerate data processing.
        </p>
        <p className="mt-4 harware-text mb-4 bold">
          Reliable storage solutions like lightning-fast SSDs for secure and
          efficient data management, communication tools such as high-speed
          routers and switches that ensure flawless connectivity, and
          groundbreaking IoT devices that optimize energy usage and connected
          sensors that enable real-time monitoring and analysis for smarter
          decision-making
        </p>

        {/* Desktop grid view */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hardwareSolutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={solution.imageUrl}
                alt={solution.title}
                className="w-full h-48 object-cover"
              />
              <div
                className="p-4"
                style={{
                  textAlign: "center",
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view slider */}
        <div className="md:hidden">
          <Slider {...sliderSettings}>
            {hardwareSolutions.map((solution, index) => (
              <div
                key={index}
                className={`slider-card ${
                  index === 0 ? "center-card" : "side-card"
                }`}
              >
                <img
                  src={solution.imageUrl}
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
                <div
                  className="p-4"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <h3 className="text-sm font-semibold mb-1">
                    {solution.title}
                  </h3>
                  <p
                    style={{ display: "none" }}
                    className="text-gray-600 text-sm"
                  >
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="drones-section-container p-8">
        <img className="electro-image-3" src={group2} alt="" />
        <div className="content-container   ">
          <div className="text-content">
            <h2 className="it-dron">Drones</h2>
            <p className="it-dronp">
              We offer a range of advanced drones that revolutionize various
              industries, including aerial
              <strong> photography </strong> and <strong> videography</strong>,
              where our high-resolution camera-equipped drones capture
              breathtaking images and stunning videos from unique perspectives.
            </p>
            <p className="it-dronp">
              Our professional-grade drones provide accurate data collection and
              mapping capabilities surveying and mapping, enabling efficient
              land surveys and
              <strong> infrastructure inspections</strong>.
            </p>
            <p className="it-dronp">
              For <strong>agricultural applications</strong>, our agricultural
              drones with multispectral sensors optimize crop management by
              providing valuable insights into crop health and monitoring field
              conditions.
            </p>
            <p className="it-dronp">
              In the <strong>delivery and logistics</strong> sector, our
              delivery drones offer efficient and speedy transportation of
              goods, enabling timely deliveries in urban and remote areas.
            </p>
            <p className="it-dronp">
              Lastly, in <strong>search and rescue operations</strong>, our
              rugged and versatile drones equipped with thermal imaging cameras
              aid in locating missing persons and assessing disaster-stricken
              areas.
            </p>
          </div>
          <div className="image-content">
            <img src={drone} alt="Drones" className="drones-image" />
          </div>
        </div>
      </div>

      <div className="system-automation">
        <img
          className="electro-image-22"
          style={{ position: "absolute", right: "0" }}
          src={group}
          alt=""
        />
        <h1 className=" main-margin ">System Automation</h1>

        <div className="block md:flex  gap-8">
          <div className="flex flex-col">
            <p className="it-auto">
              Darat offers comprehensive services; conceptual design ensuring
              our client's automation needs are met through innovative and
              efficient solutions. We offer multi-discipline detailed design and
              specification, guaranteeing seamless integration for optimized
              performance.
            </p>

            <p className="it-auto">
              We are proficient in programming distributed control systems
              (DCS), remote terminal units (RTU), and supervisory control and
              data acquisition (SCADA) systems, enabling centralized control and
              monitoring of industrial processes.
            </p>

            <p className="it-auto">
              Our grid automation solutions encompass advanced grid
              communication, metering infrastructure, and energy optimization,
              empowering our clients to enhance grid efficiency and maximize
              energy utilization.
            </p>

            <p className="it-auto">
              In the delivery and logistics sector, our delivery drones offer
              efficient and speedy transportation of goods, enabling timely
              deliveries in urban and remote areas.
            </p>
            <img
              style={{ borderRadius: "10px" }}
              src={placeholderImage}
              alt="Automation auto-image system 1"
            />
          </div>
          <div className="images flex flex-col gap-4">
            <img
              style={{ borderRadius: "10px" }}
              className="hidden  md:block"
              src={placeholderImage}
              alt="Automation system 2"
            />

            <p className="it-auto1">
              <strong> Industrial communication gateways </strong> and protocol
              converters in hardware and software1 enable excellent
              communication between different devices and systems, ensuring
              interoperability and smooth operation.
            </p>

            <p className="it-auto1">
              <strong> Station Plant Information System (SPIS) </strong> and
              Data Retrieval Station Evaluation Panel (DTR/SEP) provides a
              central platform for seamless communication and automation across
              all processes. Our Substation Automation System (SAS) enhances
              reliable remote management.
            </p>

            <p className="it-auto1">
              We offer comprehensive installation and commissioning services,
              including pre-commissioning, construction supervision, and
              meticulous testing and inspection, guaranteeing our client’s
              successful implementation and seamless operation of automation
              systems.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 relative overflow-hidden">
        <img className="electro-image-2 absolute right-0" src={group} alt="" />
        <h2 className="text-3xl service-solution md:mt-16 font-bold mb-8">
          Security System
        </h2>

        {/* Desktop grid view */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardsss.map((solution, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={solution.imageUrl}
                alt={solution.title}
                className="w-full h-48 object-cover"
              />
              <div
                className="p-4"
                style={{
                  textAlign: "center",
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view slider */}
        <div className="md:hidden">
          <Slider {...sliderSettings}>
            {cardsss.map((solution, index) => (
              <div
                key={index}
                className={`slider-card ${
                  index === 0 ? "center-card" : "side-card"
                }`}
              >
                <img
                  src={solution.imageUrl}
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
                <div
                  className="p-4"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <h3 className="text-sm font-semibold mb-1">
                    {solution.title}
                  </h3>
                  <p
                    style={{ display: "none" }}
                    className="text-gray-600 text-sm"
                  >
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <img
        className="electro-image-22"
        style={{ position: "absolute", right: "0" }}
        src={group}
        alt=""
      />
      <div className="drones-section flex flex-col md:flex-row items-center p-8 ">
        {/* Text Section */}
        <div className="md:w-1/2    p-4">
          <h2 className=" main-margin text-2xl font-bold mb-4">Drones</h2>
          <p className="text-gray-700 drone-text mb-4">
            At Darat, we are experts in uncovering operational failures and
            resolving them swiftly, ensuring smooth and efficient business
            operations.
          </p>
          <p className="text-gray-700 drone-text mb-4">
            Through our diligent system maintenance practices, we not only
            enhance your organization’s overall efficiency but also save
            valuable time and resources associated with system management and
            production, enabling you to focus on what truly matters – driving
            growth and success.
          </p>
          <h3 className="font-semibold">Maintenance operations</h3>
          <ul className="list-disc drone-text list-inside text-gray-700">
            <li>Preventive</li>
            <li>Corrective</li>
            <li>Complex maintenance</li>
          </ul>
        </div>

        {/* Image Section */}
        <div style={{ width: "40%" }} className=" dron-image p-4">
          <img
            src={droneImage}
            alt="Maintenance worker with drone equipment"
            className="rounded-lg drone-image-2 shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}
