import React, { useState } from 'react';
import { FiCalendar, FiBarChart2, FiTrendingUp, FiUsers, FiDollarSign, FiShoppingBag } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import PageHeader from '../shared/PageHeader';
import TimelineBanner from '../common/TimelineBanner';
import { timelineData } from '../../data/mockData';
import './Overview.css';

/**
 * Overview Component - Advanced Professional Dashboard
 * Rich data visualization with Treemap, Bar Charts, and Line Charts
 */
const Overview = () => {
  const { t, i18n } = useTranslation();
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [hoveredBar, setHoveredBar] = useState(null);
  const [hoveredSeries, setHoveredSeries] = useState(null);
  const [hoveredDataPoint, setHoveredDataPoint] = useState(null);
  const currentLang = i18n.language;

  // Main statistics
  const mainStatistics = [
    { 
      id: 'opportunities', 
      label: { zh: '合作機會總數', en: 'Total Opportunities' },
      value: 156, 
      change: '+12%', 
      changeType: 'positive', 
      icon: FiShoppingBag 
    },
    { 
      id: 'programs', 
      label: { zh: '進行中計畫', en: 'Ongoing Programs' },
      value: 24, 
      change: '+8%', 
      changeType: 'positive', 
      icon: FiBarChart2 
    },
    { 
      id: 'experts', 
      label: { zh: '專業顧問', en: 'Expert Advisors' },
      value: 89, 
      change: '+15%', 
      changeType: 'positive', 
      icon: FiUsers 
    },
    { 
      id: 'funding', 
      label: { zh: '融資方案', en: 'Funding Options' },
      value: 42, 
      change: '+20%', 
      changeType: 'positive', 
      icon: FiDollarSign 
    }
  ];

  // Application field distribution (Treemap data)
  const fieldDistribution = [
    { 
      field: { zh: '醫療保健', en: 'Health Care' }, 
      count: 19, 
      percentage: 15.2, 
      color: '#00D9D9' 
    },
    { 
      field: { zh: '硬體', en: 'Hardware' }, 
      count: 10, 
      percentage: 8.0, 
      color: '#FFD700' 
    },
    { 
      field: { zh: '能源', en: 'Energy' }, 
      count: 10, 
      percentage: 8.0, 
      color: '#00D9C4' 
    },
    { 
      field: { zh: '人工智慧 (AI)', en: 'Artificial Intelligence (AI)' }, 
      count: 9, 
      percentage: 7.2, 
      color: '#FF9A56' 
    },
    { 
      field: { zh: '食品飲料', en: 'Food and Beverage' }, 
      count: 8, 
      percentage: 6.4, 
      color: '#B8B8FF' 
    },
    { 
      field: { zh: '製造業', en: 'Manufacturing' }, 
      count: 8, 
      percentage: 6.4, 
      color: '#9ABEFF' 
    },
    { 
      field: { zh: '專業服務', en: 'Professional Services' }, 
      count: 7, 
      percentage: 5.6, 
      color: '#D4E157' 
    },
    { 
      field: { zh: '農業', en: 'Agriculture and Farming' }, 
      count: 5, 
      percentage: 4.0, 
      color: '#FFB86C' 
    },
    { 
      field: { zh: '房地產', en: 'Real Estate' }, 
      count: 5, 
      percentage: 4.0, 
      color: '#FFB3D9' 
    },
    { 
      field: { zh: '生物科技', en: 'Biotechnology' }, 
      count: 4, 
      percentage: 3.2, 
      color: '#FFB3E6' 
    }
  ];

  // Investment participation (Bar chart data)
  const investmentParticipation = [
    { 
      type: { zh: '企業/企業創投', en: 'Corporate/CVC' }, 
      count: 2841, 
      color: '#00ABEB' 
    },
    { 
      type: { zh: '創投', en: 'VC' }, 
      count: 1450, 
      color: '#00ABEB' 
    },
    { 
      type: { zh: '國發基金', en: 'National Fund' }, 
      count: 594, 
      color: '#00ABEB' 
    },
    { 
      type: { zh: '海外投資人', en: 'Foreign Investors' }, 
      count: 445, 
      color: '#00ABEB' 
    }
  ];

  // Investor type trend (Line chart data)
  const investorTrend = {
    years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    series: [
      {
        name: { zh: '企業/企業創投', en: 'Corporate/CVC' },
        color: '#00ABEB',
        data: [176, 195, 184, 189, 250, 254, 307, 353, 432, 428]
      },
      {
        name: { zh: '創投', en: 'VC' },
        color: '#6366F1',
        data: [97, 129, 115, 134, 190, 130, 177, 161, 156, 133]
      },
      {
        name: { zh: '國發基金', en: 'National Fund' },
        color: '#10B981',
        data: [39, 37, 22, 65, 86, 69, 64, 92, 63, 82]
      },
      {
        name: { zh: '海外投資人', en: 'Foreign Investors' },
        color: '#F59E0B',
        data: [39, 37, 22, 35, 51, 35, 64, 61, 63, 26]
      }
    ]
  };

  // Recent activities
  const recentActivities = [
    { 
      date: '2025-03-15', 
      title: { zh: 'A+早期新創補助計畫 3/31 截止', en: 'A+ Early Startup Grant Deadline 3/31' },
      category: { zh: '資源補助', en: 'Resource Support' },
      priority: 'high' 
    },
    { 
      date: '2025-03-10', 
      title: { zh: '新增 5 個國際合作機會', en: '5 New International Collaboration Opportunities' },
      category: { zh: '訂單合作', en: 'Order Cooperation' },
      priority: 'normal' 
    },
    { 
      date: '2025-03-05', 
      title: { zh: 'SBIR 計畫開放申請', en: 'SBIR Program Application Open' },
      category: { zh: '資源補助', en: 'Resource Support' },
      priority: 'normal' 
    },
    { 
      date: '2025-03-01', 
      title: { zh: '新增 8 位產業專家顧問', en: '8 New Industry Expert Advisors' },
      category: { zh: '專家人才', en: 'Expert Talent' },
      priority: 'normal' 
    },
    { 
      date: '2025-02-28', 
      title: { zh: '創投媒合會報名中', en: 'VC Matching Event Registration Open' },
      category: { zh: '資金支持', en: 'Funding Support' },
      priority: 'normal' 
    }
  ];

  return (
    <div className="overview-page">
      <PageHeader
        icon={FiBarChart2}
        title={t('modules.overview.title')}
        subtitle={t('overview.description')}
        actions={
          <button 
            className="btn btn-outline"
            onClick={() => setIsTimelineOpen(true)}
          >
            <FiCalendar size={18} />
            {t('overview.viewTimeline')}
          </button>
        }
      />

      <div className="overview-container">
        {/* Key Metrics Grid */}
        <section className="metrics-section">
          <div className="metrics-grid">
            {mainStatistics.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.id} className="metric-card">
                  <div className="metric-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="metric-content">
                    <div className="metric-label">
                      {currentLang === 'en' ? stat.label.en : stat.label.zh}
                    </div>
                    <div className="metric-value">{stat.value}</div>
                    <div className={`metric-change ${stat.changeType}`}>
                      <FiTrendingUp size={14} />
                      {stat.change}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Application Field Distribution - Treemap (Two Rows) */}
        <section className="chart-section full-width">
          <h3 className="section-title">
            {currentLang === 'en' ? 'Application Field Distribution' : '應用領域分布'}
          </h3>
          <div className="treemap-wrapper">
            {/* First Row */}
            <div className="treemap-row">
              {fieldDistribution.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  className="treemap-block"
                  style={{
                    backgroundColor: item.color,
                    flex: item.percentage
                  }}
                >
                  <div className="treemap-content">
                    <div className="treemap-field">
                      {currentLang === 'en' ? item.field.en : item.field.zh}
                    </div>
                    <div className="treemap-stats">
                      <span className="treemap-count">{item.count}</span>
                      <span className="treemap-percentage">({item.percentage}%)</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Second Row */}
            <div className="treemap-row">
              {fieldDistribution.slice(5).map((item, index) => (
                <div
                  key={index + 5}
                  className="treemap-block"
                  style={{
                    backgroundColor: item.color,
                    flex: item.percentage
                  }}
                >
                  <div className="treemap-content">
                    <div className="treemap-field">
                      {currentLang === 'en' ? item.field.en : item.field.zh}
                    </div>
                    <div className="treemap-stats">
                      <span className="treemap-count">{item.count}</span>
                      <span className="treemap-percentage">({item.percentage}%)</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Participation - Bar Chart with Interaction */}
        <section className="chart-section">
          <h3 className="section-title">
            {currentLang === 'en' ? 'Investment Participation' : '參與投資情況'}
          </h3>
          <div className="bar-chart-container">
            {investmentParticipation.map((item, index) => {
              const maxValue = Math.max(...investmentParticipation.map(i => i.count));
              const barHeight = (item.count / maxValue) * 100;
              const isHovered = hoveredBar === index;
              
              return (
                <div 
                  key={index} 
                  className="bar-chart-item"
                  onMouseEnter={() => setHoveredBar(index)}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  <div className="bar-wrapper">
                    <div 
                      className={`bar-fill ${isHovered ? 'hovered' : ''}`}
                      style={{ 
                        height: `${barHeight}%`,
                        backgroundColor: item.color 
                      }}
                    >
                      <span className="bar-value">{item.count.toLocaleString()}</span>
                    </div>
                    {isHovered && (
                      <div className="bar-tooltip">
                        <div className="tooltip-title">
                          {currentLang === 'en' ? item.type.en : item.type.zh}
                        </div>
                        <div className="tooltip-value">
                          {currentLang === 'en' ? 'Count' : '參與件數'}: <strong>{item.count.toLocaleString()}</strong>
                        </div>
                        <div className="tooltip-percentage">
                          {currentLang === 'en' ? 'Percentage' : '占比'}: <strong>{((item.count / investmentParticipation.reduce((sum, i) => sum + i.count, 0)) * 100).toFixed(1)}%</strong>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="bar-label">
                    {currentLang === 'en' ? item.type.en : item.type.zh}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Investor Type Trend - Line Chart with Interaction */}
        <section className="chart-section">
          <h3 className="section-title">
            {currentLang === 'en' ? 'Historical Investment Cases by Investor Type' : '歷年累計投資件數-依投資者類型'}
          </h3>
          <div className="line-chart-container">
            <div className="line-chart-content">
              <svg className="line-chart-svg" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
                {/* Grid lines */}
                {[0, 100, 200, 300, 400, 500].map((value, i) => (
                  <g key={i}>
                    <line
                      x1="50"
                      y1={250 - (value / 500) * 200}
                      x2="750"
                      y2={250 - (value / 500) * 200}
                      stroke="#E5E7EB"
                      strokeWidth="1"
                    />
                    <text
                      x="35"
                      y={250 - (value / 500) * 200 + 5}
                      fill="#6B7280"
                      fontSize="12"
                      textAnchor="end"
                    >
                      {value}
                    </text>
                  </g>
                ))}

                {/* Lines for each series */}
                {investorTrend.series.map((series, seriesIndex) => {
                  const points = series.data.map((value, i) => {
                    const x = 50 + (i * 70);
                    const y = 250 - (value / 500) * 200;
                    return `${x},${y}`;
                  }).join(' ');
                  const isSeriesHovered = hoveredSeries === seriesIndex;

                  return (
                    <g 
                      key={seriesIndex}
                      onMouseEnter={() => setHoveredSeries(seriesIndex)}
                      onMouseLeave={() => setHoveredSeries(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      <polyline
                        points={points}
                        fill="none"
                        stroke={series.color}
                        strokeWidth={isSeriesHovered ? "3" : "2"}
                        opacity={hoveredSeries === null || isSeriesHovered ? 1 : 0.3}
                        style={{ transition: 'all 0.2s' }}
                      />
                      {series.data.map((value, i) => {
                        const x = 50 + (i * 70);
                        const y = 250 - (value / 500) * 200;
                        const dataPointKey = `${seriesIndex}-${i}`;
                        const isPointHovered = hoveredDataPoint === dataPointKey;
                        
                        return (
                          <g key={i}>
                            <circle
                              cx={x}
                              cy={y}
                              r={isPointHovered ? "6" : "4"}
                              fill={series.color}
                              opacity={hoveredSeries === null || isSeriesHovered ? 1 : 0.3}
                              style={{ 
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                              }}
                              onMouseEnter={(e) => {
                                setHoveredDataPoint(dataPointKey);
                                setHoveredSeries(seriesIndex);
                              }}
                              onMouseLeave={() => {
                                setHoveredDataPoint(null);
                              }}
                            />
                            {i === series.data.length - 1 && !isPointHovered && (
                              <text
                                x={x}
                                y={y - 10}
                                fill={series.color}
                                fontSize="12"
                                textAnchor="middle"
                                fontWeight="600"
                                opacity={hoveredSeries === null || isSeriesHovered ? 1 : 0.3}
                              >
                                {value}
                              </text>
                            )}
                          </g>
                        );
                      })}
                    </g>
                  );
                })}

                {/* X-axis labels */}
                {investorTrend.years.map((year, i) => (
                  <text
                    key={i}
                    x={50 + (i * 70)}
                    y="275"
                    fill="#6B7280"
                    fontSize="12"
                    textAnchor="middle"
                  >
                    {year}
                  </text>
                ))}
              </svg>

              {/* Hover Tooltip */}
              {hoveredDataPoint && (
                <div className="line-chart-tooltip">
                  {(() => {
                    const [seriesIdx, yearIdx] = hoveredDataPoint.split('-').map(Number);
                    const series = investorTrend.series[seriesIdx];
                    const year = investorTrend.years[yearIdx];
                    const value = series.data[yearIdx];
                    
                    return (
                      <>
                        <div className="tooltip-year">{year}</div>
                        <div className="tooltip-series-name" style={{ color: series.color }}>
                          {currentLang === 'en' ? series.name.en : series.name.zh}
                        </div>
                        <div className="tooltip-value">
                          {currentLang === 'en' ? 'Cases' : '件數'}: <strong>{value}</strong>
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}

              {/* Legend */}
              <div className="line-chart-legend">
                {investorTrend.series.map((series, index) => (
                  <div 
                    key={index} 
                    className={`legend-item ${hoveredSeries === index ? 'active' : ''} ${hoveredSeries !== null && hoveredSeries !== index ? 'dimmed' : ''}`}
                    onMouseEnter={() => setHoveredSeries(index)}
                    onMouseLeave={() => setHoveredSeries(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div 
                      className="legend-color" 
                      style={{ backgroundColor: series.color }}
                    />
                    <span className="legend-label">
                      {currentLang === 'en' ? series.name.en : series.name.zh}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activities */}
        <section className="activities-section full-width">
          <h3 className="section-title">
            {currentLang === 'en' ? 'Recent Updates' : '最新動態'}
          </h3>
          <div className="activities-list">
            {recentActivities.map((activity, index) => (
              <div key={index} className={`activity-row ${activity.priority === 'high' ? 'priority' : ''}`}>
                <div className="activity-date">{activity.date}</div>
                <div className="activity-content">
                  <div className="activity-title">
                    {currentLang === 'en' ? activity.title.en : activity.title.zh}
                  </div>
                  <div className="activity-category">
                    {currentLang === 'en' ? activity.category.en : activity.category.zh}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <TimelineBanner 
        isOpen={isTimelineOpen}
        onClose={() => setIsTimelineOpen(false)}
        timelineData={timelineData}
        year="FY115"
      />
    </div>
  );
};

export default Overview;
