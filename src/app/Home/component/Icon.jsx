import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import React from 'react'

const Icon = () => {
  return (
    <div className='ml-20 h-28'>
        <a href="http://linkedin.com/in/ridwat-okunlola-9b44ab223"><FontAwesomeIcon icon={faLinkedin} className="text-4xl"></FontAwesomeIcon></a>
       <a href="https://github.com/codingwithKenny"><FontAwesomeIcon icon={faGithub} className="ml-10 text-4xl"></FontAwesomeIcon></a>
       <a href=""><FontAwesomeIcon icon={faTwitter}  className="ml-10 text-4xl"></FontAwesomeIcon></a>
      <a href=""><FontAwesomeIcon icon={faWhatsapp} className="ml-10 text-4xl"></FontAwesomeIcon></a>
      
    </div>
  )
}

export default Icon
