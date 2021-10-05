import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../logo/aka-logo.png'

const Header = () => {
   return (
      <header className="w-full bg-gray-900">
         <div className="w-5/6 mx-auto">
            <div className="flex justify-between items-center py-1.5">
               <div className="py-2">
                  <img className="w-28" src={logo} alt="" />
               </div>
               <nav className="">
                  <Link className="ml-5 px-5 py-2 no-underline text-red-300 font-semibold hover:text-purple-50" to="/home">Home</Link>
                  <Link className="ml-4 px-4 no-underline text-red-300 font-semibold hover:text-purple-50" to="/services">Services</Link>
                  <Link className="ml-4 px-4 no-underline text-red-300 font-semibold hover:text-purple-50" to="/about">About</Link>
                  <Link className="ml-4 px-4 no-underline text-red-300 font-semibold hover:text-purple-50" to="/coaches">Coaches</Link>
                  <Link className="ml-4 px-4 no-underline text-red-300 font-semibold hover:text-purple-50" to="/graduetes">Graduetes</Link>
               </nav>
            </div>
         </div>
      </header>
   );
};

export default Header;