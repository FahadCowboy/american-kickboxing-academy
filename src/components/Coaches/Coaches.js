import React from 'react';
import useCoaches from '../../hooks/useCoaches';
import CoachPofile from '../CoachProfile/CoachPofile';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Coaches = () => {
   const [coaches] = useCoaches()


   return (
      <div>
         <Header></Header>
         <div className="w-full">
            <div className="w-5/6 mx-auto py-12">
               <div className="mb-9 text-center">
                  <h1 className="text-4xl font-semibold">Coaches who made this Academy glorious</h1>
               </div>
               <div className="grid grid-cols-4 gap-7">
                  {
                     coaches.map(coach => <CoachPofile prop={coach}></CoachPofile>)
                  }
               </div>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Coaches;