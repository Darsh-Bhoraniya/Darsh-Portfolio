import React from "react";

const Header = () => {
  const handleNavigation = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    // Get the height of the header
    const headerHeight = document.querySelector("header").offsetHeight;

    // Calculate the offset position
    const offsetPosition = targetElement.offsetTop - headerHeight;

    // Scroll to the offset position
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    targetElement.classList.add("highlight");

    setTimeout(() => {
      targetElement.classList.remove("highlight");
    }, 1000);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-blue-400">Darsh</span> Bhoraniya
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-lg hover:text-blue-400 transition duration-300"
                onClick={(e) => handleNavigation(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-lg hover:text-blue-400 transition duration-300"
                onClick={(e) => handleNavigation(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg hover:text-blue-400 transition duration-300"
                onClick={(e) => handleNavigation(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#profile"
                className="text-lg hover:text-blue-400 transition duration-300"
                onClick={(e) => handleNavigation(e, "profile")}
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg hover:text-blue-400 transition duration-300"
                onClick={(e) => handleNavigation(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
