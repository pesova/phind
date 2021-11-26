// react footer component for the application footer

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import FooterSvg from './FooterSvg';

const Footer = () => {
  return (
    <footer className="footer-main">
        <div className="footer-top">
            <div className="footer-links">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/privacy">Privacy</Link>
            </div>
            <div className="footer-social">
                <div className="logo_container">
                    <Link to="/">
                    {/* <img src='' alt="phind logo"/> */}
                    <h2>PHIND</h2>
                    </Link>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-copyright">
            <p>
                &copy; {new Date().getFullYear()} Copyright: phind
            </p>
            </div>
        </div>
        <FooterSvg/>
    </footer>
  );
};

export default Footer;