import React from "react";
import ProfilePhoto from "../images/file.png"; // Adjust the path to your photo file

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">
          About Me
        </h2>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8">
            <p className="mb-4 text-lg">
              Hi, I'm Darsh Bhoraniya, a passionate and dedicated Fullstack
              Developer with a strong background in Backend and Frontend
              Development. Currently in the 7th semester of my B.Tech program at
              Darshan University in Rajkot, I have developed a keen interest in
              creating dynamic and user-friendly web applications.
            </p>
            <p className="mb-4 text-lg">
              My journey in the tech world began with an aspiration to achieve a
              higher position in a reputed company. With strengths in quick
              learning, leadership, and decision-making, I have been able to
              contribute effectively to various projects.
            </p>
            <p className="mb-4 text-lg">
              My father is a farmer, and I have inherited his hardworking
              nature, which I apply to my work every day. Beyond coding, I enjoy
              driving cars and listening to music, which help me stay balanced
              and creative.
            </p>
            <p className="mb-4 text-lg">
              I have experience working with technologies such as
              React.js, Node.js, ASP.NET MVC, SQL Server, and Tailwind CSS. I
              have built projects including a bookshelving web API and an admin
              panel for a book management system. My goal is to leverage my
              skills to build impactful software solutions and continuously
              learn new technologies. Currently, I am working on a project using
              React.js and Node.js.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src={ProfilePhoto}
              alt="Darsh Bhoraniya"
              className="rounded-full w-72 h-72 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
