import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-8">Contact Me</h2>
        <div className="flex justify-center space-x-8">
          {/* Contact Card for Phone */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-4 border border-transparent hover:border-blue-500 transition duration-300 transform hover:scale-105">
            <div className="p-4 rounded-full bg-blue-600">
              <FaPhoneAlt className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="text-gray-300">Mobile: 8160071270</p>
            </div>
          </div>
          {/* Contact Card for Email */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-4 border border-transparent hover:border-blue-500 transition duration-300 transform hover:scale-105">
            <div className="p-4 rounded-full bg-blue-600">
              <FaEnvelope className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-gray-300">darshpatel269@gmail.com</p>
            </div>
          </div>
          {/* Contact Card for Location */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-4 border border-transparent hover:border-blue-500 transition duration-300 transform hover:scale-105">
            <div className="p-4 rounded-full bg-blue-600">
              <FaMapMarkerAlt className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Location</h3>
              <p className="text-gray-300">Rajkot, Gujarat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
