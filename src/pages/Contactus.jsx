import React, { useState } from 'react';
import mapImage from '../assets/images/image 28.png'; // Replace with the actual path to your image
import group from '../assets/images/Group 111.png'


function ContactUs() {
  // Initial form data with default values
  // const initialFormData = {
  //   name: 'Roberto Gomez',
  //   telephone: '+51944444998',
  //   email: 'q@gmail.com',
  //   message: 'I want to acquire your services of...',
  // };
  const initialFormData = {
    name: '',
    telephone: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional actions like form validation or API calls here
    setSubmitted(true);

    // Clear the form fields after submission
    setFormData(initialFormData);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-10">
      {/* Map Image Section */}
      <img style={{position:'fixed', left:'0', zIndex:'2', bottom:'120px'}} src={group} alt="" />
      <div className="md:w-1/2 mb-8 md:mb-0 md:mr-6">
        <img src={mapImage} alt="Map" className="w-full rounded-md shadow-lg" />
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 bg-black text-white p-8 rounded-md shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Contact us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Name*</label>
            <input
            style={{background:'rgb(71 71 71)'}}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-white 
               border-1 rounded-md focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block mb-2">Telephone*</label>
            <input
            style={{background:'rgb(71 71 71)', border:'white 1px solid '}}
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className="w-full p-2 border-white 
               border-1 rounded-md focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block mb-2">Email*</label>
            <input
            style={{background:'rgb(71 71 71)', border:'white 1px solid '}}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border-white 
               border-1 rounded-md focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea
          style={{background:'rgb(71 71 71)', border:'white 1px solid '}}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border-white 
                rounded-md focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div className="flex items-center justify-around">
            <button
              style={{ background: '#E8E3AC', borderRadius: '50px', fontSize: '14px' }}
              type="submit"
              className="text-black px-4 py-2 font-bold hover:bg-yellow-600"
            >
              SUBMIT NOW
            </button>
            {submitted && (
              <span style={{ fontSize: '12px' }} className="text-white">
                Thank you for writing to us. <br /> We will be in touch soon.
              </span>
            )}
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-8 text-sm">
          <h3 className="font-bold mb-2">For more information</h3>
          <p>📧 info@daratec.com</p>
          <p>📧 marketing@daratec.com</p>
          <p>🏠 HQ 3592 Al Urubah Rd, Riyadh</p>
          <p>🔖 Commercial Registrations: 1010826307</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
