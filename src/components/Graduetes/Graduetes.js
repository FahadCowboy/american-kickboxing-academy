import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Graduetes.css'

const Graduetes = () => {
   return (
      <div>
         <Header></Header>
         <div className="py-44">
            <div className="p-12">
               <div className="text-center">
                  <h1 className="text-center text-9xl text-red-400">404</h1>
                  <p className="text-5xl">Page Not Found!</p>
                  <p className="text-3xl">This section is under construction.</p>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Graduetes;