import React, { useState } from 'react';
import { FiBell, FiSettings, FiUser, FiGlobe } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './Header.css';

/**
 * Header Component
 * Main navigation header with logo, title, language switcher, and user actions
 * 
 * Features:
 * - Multi-language support (zh/en)
 * - User profile and settings
 * - Notification system
 * - Responsive design
 */
const Header = ({ onMemberClick }) => {
  const { t, i18n } = useTranslation();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const currentLanguage = i18n.language;

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setShowLanguageMenu(false);
  };

  const handleNotificationClick = () => {
    console.log('Notifications clicked');
    // TODO: Implement notification panel
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
    // TODO: Implement settings panel
  };

  const handleProfileClick = () => {
    if (onMemberClick) {
      onMemberClick();
    } else {
      console.log('Profile clicked');
    }
  };

  return (
    <header className="app-header">
      <div className="header-container">
        {/* Left Section - Logo and Title */}
        <div className="header-left">
          <div className="header-logo">
            <img 
              src="/logo-itri.svg" 
              alt="ITRI Logo" 
              className="logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="logo-placeholder">
              <span>ITRI</span>
            </div>
          </div>
          <h1 className="header-title">{t('app.goToGlobalMarket')}</h1>
        </div>

        {/* Right Section - User Actions */}
        <div className="header-right">
          {/* Language Switcher */}
          <div className="language-switcher">
            <button
              className="header-icon-btn"
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              aria-label={t('header.language')}
            >
              <FiGlobe size={20} />
              <span className="language-text">{currentLanguage.toUpperCase()}</span>
            </button>
            
            {showLanguageMenu && (
              <div className="language-menu">
                <button
                  className={`language-option ${currentLanguage === 'zh' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('zh')}
                >
                  <span className="language-flag">🇹🇼</span>
                  <span>繁體中文</span>
                </button>
                <button
                  className={`language-option ${currentLanguage === 'en' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('en')}
                >
                  <span className="language-flag">🇺🇸</span>
                  <span>English</span>
                </button>
              </div>
            )}
          </div>

          {/* Notifications */}
          <button
            className="header-icon-btn"
            onClick={handleNotificationClick}
            aria-label={t('header.notifications')}
          >
            <FiBell size={20} />
            <span className="notification-badge">3</span>
          </button>
          
          {/* Settings */}
          <button
            className="header-icon-btn"
            onClick={handleSettingsClick}
            aria-label={t('header.settings')}
          >
            <FiSettings size={20} />
          </button>
          
          {/* Profile / Member Zone */}
          <button
            className="header-profile-btn"
            onClick={handleProfileClick}
            aria-label={currentLanguage === 'en' ? 'Member Zone' : '會員專區'}
            title={currentLanguage === 'en' ? 'Member Zone' : '會員專區'}
          >
            <FiUser size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
