import React, { useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import PageHeader from '../shared/PageHeader';
import CollapsibleFilter from '../shared/CollapsibleFilter';
import './shared-module.css';

const ExpertTalent = () => {
  const { t, i18n } = useTranslation();
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(true);
  const currentLang = i18n.language;

  return (
    <div className="module-page">
      <CollapsibleFilter
        isCollapsed={isFilterCollapsed}
        onToggle={() => setIsFilterCollapsed(!isFilterCollapsed)}
      />
      <PageHeader
        icon={FiUsers}
        title={t('modules.expertTalent.title')}
        subtitle={t('modules.expertTalent.subtitle')}
      />
      <div className="module-container">
        <div className="building-notice">
          <div className="building-icon">🚧</div>
          <h3>{currentLang === 'en' ? 'Under Construction' : '功能建置中'}</h3>
          <p>{currentLang === 'en' ? 'This feature page is under development. Stay tuned!' : '此功能頁面正在開發中，敬請期待'}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertTalent;
