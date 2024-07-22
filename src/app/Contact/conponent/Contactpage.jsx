import React from 'react'

const ContactPage = ({darkMode}) => {
  return (
    <div className=''>
       <div className={`${darkMode ? 'app.dark-mode' : ''}`}>
       <p className='text-2xl text-center mt-24 pt-10 '>Thank you for taking your time, I'm excited to hear from YOU!!!</p>
       <h1 className='text-3xl font-bold text-center mb-5 '>Contact Ridwat</h1>
       
       </div>
    </div>
  )
}

export default ContactPage
