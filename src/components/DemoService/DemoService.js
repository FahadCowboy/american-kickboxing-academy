import React from 'react';
import './DemoService.css'

const DemoService = props => {
   const {name, img, description, fee, capacity} = props.prop
   console.log(props)
   return (
      <div className="demo-service bg-gray-900 rounded-lg box-border">
         <div className="h-96">
            <img className="w-full h-full rounded-t-lg" src={img} alt="" />
         </div>
         <div className="p-4 flex flex-col justify-between">
            <div>
               <h2 className="text-red-400 text-3xl mb-4">{name}</h2>
               <p className="mb-4 text-yellow-100">{description}</p>
               <p className="font-bold mb-4 text-yellow-100">Space left: {capacity}</p>
            </div>
            
            <div>
               <h3 className="text-yellow-300 text-2xl">${fee} ( Yearly )</h3>
            </div>
            
         </div>
      </div>
   );
};

export default DemoService;