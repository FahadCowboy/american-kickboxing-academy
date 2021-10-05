import React from 'react';
import './Service.css'

// This component is loading autometically form 'DemoService' instead of here. Thid whould be solved!

const Service = props => {
const [name, description, fee, img, capacity] = props
   return (
      <div>
         <div className="bg-gray-900 rounded-lg">
            <div idName="main-service-img-wrapper">
               <img className="w-full h-full rounded-t-lg" src={img} alt="" />
            </div>
            <div className="p-4">
               <h2 className="text-3xl mb-4">{name}</h2>
               <p>{description}</p>
               <p>Only {description} spaces left</p>
               <h3>${fee} / Year</h3>
            </div>
         </div>
      </div>

   );
};

export default Service