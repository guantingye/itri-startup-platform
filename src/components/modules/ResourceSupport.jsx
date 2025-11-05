import React, { useState, useEffect } from 'react';
import { FiDollarSign, FiMapPin, FiCalendar, FiTag, FiExternalLink, FiFilter, FiClock } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import PageHeader from '../shared/PageHeader';
import CollapsibleFilter from '../shared/CollapsibleFilter';
import { fundingSupportData } from '../../data/mockData';
import { fundingSupportAPI } from '../../services/apiService';
import './ResourceSupport.css';

const ResourceSupport = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedTimeRange, setSelectedTimeRange] = useState('all');
  const [apiPrograms, setApiPrograms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApiPrograms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRegion, selectedIndustry, selectedTimeRange]);

  const fetchApiPrograms = async () => {
    setLoading(true);
    try {
      const response = await fundingSupportAPI.getAll({
        region: selectedRegion === 'all' ? undefined : selectedRegion,
        industry: selectedIndustry === 'all' ? undefined : selectedIndustry,
        status: 'active'
      });
      setApiPrograms(response.data || []);
    } catch (err) {
      console.log('API 未啟動，僅顯示 mockData');
      setApiPrograms([]);
    } finally {
      setLoading(false);
    }
  };

  const regions = [
    { value: 'all', label: { zh: '全台灣', en: 'All Taiwan' } },
    { value: '全國', label: { zh: '全國', en: 'National' } },
    { value: '台北市', label: { zh: '台北市', en: 'Taipei City' } },
    { value: '新北市', label: { zh: '新北市', en: 'New Taipei' } },
    { value: '桃園市', label: { zh: '桃園市', en: 'Taoyuan' } },
    { value: '台中市', label: { zh: '台中市', en: 'Taichung' } },
    { value: '台南市', label: { zh: '台南市', en: 'Tainan' } },
    { value: '高雄市', label: { zh: '高雄市', en: 'Kaohsiung' } }
  ];

  const industries = [
    { value: 'all', label: { zh: '全部產業', en: 'All Industries' } },
    { value: '電資通光', label: { zh: '電資通光', en: 'ICT & Optoelectronics' } },
    { value: '機電運輸', label: { zh: '機電運輸', en: 'Mechanical & Transportation' } },
    { value: '生技醫材', label: { zh: '生技醫材', en: 'Biotechnology & Medical' } },
    { value: '能源環境', label: { zh: '能源環境', en: 'Energy & Environment' } },
    { value: '服務創新', label: { zh: '服務創新', en: 'Service Innovation' } },
    { value: '文化創意', label: { zh: '文化創意', en: 'Cultural & Creative' } }
  ];

  const timeRanges = [
    { value: 'all', label: { zh: '不限時間', en: 'All Time' } },
    { value: 'active', label: { zh: '申請中', en: 'Now Accepting' } },
    { value: 'upcoming', label: { zh: '即將開放', en: 'Coming Soon' } },
    { value: 'year-round', label: { zh: '全年開放', en: 'Year Round' } }
  ];

  // 篩選邏輯
  const filterPrograms = (programs) => {
    return programs.filter(program => {
      const matchRegion = selectedRegion === 'all' || program.region === selectedRegion;
      const matchIndustry = selectedIndustry === 'all' || program.industries.includes(selectedIndustry);
      const matchTime = selectedTimeRange === 'all' || program.applicationType === selectedTimeRange;
      return matchRegion && matchIndustry && matchTime;
    });
  };

  const filteredMockData = filterPrograms(fundingSupportData);
  const allPrograms = [...apiPrograms, ...filteredMockData];

  return (
    <div className="resource-support-page">
      <PageHeader
        icon={FiDollarSign}
        title={currentLang === 'en' ? 'Resource Support' : '資源補助'}
        subtitle={currentLang === 'en' 
          ? 'Taiwan Startup Funding Programs & Government Subsidies' 
          : '台灣新創補助計畫與政府資源'}
        actions={
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-value">{allPrograms.length}</span>
              <span className="stat-label">
                {currentLang === 'en' ? 'Programs' : '項補助'}
              </span>
            </div>
            {apiPrograms.length > 0 && (
              <div className="stat-item">
                <span className="stat-value">{apiPrograms.length}</span>
                <span className="stat-label">
                  {currentLang === 'en' ? 'New' : '新增'}
                </span>
              </div>
            )}
          </div>
        }
      />

      <div className="funding-container">
        <CollapsibleFilter
          isCollapsed={isFilterCollapsed}
          onToggle={() => setIsFilterCollapsed(!isFilterCollapsed)}
        >
          <div className="filter-sections">
            <div className="filter-section">
              <h4 className="filter-title">
                <FiMapPin size={16} />
                {currentLang === 'en' ? 'Region' : '地區'}
              </h4>
              <div className="filter-options">
                {regions.map((region) => (
                  <button
                    key={region.value}
                    className={`filter-btn ${selectedRegion === region.value ? 'active' : ''}`}
                    onClick={() => setSelectedRegion(region.value)}
                  >
                    {currentLang === 'en' ? region.label.en : region.label.zh}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h4 className="filter-title">
                <FiTag size={16} />
                {currentLang === 'en' ? 'Industry' : '產業領域'}
              </h4>
              <div className="filter-options">
                {industries.map((industry) => (
                  <button
                    key={industry.value}
                    className={`filter-btn ${selectedIndustry === industry.value ? 'active' : ''}`}
                    onClick={() => setSelectedIndustry(industry.value)}
                  >
                    {currentLang === 'en' ? industry.label.en : industry.label.zh}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h4 className="filter-title">
                <FiClock size={16} />
                {currentLang === 'en' ? 'Application Period' : '申請時間'}
              </h4>
              <div className="filter-options">
                {timeRanges.map((time) => (
                  <button
                    key={time.value}
                    className={`filter-btn ${selectedTimeRange === time.value ? 'active' : ''}`}
                    onClick={() => setSelectedTimeRange(time.value)}
                  >
                    {currentLang === 'en' ? time.label.en : time.label.zh}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </CollapsibleFilter>

        {loading ? (
          <div className="loading-message">
            {currentLang === 'en' ? 'Loading...' : '載入中...'}
          </div>
        ) : allPrograms.length === 0 ? (
          <div className="empty-message">
            <FiFilter size={48} />
            <h3>{currentLang === 'en' ? 'No Programs Found' : '無符合條件的補助計畫'}</h3>
            <p>{currentLang === 'en' ? 'Try adjusting your filters' : '請嘗試調整篩選條件'}</p>
          </div>
        ) : (
          <div className="programs-grid">
            {allPrograms.map((program, index) => (
              <article key={program.id || index} className="program-card">
                <div className="card-image-wrapper">
                  <img 
                    src={program.imageUrl} 
                    alt={currentLang === 'en' ? (program.titleEn || program.title) : program.title}
                    className="card-image"
                  />
                  <div className="image-overlay">
                    <span className="status-badge status-active">
                      {currentLang === 'en' 
                        ? (program.statusEn || program.status) 
                        : program.status}
                    </span>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="program-title">
                    {currentLang === 'en' 
                      ? (program.titleEn || program.title) 
                      : program.title}
                  </h3>

                  <div className="program-meta">
                    <div className="meta-item">
                      <FiMapPin size={14} />
                      <span>{currentLang === 'en' ? (program.regionEn || program.region) : program.region}</span>
                    </div>
                    <div className="meta-item">
                      <FiCalendar size={14} />
                      <span>{currentLang === 'en' ? 'Updated' : '更新'}: {program.updateDate}</span>
                    </div>
                  </div>

                  <div className="program-tags">
                    {program.industries.map((industry, idx) => (
                      <span key={idx} className="industry-tag">{industry}</span>
                    ))}
                  </div>

                  <p className="program-description">
                    {currentLang === 'en' 
                      ? (program.descriptionEn || program.description) 
                      : program.description}
                  </p>

                  <div className="program-details">
                    <div className="detail-row">
                      <span className="detail-label">
                        {currentLang === 'en' ? 'Amount' : '補助金額'}
                      </span>
                      <span className="detail-value highlight">
                        {currentLang === 'en' 
                          ? (program.amountEn || program.amount) 
                          : program.amount}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">
                        {currentLang === 'en' ? 'Organizer' : '主辦單位'}
                      </span>
                      <span className="detail-value">
                        {currentLang === 'en' 
                          ? (program.organizerEn || program.organizer) 
                          : program.organizer}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">
                        {currentLang === 'en' ? 'Application' : '申請方式'}
                      </span>
                      <span className="detail-value">
                        {currentLang === 'en' 
                          ? (program.applicationTypeEn || program.applicationType) 
                          : program.applicationType}
                      </span>
                    </div>
                  </div>

                  <a 
                    href={program.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="visit-button"
                  >
                    <FiExternalLink size={16} />
                    <span>{currentLang === 'en' ? 'Visit Website' : '前往官網'}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceSupport;
