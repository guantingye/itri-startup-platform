import React from 'react';
import './PageHeader.css';

/**
 * PageHeader Component
 * Unified header design for all module pages
 * 
 * Props:
 * - icon: React Icon component
 * - title: string - main title
 * - subtitle: string - descriptive subtitle
 * - actions: React node - optional action buttons
 */
const PageHeader = ({ icon: Icon, title, subtitle, actions }) => {
  return (
    <div className="page-header">
      <div className="page-header-content">
        <div className="page-header-left">
          {Icon && (
            <div className="page-header-icon">
              <Icon size={32} />
            </div>
          )}
          <div className="page-header-text">
            <h1 className="page-header-title">{title}</h1>
            {subtitle && (
              <p className="page-header-subtitle">{subtitle}</p>
            )}
          </div>
        </div>
        {actions && (
          <div className="page-header-actions">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
