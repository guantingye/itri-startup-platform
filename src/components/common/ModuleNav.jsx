import React from 'react';
import { 
  FiPieChart,
  FiTrendingUp, 
  FiGift, 
  FiDollarSign, 
  FiUsers, 
  FiShoppingBag 
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './ModuleNav.css';

/**
 * ModuleNav Component
 * Combined title and module navigation in one banner
 * 
 * Props:
 * - activeModule: string - currently active module ID
 * - onModuleChange: function - callback when module is selected
 * 
 * Features:
 * - Six modules including overview
 * - Unified layout with main title
 * - Icon + title + subtitle for each module
 * - Responsive horizontal scrolling
 */
const ModuleNav = ({ activeModule, onModuleChange }) => {
  const { t } = useTranslation();

  const modules = [
    {
      id: 'overview',
      icon: FiPieChart,
      titleKey: 'modules.overview.title',
      subtitleKey: 'modules.overview.subtitle'
    },
    {
      id: 'market-strategy',
      icon: FiTrendingUp,
      titleKey: 'modules.marketStrategy.title',
      subtitleKey: 'modules.marketStrategy.subtitle'
    },
    {
      id: 'resource-support',
      icon: FiGift,
      titleKey: 'modules.resourceSupport.title',
      subtitleKey: 'modules.resourceSupport.subtitle'
    },
    {
      id: 'funding-support',
      icon: FiDollarSign,
      titleKey: 'modules.fundingSupport.title',
      subtitleKey: 'modules.fundingSupport.subtitle'
    },
    {
      id: 'expert-talent',
      icon: FiUsers,
      titleKey: 'modules.expertTalent.title',
      subtitleKey: 'modules.expertTalent.subtitle'
    },
    {
      id: 'order-cooperation',
      icon: FiShoppingBag,
      titleKey: 'modules.orderCooperation.title',
      subtitleKey: 'modules.orderCooperation.subtitle'
    }
  ];

  return (
    <nav className="module-nav" role="navigation" aria-label="Module navigation">
      <div className="module-nav-container">
        {/* Main Title */}
        <div className="module-nav-title">
          <h2>{t('app.title')}</h2>
        </div>

        {/* Module Tabs */}
        <div className="module-tabs">
          {modules.map((module) => {
            const Icon = module.icon;
            const isActive = activeModule === module.id;
            
            return (
              <button
                key={module.id}
                className={`module-tab ${isActive ? 'active' : ''}`}
                onClick={() => onModuleChange(module.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className="module-tab-icon">
                  <Icon size={20} />
                </div>
                <div className="module-tab-text">
                  <span className="module-tab-title">{t(module.titleKey)}</span>
                  <span className="module-tab-subtitle">{t(module.subtitleKey)}</span>
                </div>
                {isActive && <div className="module-tab-indicator" />}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default ModuleNav;
