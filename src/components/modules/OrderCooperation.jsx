import React, { useState } from 'react';
import { FiShoppingBag, FiMapPin, FiUsers, FiDollarSign, FiGlobe, FiImage } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import PageHeader from '../shared/PageHeader';
import CollapsibleFilter from '../shared/CollapsibleFilter';
import './OrderCooperation.css';

const OrderCooperation = () => {
  const { t, i18n } = useTranslation();
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(true);
  const currentLang = i18n.language;

  // Enhanced mock data with multi-language support
  const opportunities = [
    {
      id: 1,
      title: {
        zh: '荷蘭半導體設備製造商NTS尋求2奈米先進製程量測合作',
        en: 'Dutch Semiconductor Equipment Manufacturer NTS Seeks 2nm Advanced Process Measurement Collaboration'
      },
      company: {
        name: currentLang === 'en' ? 'ASML Holding N.V.' : '艾司摩爾控股公司 ASML',
        logo: '/assets/logos/asml-logo.png',
        status: currentLang === 'en' ? 'Verified (Established 1984)' : '已認證 (1984年成立)',
        industry: currentLang === 'en' ? 'Mechanical & Electronics' : '機電運輸',
        location: currentLang === 'en' ? 'Veldhoven, Netherlands' : '荷蘭 Veldhoven',
        employees: '44,000',
        capital: '$235.8B',
        website: 'https://www.asml.com/zh-tw',
        productTech: currentLang === 'en' 
          ? 'ASML focuses on extreme ultraviolet (EUV) lithography machines, using 13.5nm wavelength light sources to print extremely fine circuit structures on chips, enabling high-density and high-performance chip manufacturing. It is an indispensable core equipment for advanced processes (2nm and below). Additionally, ASML provides deep ultraviolet (DUV) lithography machines supporting multiple generations of chip manufacturing processes.'
          : 'ASML專注於極紫外光（EUV）光刻機，利用13.5奈米波長的光源，在晶片上印製極其精細的電路結構，實現高密度及高效能晶片製造，是先進製程（2奈米及以下）不可或缺的核心設備。此外也提供深紫外光（DUV）光刻機，支援多代晶片製造工藝。'
      },
      requirement: {
        background: currentLang === 'en'
          ? 'As global semiconductor processes advance towards 2nm and beyond, ASML needs to continuously improve the resolution, exposure efficiency, and stability of EUV lithography technology to support more complex chip designs and mass production requirements.'
          : '隨著全球半導體製程邁向2奈米及更先進節點，ASML需持續提升EUV光刻技術的解析度、曝光效率與穩定性，以支持更複雜晶片設計與量產需求。',
        objectives: currentLang === 'en' ? [
          'Develop high-precision measurement technology for sub-2nm process nodes',
          'Improve EUV lithography system capacity and yield',
          'Integrate AI and machine learning for process control optimization',
          'Establish real-time monitoring and predictive maintenance systems'
        ] : [
          '開發高精度量測技術，支援2奈米以下製程節點',
          '提升EUV光刻系統的產能與良率',
          '整合AI與機器學習技術優化製程控制',
          '建立即時監測與預測性維護系統'
        ],
        technicalRequirements: currentLang === 'en' ? [
          'Measurement accuracy: Sub-nanometer level (<0.5nm)',
          'Detection speed: >100 wafers per hour',
          'Compatibility: Supports 300mm wafers',
          'Environment: Ultra-clean room grade (Class 1)'
        ] : [
          '量測精度：亞奈米級（<0.5nm）',
          '檢測速度：每小時>100片晶圓',
          '相容性：支援300mm晶圓',
          '環境：超潔淨室等級（Class 1）'
        ],
        expectedOutcomes: currentLang === 'en'
          ? 'Through the introduction of advanced measurement technology, it is expected to improve EUV lithography system yield by 15%, shorten new process development time by 30%, and reduce overall manufacturing costs.'
          : '透過先進量測技術的導入，預期將EUV光刻系統的良率提升15%，縮短新製程開發時間30%，並降低整體製造成本。',
        timeline: currentLang === 'en'
          ? 'Collaboration period: 18 months (including technical verification and mass production introduction)'
          : '合作期程：18個月（含技術驗證與量產導入）',
        budget: 'USD 5-8 Million',
        images: [
          '/assets/images/asml-euv-machine.jpg',
          '/assets/images/asml-wafer.jpg'
        ]
      },
      tags: currentLang === 'en' 
        ? ['Semiconductor', 'EUV', 'Advanced Process', 'Measurement Tech', 'AI Integration']
        : ['半導體', 'EUV', '先進製程', '量測技術', 'AI整合'],
      postedDate: '2025-03-15',
      deadline: '2025-04-30'
    },
    {
      id: 2,
      title: {
        zh: '台灣IC設計龍頭尋求先進封裝技術合作夥伴',
        en: 'Taiwan IC Design Leader Seeks Advanced Packaging Technology Partners'
      },
      company: {
        name: currentLang === 'en' ? 'MediaTek Inc.' : '聯發科技股份有限公司',
        logo: '/assets/logos/mediatek-logo.png',
        status: currentLang === 'en' ? 'Verified (Established 1997)' : '已認證 (1997年成立)',
        industry: currentLang === 'en' ? 'ICT & Optoelectronics' : '電資通光',
        location: currentLang === 'en' ? 'Hsinchu, Taiwan' : '台灣 新竹',
        employees: '19,500',
        capital: '$38.5B',
        website: 'https://www.mediatek.tw',
        productTech: currentLang === 'en'
          ? 'MediaTek is a global leading fabless semiconductor company, focusing on advanced technology development in 5G, AI, IoT, and more. It provides innovative system-on-chip solutions in mobile computing, smart home, automotive electronics, and other fields.'
          : '聯發科技是全球領先的無晶圓廠半導體公司，專注於5G、AI、物聯網等先進技術開發。在行動運算、智慧家居、車用電子等領域提供創新的系統單晶片解決方案。'
      },
      requirement: {
        background: currentLang === 'en'
          ? 'To support the development of next-generation 5G+AI processors and high-performance computing chips, MediaTek needs advanced packaging technology to achieve heterogeneous integration and miniaturization design goals while reducing power consumption and improving computing performance.'
          : '為支援下一代5G+AI處理器及高效能運算晶片發展，聯發科技需要先進封裝技術來實現異質整合與小型化設計目標，同時降低功耗並提升運算效能。',
        objectives: currentLang === 'en' ? [
          'Develop 3D stacked packaging technology (Through-Silicon Via, TSV)',
          'Achieve heterogeneous chip integration (HBM + Logic + RF)',
          'Improve thermal management performance, reducing operating temperature by >15%',
          'Establish mass production process capability with monthly capacity of 100K units'
        ] : [
          '開發3D堆疊封裝技術（Through-Silicon Via, TSV）',
          '實現異質晶片整合（HBM + Logic + RF）',
          '提升熱管理效能，降低運作溫度15%以上',
          '建立量產製程能力，月產能達100K units'
        ],
        technicalRequirements: currentLang === 'en' ? [
          'Package type: 2.5D/3D packaging, fan-out packaging (InFO)',
          'Yield requirement: >98%',
          'Reliability: Pass JEDEC automotive-grade certification',
          'Process node: Support 5nm and below advanced processes'
        ] : [
          '封裝類型：2.5D/3D封裝、扇出型封裝（InFO）',
          '良率要求：>98%',
          '可靠性：通過JEDEC車規級認證',
          '製程節點：支援5nm以下先進製程'
        ],
        expectedOutcomes: currentLang === 'en'
          ? 'Through advanced packaging technology, it is expected to improve chip performance by 40%, reduce power consumption by 30%, and reduce package size by 50%, providing superior solutions for 5G and AI applications.'
          : '透過先進封裝技術，預期將晶片效能提升40%，功耗降低30%，並縮小封裝體積50%，為5G與AI應用提供更優異的解決方案。',
        timeline: currentLang === 'en'
          ? 'Collaboration period: 24 months (including technology development and mass production verification)'
          : '合作期程：24個月（含技術開發與量產驗證）',
        budget: 'NTD 150-200 Million',
        images: []
      },
      tags: currentLang === 'en'
        ? ['IC Design', 'Advanced Packaging', '5G', 'AI', 'Heterogeneous Integration']
        : ['IC設計', '先進封裝', '5G', 'AI', '異質整合'],
      postedDate: '2025-03-10',
      deadline: '2025-05-15'
    },
    {
      id: 3,
      title: {
        zh: '歐洲汽車零組件大廠尋求電動車電池管理系統供應商',
        en: 'European Automotive Parts Giant Seeks Electric Vehicle Battery Management System Suppliers'
      },
      company: {
        name: 'Bosch Mobility Solutions',
        logo: '/assets/logos/bosch-logo.png',
        status: currentLang === 'en' ? 'Verified (Established 1886)' : '已認證 (1886年成立)',
        industry: currentLang === 'en' ? 'Mechanical & Transportation' : '機電運輸',
        location: currentLang === 'en' ? 'Stuttgart, Germany' : '德國 Stuttgart',
        employees: '429,000',
        capital: '€88.2B',
        website: 'https://www.bosch-mobility.com',
        productTech: currentLang === 'en'
          ? 'Bosch Mobility is dedicated to intelligent mobility solutions with comprehensive powertrain technology in the electric vehicle field. It provides integrated solutions from battery management and power control to onboard software, supporting the electrification transformation of major global automakers.'
          : 'Bosch Mobility致力於智慧移動解決方案，在電動車領域擁有完整的動力系統技術。提供從電池管理、動力控制到車載軟體的整合解決方案，支援全球主要汽車製造商的電動化轉型。'
      },
      requirement: {
        background: currentLang === 'en'
          ? 'In response to the EU 2035 ban on fuel vehicles, the electric vehicle market is growing rapidly. Bosch needs a more advanced Battery Management System (BMS) to meet customer demands for range, safety, and charging speed.'
          : '因應歐盟2035年燃油車禁售政策，電動車市場快速成長。Bosch需要更先進的電池管理系統（BMS）來滿足客戶對續航力、安全性與充電速度的需求。',
        objectives: currentLang === 'en' ? [
          'Develop next-generation BMS supporting 800V high-voltage fast charging systems',
          'Integrate AI algorithms for battery health state prediction',
          'Improve battery energy density utilization to >95%',
          'Establish vehicle-cloud integrated remote monitoring and OTA update capabilities'
        ] : [
          '開發新一代BMS，支援800V高壓快充系統',
          '整合AI演算法實現電池健康狀態預測',
          '提升電池能量密度利用率至95%以上',
          '建立車雲整合的遠端監控與OTA更新能力'
        ],
        technicalRequirements: currentLang === 'en' ? [
          'Voltage range: 400V-800V',
          'Current capacity: >300A',
          'Monitoring accuracy: ±0.5% (voltage), ±1% (current)',
          'Functional safety: Compliant with ISO 26262 ASIL-D',
          'Temperature range: -40°C ~ 85°C',
          'Communication protocols: CAN FD, Ethernet (100/1000 Mbps)'
        ] : [
          '電壓範圍：400V-800V',
          '電流容量：>300A',
          '監測精度：±0.5% (電壓)、±1% (電流)',
          '功能安全：符合ISO 26262 ASIL-D',
          '溫度範圍：-40°C ~ 85°C',
          '通訊協定：CAN FD、Ethernet (100/1000 Mbps)'
        ],
        expectedOutcomes: currentLang === 'en'
          ? 'The next-generation BMS is expected to improve battery range by 12%, reduce charging time by 25%, and reduce battery degradation speed by 20% through predictive maintenance, extending battery lifespan.'
          : '新一代BMS預期將電池續航力提升12%，充電時間縮短25%，並透過預測性維護降低電池衰退速度20%，延長電池使用壽命。',
        timeline: currentLang === 'en'
          ? 'Collaboration period: 36 months (including development, testing, and automotive-grade certification)'
          : '合作期程：36個月（含開發、測試與車規認證）',
        budget: 'EUR 3-5 Million',
        images: [
          '/assets/images/bosch-bms.jpg'
        ]
      },
      tags: currentLang === 'en'
        ? ['Electric Vehicle', 'BMS', 'Automotive Grade', 'Fast Charging Tech', 'AI Prediction']
        : ['電動車', 'BMS', '車規級', '快充技術', 'AI預測'],
      postedDate: '2025-03-05',
      deadline: '2025-06-01'
    }
  ];

  return (
    <div className="order-cooperation-page">
      <CollapsibleFilter
        isCollapsed={isFilterCollapsed}
        onToggle={() => setIsFilterCollapsed(!isFilterCollapsed)}
      />
      <PageHeader
        icon={FiShoppingBag}
        title={t('modules.orderCooperation.title')}
        subtitle={t('modules.orderCooperation.subtitle')}
      />
      <div className="order-container">
        <div className="opportunities-list">
          {opportunities.map((opportunity) => (
            <div key={opportunity.id} className="opportunity-card">
              {/* Title */}
              <div className="opportunity-header">
                <h2 className="opportunity-title">
                  {currentLang === 'en' ? opportunity.title.en : opportunity.title.zh}
                </h2>
                <div className="opportunity-dates">
                  <span className="date-item">
                    {currentLang === 'en' ? 'Posted' : '發布'}: {opportunity.postedDate}
                  </span>
                  <span className="date-divider">|</span>
                  <span className="date-item deadline">
                    {currentLang === 'en' ? 'Deadline' : '截止'}: {opportunity.deadline}
                  </span>
                </div>
              </div>

              {/* Company Profile */}
              <section className="company-section">
                <h3 className="section-title">
                  {currentLang === 'en' ? 'Company Profile' : '公司簡介'}
                </h3>
                <div className="company-content">
                  <div className="company-header">
                    <div className="company-logo-container">
                      <div className="company-logo">
                        {opportunity.company.logo ? (
                          <img 
                            src={opportunity.company.logo} 
                            alt={currentLang === 'en' ? opportunity.company.nameEn : opportunity.company.name}
                            className="company-logo-img"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className="logo-placeholder-content">
                          <FiImage size={32} />
                          <span className="logo-placeholder">Logo</span>
                        </div>
                      </div>
                      <p className="logo-hint">
                        {opportunity.company.logo || '/assets/logos/company-logo.png'}
                      </p>
                    </div>
                    <div className="company-basic-info">
                      <div className="info-grid">
                        <div className="info-item">
                          <span className="info-label">
                            {currentLang === 'en' ? 'Company Name' : '公司名稱'}
                          </span>
                          <span className="info-value">{opportunity.company.name}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">
                            {currentLang === 'en' ? 'Status' : '成立狀態'}
                          </span>
                          <span className="info-value">{opportunity.company.status}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">
                            {currentLang === 'en' ? 'Industry' : '產業領域'}
                          </span>
                          <span className="info-value">{opportunity.company.industry}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">
                            {currentLang === 'en' ? 'Website' : '公司官網'}
                          </span>
                          <a 
                            href={opportunity.company.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="info-value link"
                          >
                            <FiGlobe size={14} />
                            {opportunity.company.website}
                          </a>
                        </div>
                        <div className="info-item">
                          <span className="info-label">
                            {currentLang === 'en' ? 'Location' : '登記地點'}
                          </span>
                          <span className="info-value">
                            <FiMapPin size={14} />
                            {opportunity.company.location}
                          </span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">
                            {currentLang === 'en' ? 'Employees' : '公司規模'}
                          </span>
                          <span className="info-value">
                            <FiUsers size={14} />
                            {opportunity.company.employees}
                            {currentLang === 'zh' && '人'}
                          </span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">
                            {currentLang === 'en' ? 'Capital' : '資本額'}
                          </span>
                          <span className="info-value">
                            <FiDollarSign size={14} />
                            {opportunity.company.capital}
                          </span>
                        </div>
                        <div className="info-item full-width">
                          <span className="info-label">
                            {currentLang === 'en' ? 'Product Technology' : '產品技術'}
                          </span>
                          <span className="info-value tech-description">
                            {opportunity.company.productTech}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Product Requirements */}
              <section className="requirement-section">
                <h3 className="section-title">
                  {currentLang === 'en' ? 'Product Requirements' : '產品需求'}
                </h3>
                <div className="requirement-content">
                  {opportunity.requirement.images && opportunity.requirement.images.length > 0 && (
                    <div className="requirement-images">
                      {opportunity.requirement.images.map((imgPath, idx) => (
                        <div key={idx} className="requirement-image-container">
                          <div className="requirement-image">
                            {imgPath ? (
                              <img 
                                src={imgPath} 
                                alt={`${currentLang === 'en' ? 'Product image' : '產品圖片'} ${idx + 1}`}
                                className="requirement-img"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                            ) : null}
                            <div className="image-placeholder-content">
                              <FiImage size={24} />
                              <span>
                                {currentLang === 'en' ? 'Example Image' : '示例圖片'} {idx + 1}
                              </span>
                            </div>
                          </div>
                          <p className="image-hint">{imgPath || '/assets/images/product.jpg'}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="requirement-subsection">
                    <h4 className="subsection-title">
                      {currentLang === 'en' ? 'Background' : '需求背景'}
                    </h4>
                    <p className="subsection-text">{opportunity.requirement.background}</p>
                  </div>

                  <div className="requirement-subsection">
                    <h4 className="subsection-title">
                      {currentLang === 'en' ? 'Collaboration Objectives' : '合作目標'}
                    </h4>
                    <ul className="requirement-list">
                      {opportunity.requirement.objectives.map((obj, index) => (
                        <li key={index}>{obj}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="requirement-subsection">
                    <h4 className="subsection-title">
                      {currentLang === 'en' ? 'Technical Requirements' : '技術規格'}
                    </h4>
                    <ul className="requirement-list">
                      {opportunity.requirement.technicalRequirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="requirement-subsection">
                    <h4 className="subsection-title">
                      {currentLang === 'en' ? 'Expected Outcomes' : '預期效益'}
                    </h4>
                    <p className="subsection-text">{opportunity.requirement.expectedOutcomes}</p>
                  </div>

                  <div className="requirement-meta">
                    <div className="meta-item">
                      <strong>
                        {currentLang === 'en' ? 'Timeline:' : '合作期程：'}
                      </strong>
                      {opportunity.requirement.timeline}
                    </div>
                    <div className="meta-item">
                      <strong>
                        {currentLang === 'en' ? 'Budget:' : '預算範圍：'}
                      </strong>
                      {opportunity.requirement.budget}
                    </div>
                  </div>

                  <div className="requirement-tags">
                    {opportunity.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderCooperation;
