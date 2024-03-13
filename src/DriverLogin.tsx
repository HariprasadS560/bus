import React from 'react';
import Lottie from 'lottie-react';
import pecLogo from './pec.png'; // Import the image
import bus from './bus.json';

const DriverLogin: React.FC = () => {
  const handleLogin = () => {
    // Add your login logic here
  };

  return (
    <div className='relative '>
      <Lottie animationData={bus} className='absolute inset-0 z-0 opacity-50' />

      <div className='w-screen mt-20 sm:m-0 h-screen sm:h-screen flex justify-center items-center  relative z-10'>
        <div className='bg-transparent max-w-[80%]  rounded-lg shadow-lg p-10'>
          <img src={pecLogo} alt='PEC Logo' className='w-24 h-24 mx-auto mb-8 opacity-50' />

          <h1 className='text-3xl md:text-4xl lg:text-xl font-black text-center text-black font-serif mb-10 opacity-50'>
            WELCOME TO BUS MANAGEMENT SYSTEM
          </h1>
          <div className='grid grid-cols-1 gap-4'>
            <button type="button" className="text-black bg-transparent font-extrabold hover:bg-blue-400 rounded-lg text-sm md:text-base py-2.5 text-center border border-black opacity-50">
              Driver Login
            </button>
            <button type="button" className="text-black bg-transparent font-extrabold hover:bg-blue-400 rounded-lg text-sm md:text-base py-2.5 text-center border border-black opacity-50">
              Opinion
            </button>
            <button type="button" className="text-black font-extrabold bg-transparent hover:bg-blue-400 border-black rounded-lg text-sm md:text-base py-2.5 text-center border opacity-50">
              Track My Bus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverLogin;
