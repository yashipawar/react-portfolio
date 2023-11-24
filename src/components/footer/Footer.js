import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import  './Footer.css'
import '../mobileScreen.css'

const Footer = () => {
  return (
    <div className="copyright">
      <p>
        Copyright @ yashashri. Made with <FontAwesomeIcon icon={faHeart} />
      </p>
    </div>
  );
};

export default Footer;
