import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Profile = () => {
  return (
    <section id="profile" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-8">Profile</h2>
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/Darsh-Bhoraniya"
            className="group bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-6xl text-blue-400 group-hover:text-white transition duration-300" />
            <div>
              <h3 className="text-2xl font-bold">GitHub</h3>
              <p className="text-gray-400">View my GitHub profile</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/darsh-bhoraniya-09263b241/"
            className="group bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-6xl text-blue-400 group-hover:text-white transition duration-300" />
            <div>
              <h3 className="text-2xl font-bold">LinkedIn</h3>
              <p className="text-gray-400">View my LinkedIn profile</p>
            </div>
          </a>
          <a
            href="https://leetcode.com/u/Darsh_Bhoraniya/"
            className="group bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition duration-300 transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode className="text-6xl text-blue-400 group-hover:text-white transition duration-300" />
            <div>
              <h3 className="text-2xl font-bold">LeetCode</h3>
              <p className="text-gray-400">View my LeetCode profile</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
