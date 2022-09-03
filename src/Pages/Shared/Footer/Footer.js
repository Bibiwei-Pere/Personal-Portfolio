import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../../Assets/Images/logo.svg";

const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center mb-4 sm:mb-0">
          <img
            src={logo}
            className="mr-3 h-8"
            alt="Flowbite Logo"
          />
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <NavLink to="/about" className="mr-4 hover:underline md:mr-6 ">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/privacy-policy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink to="/licensing" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:underline">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        Akram Sakib
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
