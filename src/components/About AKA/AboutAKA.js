import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AboutAKA.css'

const AboutAKA = () => {
   return (
      <div>
         <Header></Header>
         <div className="w-full">
            <div className="w-5/6 mx-auto about-container p-12">
               <div className="about-wrapper bg-gray-900 rounded-lg p-12">
                  <div className="mb-7 about-img-wrapper">
                     <img className="rounded-lg w-full h-full" src="https://dmxg5wxfqgb4u.cloudfront.net/styles/gallery_expanded_2x/s3/image/2019-08/DC_Training_0297A.jpg?VersionId=ipXQW05YDs35zsYpzh.8H0wRV9mGpjHu&itok=Qzk8u9-l" alt="" />
                  </div>
                  <div>
                     <h1 className="text-6xl text-red-400 mt-12">American Kickboxing Akademy [ AKA ]</h1>
                     <p className="text-xl mt-5 leading-8">American Kickboxing Academy has been the premier Mixed Martial Arts gym in the Bay Area since 1985. Founded and still run by World Champion Kickboxer Javier Mendez, the core concepts taught have never changed. Focus has always been on quality instruction and teaching solid technique and application of all of the specialties, including Kickboxing, Boxing, Muay Thai, MMA, Wrestling and Jiu Jitsu. AKA may be well known for our champion grade fighters, but at our core we are a FAMILY GYM. Whether you are looking for a way to get the kids off their video games for a while, or looking to get the whole family in shape, we have something to offer everyone.</p>
                     <div>
                        <h2 className="mt-11 mb-7 text-4xl text-red-400">If you are looking for the BEST place to train, you found us!</h2>

                        <p className="text-xl leading-8 text-yellow-200"><span className="mr-5 font-bold text-2xl text-red-300">#</span>Over 8,000 square feet of OPEN MAT space by ZEBRA</p>
                        <p className="text-xl leading-8 text-yellow-200"><span className="mr-5 font-bold text-2xl text-red-300">#</span>50+ heavy bags available in 4 different rooms </p>
                        <p className="text-xl leading-8 text-yellow-200"><span className="mr-5 font-bold text-2xl text-red-300">#</span>Exclusive "BoxMaster" pad holder</p>
                        <p className="text-xl leading-8 text-yellow-200"><span className="mr-5 font-bold text-2xl text-red-300">#</span>2 Boxing Ring Rooms</p>
                        <p className="text-xl leading-8 text-yellow-200"><span className="mr-5 font-bold text-2xl text-red-300">#</span>Hybrid Cage Room</p>
                        <p className="text-xl leading-8 text-yellow-200"><span className="mr-5 font-bold text-2xl text-red-300">#</span>Reebok Functional Fitness Conditioning Room</p>
                        <p className="text-xl leading-8 text-yellow-200"><span className="mr-5 font-bold text-2xl text-red-300">#</span>CARDIO ROOMS with Stair masters, Treadmills, Arc Trainers, Rowers, Ellipticals, Jacob's ladders, Techno Gym Wave machine</p>
                        <p className="text-xl leading-8 text-yellow-200"><span className="mr-5 font-bold text-2xl text-red-300">#</span>Weight Rooms</p>
                        <p className="text-xl leading-8 text-yellow-200"><span className="mr-5 font-bold text-2xl text-red-300">#</span>Men's and Women's locker rooms with Showers</p>
                        <p className="text-xl leading-8 text-yellow-200"><span className="mr-5 font-bold text-2xl text-red-300">#</span>Recovery room with Whole Body CRYOTHERAPY (extra fee) </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer></Footer>
      </div>
      
   );
};

export default AboutAKA;