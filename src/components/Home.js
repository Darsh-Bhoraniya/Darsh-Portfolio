import React, { useEffect, useState } from "react";

const Home = () => {
  const roles = ["Fullstack Developer", "Backend Developer", "Frontend Developer", "Student", ".Net Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello, I'm <span className="text-blue-400">Darsh Bhoraniya</span>!</h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8">
            <span className="dynamic-role">{roles[currentRoleIndex]}</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
