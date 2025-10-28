import React, { useState } from 'react';
import { FiSave, FiArrowLeft, FiTrendingUp, FiPlus, FiX, FiUpload } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../shared/PageHeader';
import { marketStrategyAPI } from '../../../services/apiService';
import './MemberZone.css';

const MarketStrategySubmit = ({ onBack, onSubmitSuccess }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const [formData, setFormData] = useState({
    title: '',
    titleEn: '',
    publishDate: new Date().toISOString().split('T')[0],
    industry: '電資通光',
    summary: '',
    summaryEn: '',
    keyInsights: [{ title: '', titleEn: '', content: '', contentEn: '' }],
    keyCharts: [{ imageUrl: '', caption: '', captionEn: '' }],
    strategies: [{ zh: '', en: '' }],
    sources: ['']
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle Insights
  const handleInsightChange = (index, field, value) => {
    const newInsights = [...formData.keyInsights];
    newInsights[index][field] = value;
    setFormData(prev => ({ ...prev, keyInsights: newInsights }));
  };

  const addInsight = () => {
    setFormData(prev => ({
      ...prev,
      keyInsights: [...prev.keyInsights, { title: '', titleEn: '', content: '', contentEn: '' }]
    }));
  };

  const removeInsight = (index) => {
    if (formData.keyInsights.length > 1) {
      setFormData(prev => ({
        ...prev,
        keyInsights: prev.keyInsights.filter((_, i) => i !== index)
      }));
    }
  };

  // Handle Charts
  const handleChartChange = (index, field, value) => {
    const newCharts = [...formData.keyCharts];
    newCharts[index][field] = value;
    setFormData(prev => ({ ...prev, keyCharts: newCharts }));
  };

  const handleChartImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newCharts = [...formData.keyCharts];
        newCharts[index].imageUrl = reader.result;
        setFormData(prev => ({ ...prev, keyCharts: newCharts }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addChart = () => {
    setFormData(prev => ({
      ...prev,
      keyCharts: [...prev.keyCharts, { imageUrl: '', caption: '', captionEn: '' }]
    }));
  };

  const removeChart = (index) => {
    if (formData.keyCharts.length > 1) {
      setFormData(prev => ({
        ...prev,
        keyCharts: prev.keyCharts.filter((_, i) => i !== index)
      }));
    }
  };

  // Handle Strategies
  const handleStrategyChange = (index, lang, value) => {
    const newStrategies = [...formData.strategies];
    newStrategies[index][lang] = value;
    setFormData(prev => ({ ...prev, strategies: newStrategies }));
  };

  const addStrategy = () => {
    setFormData(prev => ({
      ...prev,
      strategies: [...prev.strategies, { zh: '', en: '' }]
    }));
  };

  const removeStrategy = (index) => {
    if (formData.strategies.length > 1) {
      setFormData(prev => ({
        ...prev,
        strategies: prev.strategies.filter((_, i) => i !== index)
      }));
    }
  };

  // Handle Sources
  const handleSourceChange = (index, value) => {
    const newSources = [...formData.sources];
    newSources[index] = value;
    setFormData(prev => ({ ...prev, sources: newSources }));
  };

  const addSource = () => {
    setFormData(prev => ({
      ...prev,
      sources: [...prev.sources, '']
    }));
  };

  const removeSource = (index) => {
    if (formData.sources.length > 1) {
      setFormData(prev => ({
        ...prev,
        sources: prev.sources.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.summary) {
      alert(currentLang === 'en' ? 'Please fill in required fields' : '請填寫必填欄位');
      return;
    }

    const cleanedData = {
      title: formData.title,
      titleEn: formData.titleEn,
      publishDate: formData.publishDate,
      industry: formData.industry,
      tags: formData.tags,
      tagsEn: formData.tagsEn,
      summary: formData.summary,
      summaryEn: formData.summaryEn,
      keyInsights: formData.keyInsights.filter(item => item.title.trim() && item.content.trim()),
      keyCharts: formData.keyCharts.filter(item => item.caption.trim()),
      strategies: formData.strategies.filter(item => item.zh.trim()),
      sources: formData.sources.filter(item => item.trim())
    };

    try {
      const response = await marketStrategyAPI.create(cleanedData);
      
      if (response.success) {
        alert(currentLang === 'en' ? 'Market strategy submitted successfully!' : '市場策略提交成功！');
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      }
    } catch (error) {
      console.error('提交失敗:', error);
      alert(currentLang === 'en' ? 'Submission failed' : '提交失敗');
    }
  };

  const industryOptions = [
    { value: '電資通光', label: { zh: '電資通光', en: 'ICT & Optoelectronics' } },
    { value: '機電運輸', label: { zh: '機電運輸', en: 'Mechanical & Transportation' } },
    { value: '生技醫材', label: { zh: '生技醫材', en: 'Biotechnology & Medical Devices' } },
    { value: '能源環境', label: { zh: '能源環境', en: 'Energy & Environment' } },
    { value: '服務創新', label: { zh: '服務創新', en: 'Service Innovation' } }
  ];

  return (
    <div className="member-submit-page">
      <PageHeader
        icon={FiTrendingUp}
        title={currentLang === 'en' ? 'New Market Strategy' : '新增市場策略'}
        subtitle={currentLang === 'en' ? 'Submit market intelligence and strategic insights' : '提交市場情報與策略洞察'}
        actions={
          <button className="btn btn-outline" onClick={onBack}>
            <FiArrowLeft size={18} />
            {currentLang === 'en' ? 'Back' : '返回'}
          </button>
        }
      />

      <div className="member-container">
        <form className="submission-form" onSubmit={handleSubmit}>
          {/* Basic Information */}
          <section className="form-section">
            <h3 className="section-title">
              {currentLang === 'en' ? 'Basic Information' : '基本資訊'}
            </h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <label className="required">
                  {currentLang === 'en' ? 'Title (Chinese)' : '標題（中文）'}
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder={currentLang === 'en' ? 'Enter strategy report title' : '請輸入策略報告標題'}
                  required
                />
              </div>
              <div className="form-group full-width">
                <label>
                  {currentLang === 'en' ? 'Title (English)' : '標題（英文）'}
                </label>
                <input
                  type="text"
                  name="titleEn"
                  value={formData.titleEn}
                  onChange={handleChange}
                  placeholder="Enter strategy report title in English"
                />
              </div>
              <div className="form-group">
                <label>{currentLang === 'en' ? 'Publish Date' : '發布日期'}</label>
                <input
                  type="date"
                  name="publishDate"
                  value={formData.publishDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>{currentLang === 'en' ? 'Industry Category' : '產業分類'}</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  {industryOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>
                      {currentLang === 'en' ? opt.label.en : opt.label.zh}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Executive Summary */}
          <section className="form-section">
            <h3 className="section-title">
              {currentLang === 'en' ? 'Executive Summary' : '重點摘要'}
            </h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <label className="required">
                  {currentLang === 'en' ? 'Summary (Chinese)' : '摘要（中文）'}
                </label>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  rows={6}
                  placeholder={currentLang === 'en' ? 'Describe the key points of this market strategy...' : '描述此市場策略的重點...'}
                  required
                />
              </div>
              <div className="form-group full-width">
                <label>
                  {currentLang === 'en' ? 'Summary (English)' : '摘要（英文）'}
                </label>
                <textarea
                  name="summaryEn"
                  value={formData.summaryEn}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Describe the key points in English..."
                />
              </div>
            </div>
          </section>

          {/* Key Insights & Inspirations */}
          <section className="form-section">
            <h3 className="section-title">
              {currentLang === 'en' ? 'Key Insights & Inspirations' : '觀察亮點與啟發'}
            </h3>
            {formData.keyInsights.map((insight, index) => (
              <div key={index} className="insight-group">
                <div className="group-header">
                  <span className="group-number">
                    {currentLang === 'en' ? `Insight ${index + 1}` : `洞察 ${index + 1}`}
                  </span>
                  <button
                    type="button"
                    className="btn-icon"
                    onClick={() => removeInsight(index)}
                    disabled={formData.keyInsights.length === 1}
                  >
                    <FiX size={18} />
                  </button>
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label>{currentLang === 'en' ? 'Title (Chinese)' : '標題（中文）'}</label>
                    <input
                      type="text"
                      value={insight.title}
                      onChange={(e) => handleInsightChange(index, 'title', e.target.value)}
                      placeholder={currentLang === 'en' ? 'Insight title' : '洞察標題'}
                    />
                  </div>
                  <div className="form-group">
                    <label>{currentLang === 'en' ? 'Title (English)' : '標題（英文）'}</label>
                    <input
                      type="text"
                      value={insight.titleEn}
                      onChange={(e) => handleInsightChange(index, 'titleEn', e.target.value)}
                      placeholder="Insight title"
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>{currentLang === 'en' ? 'Content (Chinese)' : '內容（中文）'}</label>
                    <textarea
                      value={insight.content}
                      onChange={(e) => handleInsightChange(index, 'content', e.target.value)}
                      rows={4}
                      placeholder={currentLang === 'en' ? 'Describe this insight...' : '描述此洞察...'}
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>{currentLang === 'en' ? 'Content (English)' : '內容（英文）'}</label>
                    <textarea
                      value={insight.contentEn}
                      onChange={(e) => handleInsightChange(index, 'contentEn', e.target.value)}
                      rows={4}
                      placeholder="Describe this insight in English..."
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-sm btn-outline"
              onClick={addInsight}
            >
              <FiPlus size={16} />
              {currentLang === 'en' ? 'Add Insight' : '新增洞察'}
            </button>
          </section>

          {/* Key Charts */}
          <section className="form-section">
            <h3 className="section-title">
              {currentLang === 'en' ? 'Key Charts' : '關鍵圖表'}
            </h3>
            {formData.keyCharts.map((chart, index) => (
              <div key={index} className="chart-group">
                <div className="group-header">
                  <span className="group-number">
                    {currentLang === 'en' ? `Chart ${index + 1}` : `圖表 ${index + 1}`}
                  </span>
                  <button
                    type="button"
                    className="btn-icon"
                    onClick={() => removeChart(index)}
                    disabled={formData.keyCharts.length === 1}
                  >
                    <FiX size={18} />
                  </button>
                </div>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label>{currentLang === 'en' ? 'Upload Chart Image' : '上傳圖表圖片'}</label>
                    <div className="file-upload-wrapper">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleChartImageUpload(index, e)}
                        className="file-input"
                        id={`chart-upload-${index}`}
                      />
                      <label htmlFor={`chart-upload-${index}`} className="file-upload-label">
                        <FiUpload size={20} />
                        <span>{currentLang === 'en' ? 'Choose Image' : '選擇圖片'}</span>
                      </label>
                      {chart.imageUrl && (
                        <div className="image-preview">
                          <img src={chart.imageUrl} alt="Chart preview" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="form-group full-width">
                    <label>{currentLang === 'en' ? 'Chart Caption (Chinese)' : '圖表說明（中文）'}</label>
                    <textarea
                      value={chart.caption}
                      onChange={(e) => handleChartChange(index, 'caption', e.target.value)}
                      rows={3}
                      placeholder={currentLang === 'en' ? 'Describe what this chart shows...' : '描述此圖表顯示的內容...'}
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>{currentLang === 'en' ? 'Chart Caption (English)' : '圖表說明（英文）'}</label>
                    <textarea
                      value={chart.captionEn}
                      onChange={(e) => handleChartChange(index, 'captionEn', e.target.value)}
                      rows={3}
                      placeholder="Describe what this chart shows in English..."
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-sm btn-outline"
              onClick={addChart}
            >
              <FiPlus size={16} />
              {currentLang === 'en' ? 'Add Chart' : '新增圖表'}
            </button>
          </section>

          {/* Strategy Recommendations */}
          <section className="form-section">
            <h3 className="section-title">
              {currentLang === 'en' ? 'Strategy Recommendations' : '策略建議'}
            </h3>
            {formData.strategies.map((strategy, index) => (
              <div key={index} className="strategy-group">
                <div className="group-header">
                  <span className="group-number">
                    {currentLang === 'en' ? `Strategy ${index + 1}` : `策略 ${index + 1}`}
                  </span>
                  <button
                    type="button"
                    className="btn-icon"
                    onClick={() => removeStrategy(index)}
                    disabled={formData.strategies.length === 1}
                  >
                    <FiX size={18} />
                  </button>
                </div>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label>{currentLang === 'en' ? 'Strategy (Chinese)' : '策略（中文）'}</label>
                    <textarea
                      value={strategy.zh}
                      onChange={(e) => handleStrategyChange(index, 'zh', e.target.value)}
                      rows={3}
                      placeholder={currentLang === 'en' ? 'Enter strategy recommendation...' : '輸入策略建議...'}
                    />
                  </div>
                  <div className="form-group full-width">
                    <label>{currentLang === 'en' ? 'Strategy (English)' : '策略（英文）'}</label>
                    <textarea
                      value={strategy.en}
                      onChange={(e) => handleStrategyChange(index, 'en', e.target.value)}
                      rows={3}
                      placeholder="Enter strategy recommendation in English..."
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-sm btn-outline"
              onClick={addStrategy}
            >
              <FiPlus size={16} />
              {currentLang === 'en' ? 'Add Strategy' : '新增策略'}
            </button>
          </section>

          {/* Data Sources */}
          <section className="form-section">
            <h3 className="section-title">
              {currentLang === 'en' ? 'Data Sources' : '資料來源'}
            </h3>
            {formData.sources.map((source, index) => (
              <div key={index} className="dynamic-field-row">
                <input
                  type="text"
                  value={source}
                  onChange={(e) => handleSourceChange(index, e.target.value)}
                  placeholder={`${currentLang === 'en' ? 'Source' : '來源'} ${index + 1}`}
                />
                <button
                  type="button"
                  className="btn-icon"
                  onClick={() => removeSource(index)}
                  disabled={formData.sources.length === 1}
                >
                  <FiX size={18} />
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-sm btn-outline"
              onClick={addSource}
            >
              <FiPlus size={16} />
              {currentLang === 'en' ? 'Add Source' : '新增來源'}
            </button>
          </section>

          {/* Submit Buttons */}
          <div className="form-actions">
            <button type="button" className="btn btn-outline" onClick={onBack}>
              {currentLang === 'en' ? 'Cancel' : '取消'}
            </button>
            <button type="submit" className="btn btn-primary">
              <FiSave size={18} />
              {currentLang === 'en' ? 'Submit' : '提交'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MarketStrategySubmit;
