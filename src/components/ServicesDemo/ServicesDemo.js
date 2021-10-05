import React from 'react';
import useServices from '../../hooks/useServices';
import DemoService from '../DemoService/DemoService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ServicesDemo = () => {
   const [services] = useServices()

   const fourServices = []
   if(services.length){
      for(let i = 0; i < 4; i++){
         fourServices.push(services[i])
      }
   }
   
   return (
      <div>
         <Header></Header>
         <div className="w-full">
            <div className="w-5/6 mx-auto">
               <div className="my-7">
                  <h2 className="text-5xl font-semibold mb-12 mt-2 text-center">Welcome to American Kickboxing Academy.</h2>
                  <div className="p-12 rounded-lg bg-gray-900">
                     <img className="rounded-lg" src="https://i.redd.it/fx3l7h1zaxq11.jpg" alt="" />
                  </div>
               </div>
               <div className="pt-7">
                  <h2 className="text-4xl font-semibold mt-5 text-center">Welcome to American Kickboxing Academy.</h2>
                  <div className="grid grid-cols-2 gap-7 py-12">
                     {
                        fourServices.map(service => <DemoService key={service.id} prop={service}></DemoService>)
                     }
                  </div>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </div>
      
   );
};

export default ServicesDemo;