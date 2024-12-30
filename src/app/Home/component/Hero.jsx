import React from 'react'

const Hero = ({darkMode}) => {
  return (
    <div className=' lg:flex lg:item-center lg:justify-center -ml-20 mt-20 pt-20 mb-10'>
       <div className={`${darkMode ? 'app.dark-mode' : 'herotext'}`}>
       <h1 className='text-2xl ml-60 font-bold mt-20 '>Hello there,</h1>
       <h1 className='textname text-4xl  ml-40 font-bold'>My name is</h1>
       <h1 className='text'>Ridwat Kenny.</h1>
       </div>
      <div className='lg:m-0'>
      <img id='image' src="./now-.png" width={350} height={350} alt="" className='' style={{ borderRadius: '50%', backgroundColor:'black' }} />

      </div>
    </div>
  )
}

export default Hero
