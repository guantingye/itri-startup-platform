import React, { useState } from 'react';
import { FiSave, FiArrowLeft, FiUpload } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import PageHeader from '../../shared/PageHeader';
import memberService from '../../../services/memberService';
import './MemberZone.css';

const MemberSubmit = ({ onBack, onSubmitSuccess }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const [formData, setFormData] = useState({
    title: '',
    postDate: new Date().toISOString().split('T')[0],
    deadline: '',
    companyName: '',
    companyNameEn: '',
    establishedYear: '',
    industry: '電資通光',
    location: '',
    employees: '',
    capital: '',
    website: '',
    productTech: '',
    background: '',
    objectives: '',
    technicalRequirements: '',
    expectedOutcomes: '',
    timeline: '',
    budget: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    if (!formData.title || !formData.deadline) {
      alert(currentLang === 'en' ? 'Please fill in required fields' : '請填寫必填欄位');
      return;
    }

    // Save with type 'order'
    memberService.addSubmission(formData, 'order');
    
    // Success
    alert(currentLang === 'en' ? 'Submission successful!' : '提交成功！');
    if (onSubmitSuccess) {
      onSubmitSuccess();
    }
  };

  const industryOptions = [
    { value: '電資通光', label: { zh: '電資通光', en: 'ICT & Optoelectronics' } },
    { value: '機電運輸', label: { zh: '機電運輸', en: 'Mechanical & Transportation' } },
    { value: '生技醫材', label: { zh: '生技醫材', en: 'Biotechnology & Medical Devices' } },
    { value: '管理技術', label: { zh: '管理技術', en: 'Management Technology' } },
    { value: '服務創新', label: { zh: '服務創新', en: 'Service Innovation' } }
  ];

  return (
    <div className="member-submit-page">
      <PageHeader
        icon={FiUpload}
        title={currentLang === 'en' ? 'New Submission' : '新增訂單合作'}
        subtitle={currentLang === 'en' ? 'Submit your order cooperation opportunity' : '提交您的訂單合作機會'}
        actions={
          <button className="btn btn-outline" onClick={onBack}>
            <FiArrowLeft size={18} />
            {currentLang === 'en' ? 'Back' : '返回'}
          </button>
        }
      />

      <div className="member-container">
        <form className="submission-form" onSubmit={handleSubmit}>
          {/* Basic Info */}
          <section className="form-section">
            <h3 className="section-title">
              {currentLang === 'en' ? 'Basic Information' : '基本資訊'}
            </h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <label className="required">
                  {currentLang === 'en' ? 'Title' : '標題'}
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder={currentLang === 'en' ? 'Enter opportunity title' : '請輸入合作機會標題'}
                  required
                />
              </div>
              <div className="form-group">
                <label>{currentLang === 'en' ? 'Post Date' : '發布日期'}</label>
                <input
                  type="date"
                  name="postDate"
                  value={formData.postDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="required">
                  {currentLang === 'en' ? 'Deadline' : '截止日期'}
                </label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </section>

          {/* Company Info */}
          <section className="form-section">
            <h3 className="section-title">
              {currentLang === 'en' ? 'Company Information' : '公司簡介'}
            </h3>
            <div className="form-grid">
              <div className="form-group">
                <label>{currentLang === 'en' ? 'Company Name (Chinese)' : '公司名稱（中文）'}</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>{currentLang === 'en' ? 'Company Name (English)' : '公司名稱（英文）'}</label>
                <input
                  type="text"
                  name="companyNameEn"
                  value={formData.companyNameEn}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>{currentLang === 'en' ? 'Established Year' : '成立年份'}</label>
                <input
                  type="text"
                  name="establishedYear"
                  value={formData.establishedYear}
                  onChange={handleChange}
                  placeholder="1984"
                />
              </div>
              <div className="form-group">
                <label>{currentLang === 'en' ? 'Industry Category' : '產業類別'}</label>
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
              <div className="form-group">
                <label>{currentLang === 'en' ? 'Location' : '地點'}</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>{currentLang === 'en' ? 'Employees' : '公司規模'}</label>
                <input
                  type="text"
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  placeholder="44,000"
                />
              </div>
              <div className="form-group">
                <label>{currentLang === 'en' ? 'Capital' : '資本額'}</label>
                <input
                  type="text"
                  name="capital"
                  value={formData.capital}
                  onChange={handleChange}
                  placeholder="$235.8B"
                />
              </div>
              <div className="form-group">
                <label>{currentLang === 'en' ? 'Website' : '公司官網'}</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://www.example.com"
                />
              </div>
              <div className="form-group full-width">
                <label>{currentLang === 'en' ? 'Product Technology' : '產品技術'}</label>
                <textarea
                  name="productTech"
                  value={formData.productTech}
                  onChange={handleChange}
                  rows={4}
                  placeholder={currentLang === 'en' ? 'Describe your product technology...' : '描述產品技術...'}
                />
              </div>
            </div>
          </section>

          {/* Product Requirements */}
          <section className="form-section">
            <h3 className="section-title">
              {currentLang === 'en' ? 'Product Requirements' : '產品需求'}
            </h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <label>{currentLang === 'en' ? 'Background' : '需求背景'}</label>
                <textarea
                  name="background"
                  value={formData.background}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              <div className="form-group full-width">
                <label>{currentLang === 'en' ? 'Collaboration Objectives' : '合作目標'}</label>
                <textarea
                  name="objectives"
                  value={formData.objectives}
                  onChange={handleChange}
                  rows={4}
                  placeholder={currentLang === 'en' ? 'Enter each objective on a new line' : '每行輸入一個目標'}
                />
              </div>
              <div className="form-group full-width">
                <label>{currentLang === 'en' ? 'Technical Requirements' : '技術規格'}</label>
                <textarea
                  name="technicalRequirements"
                  value={formData.technicalRequirements}
                  onChange={handleChange}
                  rows={4}
                  placeholder={currentLang === 'en' ? 'Enter each requirement on a new line' : '每行輸入一個規格'}
                />
              </div>
              <div className="form-group full-width">
                <label>{currentLang === 'en' ? 'Expected Outcomes' : '預期效益'}</label>
                <textarea
                  name="expectedOutcomes"
                  value={formData.expectedOutcomes}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              <div className="form-group">
                <label>{currentLang === 'en' ? 'Timeline' : '合作期程'}</label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder={currentLang === 'en' ? 'e.g., 18 months' : '例如：18個月'}
                />
              </div>
              <div className="form-group">
                <label>{currentLang === 'en' ? 'Budget' : '預算範圍'}</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="USD 5-8 Million"
                />
              </div>
            </div>
          </section>

          {/* Submit Button */}
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

export default MemberSubmit;
