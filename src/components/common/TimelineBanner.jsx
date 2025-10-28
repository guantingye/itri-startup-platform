import React, { useState } from 'react';
import { FiX, FiAlertCircle, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './TimelineBanner.css';

/**
 * TimelineBanner Component - Vertical Scrollable Timeline (v7.0)
 * Vertical timeline with scroll functionality
 */
const TimelineBanner = ({ isOpen, onClose, timelineData = [], year = 'FY115' }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  if (!isOpen) return null;

  // Sort events by date
  const sortedEvents = [...timelineData].sort((a, b) => {
    const dateA = new Date(`2025-${a.month.replace('月', '')}-${a.date || '01'}`);
    const dateB = new Date(`2025-${b.month.replace('月', '')}-${b.date || '01'}`);
    return dateA - dateB;
  });

  // Category labels
  const categoryLabels = {
    'all': { zh: '全部', en: 'All' },
    '申請': { zh: '申請', en: 'Application' },
    '說明會': { zh: '說明會', en: 'Briefing' },
    '截止': { zh: '截止', en: 'Deadline' },
    '活動': { zh: '活動', en: 'Event' },
    '審查': { zh: '審查', en: 'Review' }
  };

  // Get unique categories
  const categories = ['all', ...new Set(timelineData.map(e => e.category))];

  // Filter events
  const filteredEvents = selectedCategory === 'all' 
    ? sortedEvents 
    : sortedEvents.filter(e => e.category === selectedCategory);

  // Check if event is important
  const isImportant = (event) => {
    return event.category === '截止' || event.priority === 'high' || event.important === true;
  };

  return (
    <div className="timeline-overlay">
      <div className="timeline-modal vertical">
        {/* Header */}
        <div className="timeline-modal-header">
          <div className="timeline-modal-title">
            <FiCalendar size={24} />
            <span>{year} {currentLang === 'en' ? 'Annual Schedule' : '年度計畫時程'}</span>
          </div>
          <button className="timeline-close-btn" onClick={onClose}>
            <FiX size={24} />
          </button>
        </div>

        {/* Subtitle */}
        <div className="timeline-subtitle">
          {currentLang === 'en' 
            ? 'Overview of important activities and deadlines throughout the year' 
            : '全年度重要活動與截止日期一覽'}
        </div>

        {/* Category Filters */}
        <div className="timeline-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {currentLang === 'en' 
                ? (categoryLabels[cat]?.en || cat)
                : (categoryLabels[cat]?.zh || cat)}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-content vertical-scroll">
          <div className="vertical-timeline">
            {filteredEvents.map((event, index) => (
              <div 
                key={index} 
                className={`timeline-event-vertical ${isImportant(event) ? 'important' : ''}`}
              >
                {/* Timeline Node */}
                <div className="timeline-node">
                  {isImportant(event) ? (
                    <div className="node-icon important">
                      <FiAlertCircle size={16} />
                    </div>
                  ) : (
                    <div className="node-icon normal">
                      <FiCheckCircle size={16} />
                    </div>
                  )}
                  <div className="timeline-line"></div>
                </div>

                {/* Event Content */}
                <div className="timeline-event-content">
                  <div className="event-date">
                    {event.month} {event.date && `${event.date}日`}
                  </div>
                  <div className="event-title">{event.title}</div>
                  <div className="event-category-badge">{event.category}</div>
                  {event.description && (
                    <div className="event-description">{event.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="timeline-legend">
          <div className="legend-item">
            <div className="legend-icon normal">
              <FiCheckCircle size={14} />
            </div>
            <span>{currentLang === 'en' ? 'Regular Event' : '一般事項'}</span>
          </div>
          <div className="legend-item">
            <div className="legend-icon important">
              <FiAlertCircle size={14} />
            </div>
            <span>{currentLang === 'en' ? 'Important Deadline' : '重要截止日期'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineBanner;
