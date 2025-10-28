import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

/**
 * Footer Component
 * Displays copyright information and ITRI branding
 * 
 * Features:
 * - Copyright notice
 * - ITRI logo and branding
 * - Contact information links
 * - Responsive layout
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section - Copyright */}
        <div className="footer-left">
          <p className="footer-copyright">
            copyright © ITRI all rights reserved
          </p>
        </div>

        {/* Right Section - ITRI Logo */}
        <div className="footer-right">
          <div className="footer-brand">
            <img 
              src="/itri-logo.png" 
              alt="工業技術研究院" 
              className="footer-logo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="footer-logo-placeholder" style={{ display: 'none' }}>
              <span>工業技術研究院</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
