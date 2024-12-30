// Typewrite.js

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';


const Typewrite = ({darkMode}) => {
  return (
    <div className="type -mt-40 lg:mb-10  ml-40">
      <div className={`${darkMode ? 'app.dark-mode' : 'herotext'}`}>
        <p className='lg:text-4xl font-bold mt-10'>
          I am{' '}
          <Typewriter
            words={[ 'a FullStack Developer']}
            loop={true}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            cursor
            cursorStyle='|'
          />
        </p>
      </div>
    </div>
  );
};

export default Typewrite;
