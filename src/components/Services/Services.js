import React from 'react';
import { useEffect, useState } from 'react';
import useServices from '../../hooks/useServices';
import Service from '../DemoService/DemoService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Services = () => {
   const [services] = useServices()
   return (
      <div>
         <Header></Header>
         <div className="w-full">
            <div className="w-5/6 mx-auto py-12">
               <h2 className="text-center text-4xl font-semibold mb-9">All the services of us</h2>
               <div className="grid grid-cols-3 gap-7">
                  {
                     services.map(service => <Service key={service.id} prop={service}></Service>)
                  }
               </div>
            </div>
   
         </div>
         <Footer></Footer>
      </div>
      
   );
};

export default Services;