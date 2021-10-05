import React from 'react';
import { Link } from 'react-router-dom';

const NotFund = () => {
   return (
      <div className=" py-36">
         <div className="w-6/5 p-12">
            <div className="text-center">
               <h1 className="text-center text-9xl text-red-400">404</h1>
               <p className="text-5xl">Page Not Found!</p>
               <Link to="/home" type="button" class="py-2 mt-9 px-4 bg-gray-900 text-white font-semibold rounded-lg shadow-md transform transition motion-reduce:transform-none hover:scale-110 duration-500 focus:outline-none" tabindex="-1">
                  Go Home
               </Link>
            </div>
         </div>
      </div>
   );
};

export default NotFund;