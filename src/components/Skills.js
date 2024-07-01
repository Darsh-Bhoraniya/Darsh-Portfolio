import React from 'react';
import { FaCode, FaJava, FaJs, FaPython, FaGit, FaGithub, FaDatabase, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaMicrosoft, FaFileCode } from 'react-icons/fa';
import { SiMongodb, SiDotnet } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Languages */}
          <div className="group bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Languages</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaJava className="mr-2" /> Java
              </li>
              <li className="flex items-center">
                <FaJs className="mr-2" /> JavaScript
              </li>
              <li className="flex items-center">
                <FaFileCode className="mr-2" /> C Language
              </li>
              <li className="flex items-center">
                <FaPython className="mr-2" /> Python
              </li>
              <li className="flex items-center">
                <FaMicrosoft className="mr-2" /> C#
              </li>
            </ul>
          </div>
          {/* Tools */}
          <div className="group bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Tools</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaGit className="mr-2" /> Git
              </li>
              <li className="flex items-center">
                <FaGithub className="mr-2" /> GitHub
              </li>
              <li className="flex items-center">
                <FaDatabase className="mr-2" /> MSSQL
              </li>
              <li className="flex items-center">
                <SiMongodb className="mr-2" /> MongoDB
              </li>
              <li className="flex items-center">
                <FaCode className="mr-2" /> VS Code
              </li>
              <li className="flex items-center">
                <FaDatabase className="mr-2" /> Postman
              </li>
            </ul>
          </div>
          {/* Frameworks */}
          <div className="group bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Frameworks</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaReact className="mr-2" /> React JS
              </li>
              <li className="flex items-center">
                <SiDotnet className="mr-2" /> ASP.NET Core
              </li>
              <li className="flex items-center">
                <FaNodeJs className="mr-2" /> NodeJS
              </li>
              <li className="flex items-center">
                <FaBootstrap className="mr-2" /> Bootstrap
              </li>
            </ul>
          </div>
          {/* Technologies */}
          <div className="group bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Technologies</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaHtml5 className="mr-2" /> HTML
              </li>
              <li className="flex items-center">
                <FaCss3Alt className="mr-2" /> CSS
              </li>
              <li className="flex items-center">
                <SiDotnet className="mr-2" /> ASP.NET Core MVC
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg">
            I have proficient skills in multiple programming languages, including Java, C#, and JavaScript. I'm able to write clean, efficient code that is easy to understand and maintain. I also have strong teaching skills and have gained numerous certificates using these skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
