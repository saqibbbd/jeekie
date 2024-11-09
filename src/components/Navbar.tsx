import React from 'react';
import { Link } from 'react-router-dom';
import { FaDatabase } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FaDatabase className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-white text-xl font-bold">jeekie<span className="text-purple-500">.host</span></span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/templates" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Templates
            </Link>
            <Link to="/custom" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Custom
            </Link>
            <Link to="/pricing" className="bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-600">
              View Plans
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}