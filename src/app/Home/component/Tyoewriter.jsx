'use client';

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Typewrite = ({ darkMode }) => {
  return (
    <div className="flex items-center justify-start 
      mt-8 ml-20  /* Default mobile */
      sm:mt-32 sm:ml-20 
      md:mt-40 md:ml-40   
      lg:-mt-40 lg:ml-60">  
      
      <div className="p-4 sm:p-6 rounded-lg ml-2 sm:ml-8 md:ml-16 bg-gray-900 text-white shadow-lg transition-all duration-500">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">
          <span className="font-bold">I </span>
          <span className="font-bold">
            <Typewriter
              words={['DESIGN', 'BUILD', 'DEPLOY', 'OPTIMIZE']}
              loop
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              cursor
              cursorStyle="|"
            />
          </span>{' '}
          <span className="font-bold">website.</span>
        </p>
      </div>
    </div>
  );
};

export default Typewrite;
