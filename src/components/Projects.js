import React from 'react';
import booksellingThumbnail from '../images/bookselling-thumbnail.jpg';
import booksApiThumbnail from '../images/books-api-thumbnail.jpg';

const Project = () => {
  return (
    <section id="projects" className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-white mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1: BookSelling Admin Panel */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src={booksellingThumbnail}
              alt="BookSelling Admin Panel"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">BookSelling Admin Panel</h3>
              <p className="text-gray-400 mb-4">
                This project is an admin panel for managing book selling operations.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Darsh-Bhoraniya/BookShelling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: BooksApi */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src={booksApiThumbnail}
              alt="BooksApi"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">BooksApi</h3>
              <p className="text-gray-400 mb-4">
                This project is a Web API for managing books data.
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Darsh-Bhoraniya/BooksApi/tree/master"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
