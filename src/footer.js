import React from 'react';
import { FaGithub,FaLinkedin,FaInstagram } from 'react-icons/fa'

const footer = () => (
    <div className="footer">
      <p className="ft">Made by Sarvesh Limaye</p>
      <a className="giticon" href="https://github.com/SarveshLimaye">
          <FaGithub/>
      </a>
      <a className="linkedinicon" href="https://www.linkedin.com/in/sarvesh-limaye-7a922620b">
          <FaLinkedin/>
      </a>
      <a className="instaicon" href="https://www.instagram.com/sarvesh0507/">
          <FaInstagram/>
      </a>
      
    </div>
  );

export default footer;