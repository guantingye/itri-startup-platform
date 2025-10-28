import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './CollapsibleFilter.css';

/**
 * CollapsibleFilter Component
 * Universal collapsible filter panel for all modules
 * 
 * Props:
 * - isCollapsed: boolean - collapsed state
 * - onToggle: function - toggle collapse
 * - filters: array - filter configuration (optional, has defaults)
 * - selectedFilters: object - current filter selections
 * - onFilterChange: function - callback when filters change
 */
const CollapsibleFilter = ({ 
  isCollapsed, 
  onToggle,
  filters,
  selectedFilters = {},
  onFilterChange 
}) => {
  const { t } = useTranslation();
  const [localFilters, setLocalFilters] = useState(selectedFilters);

  // Default filter configuration if not provided
  const defaultFilters = [
    {
      id: 'date',
      title: 'Date',
      options: [
        { id: '7days', label: '7 days ~', count: 12 },
        { id: '2-1weeks', label: '2~1 weeks', count: 28 },
        { id: '3-2weeks', label: '3~2 weeks', count: 35 },
        { id: '1month', label: '1 month ~', count: 81 }
      ]
    },
    {
      id: 'topic',
      title: 'Topic',
      options: [
        { id: 'optics', label: '電資通光', count: 45 },
        { id: 'machinery', label: '機電運輸', count: 38 },
        { id: 'biotech', label: '生技醫材', count: 27 },
        { id: 'management', label: '管理技術', count: 23 },
        { id: 'service', label: '服務創新', count: 23 }
      ]
    }
  ];

  const activeFilters = filters || defaultFilters;

  const handleFilterToggle = (categoryId, optionId) => {
    const currentSelected = localFilters[categoryId] || [];
    const newSelected = currentSelected.includes(optionId)
      ? currentSelected.filter(id => id !== optionId)
      : [...currentSelected, optionId];

    const updated = {
      ...localFilters,
      [categoryId]: newSelected
    };

    setLocalFilters(updated);
    if (onFilterChange) {
      onFilterChange(updated);
    }
  };

  const handleClearAll = () => {
    setLocalFilters({});
    if (onFilterChange) {
      onFilterChange({});
    }
  };

  const getTotalSelectedCount = () => {
    return Object.values(localFilters).reduce((sum, arr) => sum + arr.length, 0);
  };

  const totalSelected = getTotalSelectedCount();

  return (
    <>
      {/* Toggle Button */}
      <button 
        className={`filter-toggle-btn ${isCollapsed ? 'collapsed' : 'expanded'}`}
        onClick={onToggle}
        aria-label={isCollapsed ? t('filter.expand') : t('filter.collapse')}
      >
        {isCollapsed ? (
          <FiChevronRight size={20} />
        ) : (
          <FiChevronLeft size={20} />
        )}
      </button>

      {/* Filter Panel */}
      <aside className={`collapsible-filter ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <div className="filter-panel-content">
          {/* Header */}
          <div className="filter-header">
            <div className="filter-header-title">
              <h3>{t('filter.title')}</h3>
              {totalSelected > 0 && (
                <span className="filter-count-badge">{totalSelected}</span>
              )}
            </div>
            {totalSelected > 0 && (
              <button 
                className="filter-clear-all-btn"
                onClick={handleClearAll}
              >
                <FiX size={16} />
                {t('filter.clearAll')}
              </button>
            )}
          </div>

          <div className="filter-divider" />

          {/* Filter Sections */}
          <div className="filter-sections">
            {activeFilters.map((section) => (
              <div key={section.id} className="filter-section">
                <h4 className="filter-section-title">{section.title}</h4>
                <div className="filter-options">
                  {section.options.map((option) => {
                    const isSelected = (localFilters[section.id] || []).includes(option.id);
                    return (
                      <label 
                        key={option.id}
                        className={`filter-option ${isSelected ? 'selected' : ''}`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleFilterToggle(section.id, option.id)}
                          className="filter-checkbox"
                        />
                        <span className="filter-checkbox-custom">
                          {isSelected && <div className="checkmark" />}
                        </span>
                        <span className="filter-option-label">{option.label}</span>
                        {option.count !== undefined && (
                          <span className="filter-option-count">({option.count})</span>
                        )}
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default CollapsibleFilter;
