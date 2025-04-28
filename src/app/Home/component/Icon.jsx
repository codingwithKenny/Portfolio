import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Icon = () => {
  return (
    <div className="ml-2 lg:ml-20 -mt-60 h-28 flex flex-col space-y-4">
      <a href="http://linkedin.com/in/ridwat-okunlola-9b44ab223">
        <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
      </a>
      <a href="https://github.com/codingwithKenny">
        <FontAwesomeIcon icon={faGithub} className="text-4xl" />
      </a>
      <a href="">
        <FontAwesomeIcon icon={faTwitter} className="text-4xl" />
      </a>
      <a href="">
        <FontAwesomeIcon icon={faWhatsapp} className="text-4xl" />
      </a>
    </div>
  );
};

export default Icon;
