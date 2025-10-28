import React, { useState, useEffect } from 'react';
import { FiUser, FiMail, FiBriefcase, FiMapPin, FiPhone, FiPlus, FiTrash2, FiClock, FiShoppingCart, FiTrendingUp, FiFilter } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../shared/PageHeader';
import memberService from '../../../services/memberService';
import './MemberZone.css';

const MemberZone = ({ onNavigateToSubmit }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [memberInfo, setMemberInfo] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const info = memberService.getMemberInfo();
    setMemberInfo(info);
    const subs = memberService.getSubmissions();
    setSubmissions(subs);
  };

  const handleDelete = (id) => {
    if (window.confirm(currentLang === 'en' ? 'Delete this submission?' : '確定要刪除此提交？')) {
      memberService.deleteSubmission(id);
      loadData();
    }
  };

  const getFilteredSubmissions = () => {
    if (filterType === 'all') return submissions;
    return submissions.filter(s => s.type === filterType);
  };

  const getTypeLabel = (type) => {
    if (type === 'order') {
      return currentLang === 'en' ? 'Order' : '訂單';
    }
    return currentLang === 'en' ? 'Strategy' : '策略';
  };

  const getTypeClass = (type) => {
    return type === 'order' ? 'type-order' : 'type-strategy';
  };

  if (!memberInfo) return <div>Loading...</div>;

  return (
    <div className="member-zone-page">
      <PageHeader
        icon={FiUser}
        title={currentLang === 'en' ? 'Member Zone' : '會員專區'}
        subtitle={currentLang === 'en' ? 'Manage your profile and submissions' : '管理您的資料和提交內容'}
        actions={
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn btn-outline" onClick={() => onNavigateToSubmit('order')}>
              <FiShoppingCart size={18} />
              {currentLang === 'en' ? 'New Order' : '新增訂單'}
            </button>
            <button className="btn btn-primary" onClick={() => onNavigateToSubmit('strategy')}>
              <FiTrendingUp size={18} />
              {currentLang === 'en' ? 'New Strategy' : '新增策略'}
            </button>
          </div>
        }
      />

      <div className="member-container">
        {/* Member Info Card */}
        <section className="member-info-card">
          <h3 className="card-title">
            {currentLang === 'en' ? 'Company Information' : '會員資訊'}
          </h3>
          <div className="info-grid">
            <div className="info-item">
              <FiBriefcase className="info-icon" />
              <div className="info-content">
                <span className="info-label">
                  {currentLang === 'en' ? 'MemberName' : '會員名稱'}
                </span>
                <span className="info-value">
                  {currentLang === 'en' ? memberInfo.nameEn : memberInfo.name}
                </span>
              </div>
            </div>
            <div className="info-item">
              <FiMail className="info-icon" />
              <div className="info-content">
                <span className="info-label">
                  {currentLang === 'en' ? 'Email' : '電子郵件'}
                </span>
                <span className="info-value">{memberInfo.email}</span>
              </div>
            </div>
            <div className="info-item">
              <FiPhone className="info-icon" />
              <div className="info-content">
                <span className="info-label">
                  {currentLang === 'en' ? 'Phone' : '電話'}
                </span>
                <span className="info-value">{memberInfo.phone}</span>
              </div>
            </div>
            <div className="info-item">
              <FiBriefcase className="info-icon" />
              <div className="info-content">
                <span className="info-label">
                  {currentLang === 'en' ? 'Industry' : '產業類別'}
                </span>
                <span className="info-value">{memberInfo.industry}</span>
              </div>
            </div>
            <div className="info-item">
              <FiMapPin className="info-icon" />
              <div className="info-content">
                <span className="info-label">
                  {currentLang === 'en' ? 'Location' : '地點'}
                </span>
                <span className="info-value">{memberInfo.location}</span>
              </div>
            </div>
            <div className="info-item">
              <FiClock className="info-icon" />
              <div className="info-content">
                <span className="info-label">
                  {currentLang === 'en' ? 'Member Since' : '註冊日期'}
                </span>
                <span className="info-value">{memberInfo.memberSince}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Submissions History */}
        <section className="submissions-section">
          <div className="submissions-header">
            <h3 className="card-title">
              {currentLang === 'en' ? 'Submission History' : '提交歷史'}
            </h3>
            <div className="type-filter">
              <button
                className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
                onClick={() => setFilterType('all')}
              >
                <FiFilter size={16} />
                {currentLang === 'en' ? 'All' : '全部'}
              </button>
              <button
                className={`filter-btn ${filterType === 'order' ? 'active' : ''}`}
                onClick={() => setFilterType('order')}
              >
                <FiShoppingCart size={16} />
                {currentLang === 'en' ? 'Orders' : '訂單'}
              </button>
              <button
                className={`filter-btn ${filterType === 'strategy' ? 'active' : ''}`}
                onClick={() => setFilterType('strategy')}
              >
                <FiTrendingUp size={16} />
                {currentLang === 'en' ? 'Strategies' : '策略'}
              </button>
            </div>
          </div>
          {getFilteredSubmissions().length === 0 ? (
            <div className="empty-state">
              <p>
                {filterType === 'all' 
                  ? (currentLang === 'en' ? 'No submissions yet' : '尚無提交記錄')
                  : (currentLang === 'en' ? `No ${filterType} submissions` : `尚無${getTypeLabel(filterType)}記錄`)}
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '16px' }}>
                <button className="btn btn-outline" onClick={() => onNavigateToSubmit('order')}>
                  {currentLang === 'en' ? 'Create Order' : '創建訂單'}
                </button>
                <button className="btn btn-outline" onClick={() => onNavigateToSubmit('strategy')}>
                  {currentLang === 'en' ? 'Create Strategy' : '創建策略'}
                </button>
              </div>
            </div>
          ) : (
            <div className="submissions-list">
              {getFilteredSubmissions().map((sub) => (
                <div key={sub.id} className="submission-card">
                  <div className="submission-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                      <h4>{sub.title}</h4>
                      <span className={`type-badge ${getTypeClass(sub.type || 'order')}`}>
                        {getTypeLabel(sub.type || 'order')}
                      </span>
                    </div>
                    <button 
                      className="btn-icon-delete"
                      onClick={() => handleDelete(sub.id)}
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                  <div className="submission-meta">
                    <span className="meta-item">
                      {currentLang === 'en' ? 'Posted' : '發布'}: {new Date(sub.postDate || sub.publishDate).toLocaleDateString()}
                    </span>
                    {sub.deadline && (
                      <span className="meta-item">
                        {currentLang === 'en' ? 'Deadline' : '截止'}: {new Date(sub.deadline).toLocaleDateString()}
                      </span>
                    )}
                    <span className={`status-badge ${sub.status}`}>
                      {currentLang === 'en' 
                        ? (sub.status === 'pending' ? 'Pending' : sub.status === 'approved' ? 'Approved' : 'Rejected')
                        : (sub.status === 'pending' ? '審核中' : sub.status === 'approved' ? '已通過' : '未通過')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default MemberZone;
