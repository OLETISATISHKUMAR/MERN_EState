import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Assuming you have imported the FontAwesome search icon

function Header() {
  return (
    <header className="bg-blue-500 p-2.5">
      <div className="container mx-auto flex justify-between items-center ml-10">
        <h1 className="text-3xl font-bold text-white">
          <span className="text-yellow-400">Satish</span>
          <span>Kumar</span>
        </h1>
        <form className="bg-white rounded-md p-1  flex items-center">
          <input
            className="bg-white pl-1 focus:outline-none w-56"
            type="text"
            placeholder="Search...."
          />
           <FaSearch className="text-gray-400 mr-2" />
        </form>
        <nav className="space-x-5 mr-20">
          <Link to="/" className="text-white hover:text-yellow-400">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-yellow-400">
            About
          </Link>
          <Link to="/login" className="text-white hover:text-yellow-400">
            SignIn
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
