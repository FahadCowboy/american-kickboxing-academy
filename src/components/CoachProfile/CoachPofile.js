import React from 'react';
import './CoachPofile'

const CoachPofile = props => {
   const {name, img, experience, style, age} = props.prop
   return (
      <div className="bg-gray-900 rounded-lg">
         <div className="main-service-img-wrapper">
            <img className="w-full h-full rounded-t-lg" src={img} alt="" />
         </div>
         <div className="p-4">
            <h3 className="text-2xl text-red-400 mb-2 font-semibold">{name}</h3>
            <p><span className="font-semibold text-yellow-200">Style:</span> {style}</p>
            <p><span className="font-semibold text-yellow-200">Experience:</span> {experience} years</p>
            <p><span className="font-semibold text-yellow-200">age:</span> {age} years</p>
         </div>
      </div>
   );
};

export default CoachPofile;