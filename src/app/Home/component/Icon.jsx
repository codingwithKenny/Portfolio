import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Icon = () => {
  const icons = [
    { href: "https://linkedin.com/in/ridwat-okunlola-9b44ab223", icon: faLinkedin },
    { href: "https://github.com/codingwithKenny", icon: faGithub },
    { href: "https://twitter.com", icon: faTwitter },
    { href: "https://wa.me/", icon: faWhatsapp },
  ];

  return (
    <div className="flex gap-6">
      {icons.map((item, i) => (
        <a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl  transition-all transform hover:scale-110 hover:drop-shadow-[0_0_8px_#ec4899]"
        >
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}
    </div>
  );
};

export default Icon;
