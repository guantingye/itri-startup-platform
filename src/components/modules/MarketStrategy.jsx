import React, { useState, useEffect } from 'react';
import { FiTrendingUp, FiCalendar, FiTag, FiFileText, FiBarChart2, FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import PageHeader from '../shared/PageHeader';
import { marketStrategyData } from '../../data/mockData';
import { marketStrategyAPI } from '../../services/apiService';
import './MarketStrategy.css';

const MarketStrategy = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [apiStrategies, setApiStrategies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApiStrategies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndustry]);

  const fetchApiStrategies = async () => {
    setLoading(true);
    try {
      const response = await marketStrategyAPI.getAll({
        industry: selectedIndustry === 'all' ? undefined : selectedIndustry,
        status: 'approved'
      });
      setApiStrategies(response.data || []);
    } catch (err) {
      console.log('API 未啟動，僅顯示 mockData');
      setApiStrategies([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredMockData = selectedIndustry === 'all' 
    ? marketStrategyData 
    : marketStrategyData.filter(r => r.industry === selectedIndustry);

  const allReports = [...apiStrategies, ...filteredMockData];

  const industries = [
    { value: 'all', label: { zh: '全部產業', en: 'All Industries' } },
    { value: '電資通光', label: { zh: '電資通光', en: 'ICT & Optoelectronics' } },
    { value: '機電運輸', label: { zh: '機電運輸', en: 'Mechanical & Transportation' } },
    { value: '生技醫材', label: { zh: '生技醫材', en: 'Biotechnology & Medical' } },
    { value: '能源環境', label: { zh: '能源環境', en: 'Energy & Environment' } },
    { value: '服務創新', label: { zh: '服務創新', en: 'Service Innovation' } }
  ];

  return (
    <div className="market-strategy-page">
      <PageHeader
        icon={FiTrendingUp}
        title={currentLang === 'en' ? 'Market Strategy' : '市場策略'}
        subtitle={currentLang === 'en' 
          ? 'International Business Intelligence & Market Insights' 
          : '國際商業週報與市場洞察'}
        actions={
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-value">{allReports.length}</span>
              <span className="stat-label">
                {currentLang === 'en' ? 'Reports' : '篇報告'}
              </span>
            </div>
            {apiStrategies.length > 0 && (
              <div className="stat-item">
                <span className="stat-value">{apiStrategies.length}</span>
                <span className="stat-label">
                  {currentLang === 'en' ? 'New' : '新增'}
                </span>
              </div>
            )}
          </div>
        }
      />

      <div className="strategy-container">
        <div className="industry-filter">
          {industries.map((ind) => (
            <button
              key={ind.value}
              className={`filter-btn ${selectedIndustry === ind.value ? 'active' : ''}`}
              onClick={() => setSelectedIndustry(ind.value)}
            >
              {currentLang === 'en' ? ind.label.en : ind.label.zh}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="loading-message">
            {currentLang === 'en' ? 'Loading...' : '載入中...'}
          </div>
        ) : allReports.length === 0 ? (
          <div className="empty-message">
            {currentLang === 'en' ? 'No reports available' : '暫無報告'}
          </div>
        ) : (
          <div className="reports-list">
            {allReports.map((report, index) => (
              <article key={report.id || index} className="report-card">
                <header className="report-header">
                  <h2 className="report-title">
                    {currentLang === 'en' ? (report.titleEn || report.title) : report.title}
                  </h2>
                  <div className="report-meta">
                    <div className="meta-item">
                      <FiCalendar size={16} />
                      <span>{currentLang === 'en' ? 'Published' : '發布日期'}: {report.publishDate}</span>
                    </div>
                    <div className="meta-item">
                      <FiTag size={16} />
                      <span className="industry-badge">{report.industry}</span>
                    </div>
                  </div>
                  {report.tags && report.tags.length > 0 && (
                    <div className="report-tags">
                      {(currentLang === 'en' ? (report.tagsEn || report.tags) : report.tags).map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </header>

                <section className="report-section">
                  <h3 className="section-title">
                    <FiFileText size={20} />
                    {currentLang === 'en' ? 'Executive Summary' : '重點摘要'}
                  </h3>
                  <p className="summary-text">
                    {report.summary?.zh || report.summary?.en || report.summary || ''}
                  </p>
                </section>

                {report.keyInsights && report.keyInsights.length > 0 && (
                  <section className="report-section">
                    <h3 className="section-title">
                      <FiBarChart2 size={20} />
                      {currentLang === 'en' ? 'Key Insights' : '觀察亮點'}
                    </h3>
                    <div className="insights-grid">
                      {report.keyInsights.map((insight, idx) => (
                        <div key={idx} className="insight-card">
                          <h4 className="insight-title">
                            {currentLang === 'en' ? (insight.titleEn || insight.title) : insight.title}
                          </h4>
                          <p className="insight-content">
                            {currentLang === 'en' ? (insight.contentEn || insight.content) : insight.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {report.keyCharts && report.keyCharts.length > 0 && (
                  <section className="report-section">
                    <h3 className="section-title">
                      <FiBarChart2 size={20} />
                      {currentLang === 'en' ? 'Key Charts' : '關鍵圖表'}
                    </h3>
                    <div className="charts-grid">
                      {report.keyCharts.map((chart, idx) => (
                        <div key={idx} className="chart-item">
                          <img src={chart.imageUrl} alt={chart.caption} className="chart-image" />
                          <p className="chart-caption">
                            {currentLang === 'en' ? (chart.captionEn || chart.caption) : chart.caption}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {report.strategies && report.strategies.length > 0 && (
                  <section className="report-section">
                    <h3 className="section-title">
                      <FiFileText size={20} />
                      {currentLang === 'en' ? 'Strategic Recommendations' : '策略建議'}
                    </h3>
                    <ul className="strategies-list">
                      {report.strategies.map((strategy, idx) => (
                        <li key={idx} className="strategy-item">
                          <div className="strategy-number">{idx + 1}</div>
                          <p className="strategy-text">
                            {currentLang === 'en' ? (strategy.en || strategy.zh) : strategy.zh}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {report.sources && report.sources.length > 0 && (
                  <section className="report-section sources-section">
                    <h3 className="section-title">
                      <FiExternalLink size={20} />
                      {currentLang === 'en' ? 'Data Sources' : '資料來源'}
                    </h3>
                    <div className="sources-list">
                      {report.sources.map((source, idx) => (
                        <div key={idx} className="source-item">
                          <FiExternalLink size={14} />
                          <span className="source-name">{source}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {report.relatedTopics && report.relatedTopics.length > 0 && (
                  <div className="related-topics">
                    <span className="topics-label">
                      {currentLang === 'en' ? 'Related:' : '相關主題：'}
                    </span>
                    {report.relatedTopics.map((topic, idx) => (
                      <span key={idx} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketStrategy;
