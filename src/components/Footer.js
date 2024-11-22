import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <img
          src="https://i.imgur.com/8SplIKG.png"
          alt="Logo"
          className="footer-logo"
        />
        <p className="footer-copyright">
          © {currentYear} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
