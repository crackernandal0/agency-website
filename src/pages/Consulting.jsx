// eslint-disable-next-line
import React from "react";
import "./Consulting.css"; // Create this CSS file for styling
// import image1 from '../assets/images/Group 145.png'
import image2 from "../assets/images/Group 146.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apex from "../assets/images/apex.png";
import apex2 from "../assets/images/apex2.png";
import group from "../assets/images/Group 145.png";
// import group2 from '../assets/images/Group 146.png'
import tacle1 from "../assets/home/infosetting.png";
import tackle2 from "../assets/home/avtar.png";
import tackle1 from "../assets/home/cost.png";
import process3 from "../assets/home/seraching.png";
import process1 from "../assets/home/setting.png";
import process2 from "../assets/home/idea.png";
import process4 from "../assets/home/board.png";
import digital1 from "../assets/images/digital1.png";
import digital6 from "../assets/images/digital6.png";
import digital2 from "../assets/images/digital2.png";
import digital3 from "../assets/images/digital3.png";
import digital5 from "../assets/images/digital5.png";
import solution1 from "../assets/images/solution1.png";
import solution2 from "../assets/images/solution2.png";
import solution3 from "../assets/images/solution3.png";
import solution4 from "../assets/images/solution4.png";
import solution5 from "../assets/images/solution5.png";
import solution6 from "../assets/images/solution6.png";
import software1 from "../assets/images/software1.png";
import software2 from "../assets/images/software2.png";
import software3 from "../assets/images/software3.png";
import software4 from "../assets/images/software4.png";
import ai1 from "../assets/images/ai1.png";
import ai2 from "../assets/images/ai2.png";
import ai3 from "../assets/images/ai3.png";
import ai4 from "../assets/images/ai4.png";
import lastsolutions1 from "../assets/images/lastsolutions1.png";
import lastsolutions2 from "../assets/images/lastsolutions2.png";
import lastsolutions3 from "../assets/images/lastsolutions3.png";
import lastsolutions4 from "../assets/images/lastsolutions4.png";
import lastsolutions5 from "../assets/images/lastsolutions5.png";
import lastsolutions6 from "../assets/images/lastsolutions6.png";
import lastcard1 from "../assets/images/lastcard1.png";
import lastcard2 from "../assets/images/lastcard2.png";
import lastcard3 from "../assets/images/lastcard3.png";
import lastcard4 from "../assets/images/lastcard4.png";
import lastcard5 from "../assets/images/lastcard5.png";
import lastcard6 from "../assets/images/lastcard6.png";
import lastcard7 from "../assets/images/lastcard7.png";
import Graident from "../assets/home/1.png";

import background from "../assets/images/consulting.png";

const Consulting = () => {
  // const isMobile = window.innerWidth <= 768;

  const Card = ({ title, content }) => {
    return (
      <div className="card-item">
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{content}</p>
      </div>
    );
  };

  const Cards = ({ title, items }) => {
    return (
      <div className="data-card">
        <h3 className="data-card-title">{title}</h3>
        <ul style={{ listStyle: "disc" }} className="data-card-list">
          {items.map((item, index) => (
            <li key={index} className="data-card-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

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

  const cards = [
    {
      title: "Digital Strategy Development",
      description: (
        <ul>
          <li>
            Conduct a digital maturity assessment to identify areas for
            improvement.
          </li>
          <li>
            Define a clear digital vision and roadmap aligned with business
            objectives.
          </li>
        </ul>
      ),
      imageUrl: digital1, // Replace with actual image paths or URLs
    },
    {
      title: "Process Automation",
      description: (
        <ul>
          <li>
            Identify manual processes and automate them using software
            solutions.
          </li>
          <li>
            Implement workflow management systems to streamline operations.
          </li>
        </ul>
      ),
      imageUrl: digital6,
    },
    {
      title: "Cloud Infrastructure",
      description: (
        <ul>
          <li>
            Migrate data and applications to cloud platforms (e.g., AWS, Azure,
            Google Cloud).
          </li>
          <li>Ensure scalability, security, and reliability.</li>
        </ul>
      ),
      imageUrl: digital3,
    },
    {
      title: "Data Analytics and Visualization",
      description: (
        <ul>
          <li>
            Implement data analytics tools (e.g., Tableau, Power BI) to gain
            insights.
          </li>
          <li>
            Develop dashboards for real-time monitoring and decision-making.
          </li>
        </ul>
      ),
      imageUrl: digital5,
    },
    {
      title: "Employee Training and Support",
      description: (
        <ul>
          <li>Provide training on new digital tools and processes.</li>
          <li>Offer ongoing support to ensure successful adoption.</li>
        </ul>
      ),
      imageUrl: digital2,
    },
  ];

  const solutions = [
    {
      title: "Custom Software Development",
      description:
        "Develop tailored software solutions to automate processes, improve efficiency, and enhance customer experience.",
      imageUrl: solution1,
    },
    {
      title: "Mobile App Development",
      description:
        "Create mobile applications to engage customers, improve sales, and enhance brand visibility.",
      imageUrl: solution2,
    },
    {
      title: "Artificial Intelligence (AI) and Machine Learning (ML) Solutions",
      description:
        "Implement AI and ML to analyze data, predict trends, and optimize business decisions.",
      imageUrl: solution3,
    },
    {
      title: "Internet of Things (IoT)",
      description:
        "Develop IoT solutions to monitor and control devices, optimize processes, and improve efficiency.",
      imageUrl: solution4,
    },
    {
      title: "Data Analytics and Visualization",
      description:
        "Develop data analytics and visualization tools to gain insights, track performance, and inform business decisions.",
      imageUrl: solution5,
    },
    {
      title: "Cloud-Based Software Solutions",
      description:
        "Develop cloud-based software solutions to enhance collaboration, improve scalability, and reduce costs.",
      imageUrl: solution6,
    },
  ];

  const softwareSolutions = [
    {
      title: "Custom Made",
      description:
        "Tailor-made software solutions that meet your unique business needs. Our team utilizes cutting-edge technologies to deliver efficient, scalable, and flexible applications.",
      imageUrl: software1,
    },
    {
      title: "E-Commerce",
      description:
        "Boost your online sales with our robust e-commerce platforms. We offer everything from online storefronts to order management, ensuring a seamless shopping experience.",
      imageUrl: software2,
    },
    {
      title: "Booking App",
      description:
        "Simplify booking processes with our versatile app designed for various industries. Enhance customer satisfaction with features like online booking, appointment management, and payment processing.",
      imageUrl: software4,
    },
    {
      title: "LMS (Learning Management System)",
      description:
        "Transform employee training with our comprehensive LMS. Manage courses, track progress, and issue certifications to boost skills and performance.",
      imageUrl: software3,
    },
  ];

  const aiSolutions = [
    {
      title: "Process Automation",
      description:
        "Automate repetitive tasks using Robotic Process Automation (RPA) and ML.",
      imageUrl: ai3,
    },
    {
      title: "Predictive Analytics",
      description:
        "Forecast outcomes using statistical models and ML algorithms.",
      imageUrl: ai2,
    },
    {
      title: "Decision Support Systems",
      description: "Develop AI-powered decision-making tools.",
      imageUrl: ai1,
    },
    {
      title: "Natural Language Processing (NLP)",
      description: "Analyze and generate human language.",
      imageUrl: ai4,
    },
  ];

  const lastsolutions = [
    {
      title: "Data Integration",
      description:
        "Gathering data from various sources: databases, spreadsheets, APIs.",
      imageUrl: lastsolutions1,
    },
    {
      title: "Data Labeling",
      description:
        "High-quality labeling for text, audio, video, and image data to support AI training.",
      imageUrl: lastsolutions2,
    },
    {
      title: "Data Processing",
      description:
        "Clean, transform, and prepare your data for in-depth analysis.",
      imageUrl: lastsolutions3,
    },
    {
      title: "Data Analysis",
      description:
        "Applying statistical models, algorithms, and data visualization techniques.",
      imageUrl: lastsolutions4,
    },
    {
      title: "Data Visualization",
      description: "Creating interactive dashboards and reports.",
      imageUrl: lastsolutions5,
    },
    {
      title: "Insight Generation",
      description: "Identifying trends, patterns, and correlations.",
      imageUrl: lastsolutions6,
    },
  ];

  const lastcards = [
    {
      imageUrl: lastcard1,
      title: "Project Management",
      description: "Plan, execute and monitor projects effectively.",
    },
    {
      imageUrl: lastcard2,
      title: "Procurement",
      description: "Streamline and automate the purchasing process.",
    },
    {
      imageUrl: lastcard3,
      title: "Financial Management and Accounting",
      description:
        "Track financial transactions, budgeting, invoicing, and reporting.",
    },
    {
      imageUrl: lastcard4,
      title: "HRM",
      description:
        "Automate HR processes including payroll, attendance, and performance evaluation.",
    },
    {
      imageUrl: lastcard5,
      title: "CRM",
      description:
        "Manage customer interactions, track leads, and streamline sales processes.",
    },
    {
      imageUrl: lastcard6,
      title: "Inventory",
      description:
        "Optimize inventory levels, track stock movements, and ensure accurate forecasting.",
    },
    {
      imageUrl: lastcard7,
      title: "E-Commerce",
      description:
        "Manage online stores, streamline order processing, inventory management, and customer support.",
    },
  ];

  return (
    <>
      <main
        className="relative bg-cover bg-center "
        style={{
          backgroundImage: `url(${background})  ,  url(${Graident})`,
          opacity: "0.9",
          height: "125vh",
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
          className="relative electro-heading z-10 text-white p-4   md:p-8 lg:p-8 text-left"
        >
          <h1 style={{ fontSize: "35px" }} className="it-title font-bold">
            Consulting
          </h1>
          <p
            style={{ fontSize: "48px" }}
            className="mt-4 it-des italic  align-left"
          >
            Unlocking potential with AI, data labeling, and software tailored to
            your goals.
          </p>
        </div>
      </main>
      <div className="consulting-container">
        <img
          className="electro-image-22"
          style={{ position: "absolute", right: "0" }}
          src={group}
          alt=""
        />
        <header className="consulting-header">
          <h1>
            Innovation and technology <br /> should make life simple.
          </h1>
          <p>
            That’s why, here at Darat Co., we make sure innovation <br /> works
            for you, your business, and your people.
          </p>
          <p>
            We are dedicated to provide solutions tailored to your needs. <br />{" "}
            Our team works tirelessly to deliver exceptional AI solutions,{" "}
            <br /> data labeling, and software development.
          </p>
        </header>
        <img
          className="electro-image-22"
          style={{ position: "absolute", right: "0" }}
          src={group}
          alt=""
        />
        <section className="problems-section">
          <h2>Problems to tackle</h2>

          <div className="problems-grid">
            <div className="problem-card">
              <div className="problem-icon">
                <img src={tacle1} alt="" />
              </div>
              <p>Struggling with inefficient business processes</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">
                <img src={tackle1} alt="" />
              </div>
              <p>
                High operational <br /> cost
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">
                <img src={tackle2} alt="" />
              </div>
              <p>and poor customer engagement?</p>
            </div>
          </div>
        </section>

        <footer className="consulting-footer">
          <p>
            Darat understands these challenges and offers <br /> innovative
            solutions to help and overcome them.
          </p>
        </footer>
      </div>
      <div className="process-container">
        <h2>Process</h2>
        <div className="process-grid">
          <div className="process-card">
            <div className="process-icon">
              <img src={process3} alt="" />
            </div>
            <h3>Diagnosis</h3>
            <p>
              We begin by conducting a thorough <br />
              assessment of your business <br />
              challenges and needs, identifying key <br />
              areas for improvement.
            </p>
          </div>

          <div className="process-card">
            <div className="process-icon">
              <img src={process4} alt="" />
            </div>
            <h3>Strategic Development</h3>
            <p>
              Our team crafts a tailored strategy, <br />
              leveraging advanced AI, custom <br />
              software solutions, and data analytics <br />
              to address your specific requirements.
            </p>
          </div>

          <div className="process-card">
            <div className="process-icon">
              <img src={process2} alt="" />
            </div>
            <h3>Implementation</h3>
            <p>
              We seamlessly integrate our solutions <br />
              into your existing <br />
              infrastructure, ensuring minimal <br />
              disruption and maximum efficiency.
            </p>
          </div>

          <div className="process-card">
            <div className="process-icon">
              <img src={process1} alt="" />
            </div>
            <h3>Optimization</h3>
            <p>
              Continuous monitoring and feedback help <br />
              us refine and optimize our <br />
              solutions, ensuring sustained growth <br />
              and improved performance for your company.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative overflow-hidden">
        <img className="electro-image-2 absolute right-0" src={group} alt="" />
        <h2 className="digital-transformation mt-16 font-bold mb-4">
          Digital Transformation
        </h2>
        <p className="mb-2 digital-transformation-des">
          Digitalization is key for companies to stay afloat and thrive. They
          require assistance in adopting digital technologies to streamline
          operations and expand their customer base.
        </p>
        <p className="font-semibold digital-transformation-des mb-6">
          Aim: Integrate digital technologies into SME operations, processes,
          and culture.
        </p>
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
        <h2 className="digital-transformation font-bold mb-4">
          Software Solutions
        </h2>
        <p className="mb-2 digital-transformation-des">
          Customized software solutions can help automate processes, enhance
          productivity, and gain a competitive edge.
        </p>
        <p className="font-semibold digital-transformation-des mb-6">
          Aim: to develop customized software solutions to address specific
          business needs and challenges.
        </p>

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
          Software
        </h2>

        {/* Desktop grid view */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {softwareSolutions.map((solution, index) => (
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
            {softwareSolutions.map((solution, index) => (
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
        <h2 className="software-text font-bold mb-4">
          Artificial Intelligence
        </h2>
        <p className="mb-4 digital-transformation-des">
          Our AI and ML solutions help organizations optimize business
          processes, improve efficiency, and reduce costs.
        </p>

        {/* Desktop grid view */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {aiSolutions.map((solution, index) => (
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
            {aiSolutions.map((solution, index) => (
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
      <div className="app-container container">
        <section className="industry-section">
          <h2 className="section-title">Industry Applications</h2>
          <div className="card-grid">
            <Card
              title="Manufacturing"
              content="Predictive maintenance, quality control, and supply chain optimization."
            />
            <Card
              title="Finance"
              content="Risk management, fraud detection, and portfolio optimization."
            />
            <Card
              title="Healthcare"
              content="Disease diagnosis, patient outcome prediction, and treatment optimization."
            />
            <Card
              title="Customer Service"
              content="Chatbots, sentiment analysis, and personalized recommendations."
            />
          </div>
        </section>

        <section className="case-study-section">
          <h2 className="section-title">Case Studies</h2>
          <div className="card-grid">
            <Card
              title="Predictive Maintenance"
              content="An airline uses ML to predict engine failures, reducing downtime by 30%."
            />
            <Card
              title="Automated Customer Service"
              content="A retail company implements AI-powered chatbots, reducing support queries by 25%."
            />
            <Card
              title="Supply Chain Optimization"
              content="A logistics company uses ML to optimize routes, reducing fuel consumption by 15%."
            />
            <Card
              title="Disease Diagnosis"
              content="A hospital uses AI-powered imaging analysis to diagnose cancer more accurately."
            />
          </div>
        </section>
      </div>
      <div className="data-management container">
        <img
          className="electro-image-22"
          style={{ position: "absolute", right: "0" }}
          src={group}
          alt=""
        />
        <h2 className="data-management-title">Data Management & Engineering</h2>
        <p className="data-management-description">
          Access to data analytics and business intelligence tools enables
          informed decision-making, helping companies navigate challenges and
          capitalize on opportunities.
        </p>
        <p className="data-management-description">
          Our Data services enable organizations to make informed decisions by
          providing actionable insights from data.
        </p>
        <p className="data-management-aim">
          <strong>Aim:</strong> to implement solutions to collect, analyze, and
          visualize data, enabling informed business decisions.
        </p>

        <div className="data-management-cards">
          <Cards
            title="Data Analytics Platforms"
            items={["Tableau", "Power BI", "QlikView", "Google Data Studio"]}
          />
          <Cards
            title="Business Intelligence Tools"
            items={[
              "SAP BusinessObjects",
              "Oracle Business Intelligence",
              "Microsoft Power BI",
              "IBM Cognos",
            ]}
          />
          <Cards
            title="Data Visualization Tools"
            items={["D3.js", "Chart.js", "Highcharts", "FusionCharts"]}
          />
          <Cards
            title="Data Sources"
            items={[
              "CRM data",
              "ERP data",
              "Social media data",
              "Sensor data (IoT)",
              "Customer feedback data",
            ]}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 relative overflow-hidden">
        <img className="electro-image-2 absolute right-0" src={group} alt="" />
        <h2 className="digital-transformation font-bold mb-4">
          Data Management & Engineering
        </h2>
        <p className="mb-2 digital-transformation-des">
          Access to data analytics and business intelligence tools enables
          informed decision-making, helping companies navigate challenges and
          capitalize on opportunities.
        </p>
        <p className="font-semibold digital-transformation-des mb-6">
          Aim: to implement solutions to collect, analyze, and visualize data,
          enabling informed business decisions.
        </p>

        {/* Desktop grid view */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {lastsolutions.map((solution, index) => (
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
            {lastsolutions.map((solution, index) => (
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

      <div className="apex-container">
        <img
          className="electro-image-3"
          style={{ position: "absolute", left: "-30px" }}
          src={image2}
          alt=""
        />
        <header className="apex-header">
          <div className="apex-logo">
            <img src={apex} alt="APEX Logo" className="apex-logo-img" />{" "}
            {/* Replace 'logo.png' with the actual path */}
            {/* <h1 className="apex-tagline">APEX</h1>
          <p className="apex-sub-tagline">INTEGRATE, SUCCEED</p> */}
          </div>
        </header>
        <main className="apex-main-content">
          <img src={apex2} alt="APEX Logo" className="apex-logo-img-1" />
          <h2 className="apex-title">Business Management Software</h2>
          <p className="apex-description">
            APEX is a comprehensive solution with modules for project
            management, procurement, finance, CRM, HR, inventory, and
            e-commerce. Streamline your operations and improve efficiency with
            our all-in-one software.
          </p>
        </main>
            
      </div>
      <div className="container mx-auto px-4 py-12 relative overflow-hidden">
        <img className="electro-image-2 absolute right-0" src={group} alt="" />

        {/* Desktop grid view */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {lastcards.map((solution, index) => (
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
            {lastcards.map((solution, index) => (
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
    </>
  );
};

export default Consulting;
