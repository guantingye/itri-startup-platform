import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ModuleNav from './components/common/ModuleNav';
import Overview from './components/modules/Overview';
import MarketStrategy from './components/modules/MarketStrategy';
import ResourceSupport from './components/modules/ResourceSupport';
import FundingSupport from './components/modules/FundingSupport';
import ExpertTalent from './components/modules/ExpertTalent';
import OrderCooperation from './components/modules/OrderCooperation';
import MemberZone from './components/modules/member/MemberZone';
import MemberSubmit from './components/modules/member/MemberSubmit';
import MarketStrategySubmit from './components/modules/member/MarketStrategySubmit';
import './App.css';

function App() {
  const [activeModule, setActiveModule] = useState('overview');
  const { t } = useTranslation();

  const handleModuleChange = (moduleId) => {
    setActiveModule(moduleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'overview':
        return <Overview />;
      case 'market-strategy':
        return <MarketStrategy />;
      case 'resource-support':
        return <ResourceSupport />;
      case 'funding-support':
        return <FundingSupport />;
      case 'expert-talent':
        return <ExpertTalent />;
      case 'order-cooperation':
        return <OrderCooperation />;
      case 'member':
        return <MemberZone 
          onNavigateToSubmit={(type) => handleModuleChange(type === 'strategy' ? 'member-submit-strategy' : 'member-submit-order')} 
        />;
      case 'member-submit-order':
        return <MemberSubmit onBack={() => handleModuleChange('member')} onSubmitSuccess={() => handleModuleChange('member')} />;
      case 'member-submit-strategy':
        return <MarketStrategySubmit onBack={() => handleModuleChange('member')} onSubmitSuccess={() => handleModuleChange('member')} />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="app">
      <Header onMemberClick={() => handleModuleChange('member')} />
      <ModuleNav 
        activeModule={activeModule}
        onModuleChange={handleModuleChange}
      />
      <main className="app-content">
        {renderActiveModule()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
