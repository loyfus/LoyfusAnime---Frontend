import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const githubUrl = process.env.REACT_APP_GITHUB;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="https://i.imgur.com/8SplIKG.png"
              alt="Logo"
              className="navbar-logo-image"
            />
          </Link>
        </div>

        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">
              <FaHome style={{ marginRight: '5px' }} />
              Início
            </Link>
          </li> 
        </ul>

        <div className="navbar-contact">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-link"
            >
              <FaGithub style={{ marginRight: '5px' }} />
              Github
            </a>        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
