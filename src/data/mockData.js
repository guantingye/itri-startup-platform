// Mock Data with i18n Support
export const timelineData = [
  {
    month: '1月',
    date: '15',
    category: '申請',
    title: 'SBIR 創新研發計畫開放申請',
    description: '針對中小企業創新研發補助，最高補助500萬',
    priority: 'normal',
    important: false,
    translations: {
      en: {
        category: 'Application',
        title: 'SBIR Innovation R&D Program Opens',
        description: 'Innovation R&D subsidy for SMEs, up to 5 million'
      }
    }
  },
  {
    month: '1月',
    date: '20',
    category: '說明會',
    title: 'A+早期新創補助計畫說明會',
    description: '線上說明會，介紹申請流程與評審標準',
    priority: 'normal',
    important: false,
    translations: {
      en: {
        category: 'Briefing',
        title: 'A+ Early-Stage Startup Subsidy Briefing',
        description: 'Online briefing on application process and review criteria'
      }
    }
  },
  {
    month: '1月',
    date: '31',
    category: '截止',
    title: 'CITD 計畫第一階段截止',
    description: '概念驗證計畫書截止收件',
    priority: 'high',
    important: true,
    translations: {
      en: {
        category: 'Deadline',
        title: 'CITD Program Phase 1 Deadline',
        description: 'Proof of concept proposal submission deadline'
      }
    }
  },
  {
    month: '2月',
    date: '10',
    category: '活動',
    title: '創投媒合會',
    description: '邀請20家國內外創投參與',
    priority: 'normal',
    important: false,
    translations: {
      en: {
        category: 'Event',
        title: 'VC Matching Event',
        description: '20 domestic and international VCs invited'
      }
    }
  },
  {
    month: '2月',
    date: '28',
    category: '截止',
    title: 'A+早期新創補助計畫截止',
    description: '申請文件需於本日前完成上傳',
    priority: 'high',
    important: true,
    translations: {
      en: {
        category: 'Deadline',
        title: 'A+ Early-Stage Startup Subsidy Deadline',
        description: 'Application documents must be uploaded by today'
      }
    }
  },
  {
    month: '3月',
    date: '15',
    category: '審查',
    title: 'SBIR 計畫初審結果公告',
    description: '通過初審者將進入第二階段簡報',
    priority: 'normal',
    important: false,
    translations: {
      en: {
        category: 'Review',
        title: 'SBIR Program Preliminary Review Results',
        description: 'Candidates who pass will proceed to phase 2 presentations'
      }
    }
  },
  {
    month: '3月',
    date: '25',
    category: '活動',
    title: '技術商品化培訓課程',
    description: '為期三天的密集訓練營',
    priority: 'normal',
    important: false,
    translations: {
      en: {
        category: 'Event',
        title: 'Technology Commercialization Training',
        description: 'Three-day intensive training camp'
      }
    }
  },
  {
    month: '4月',
    date: '10',
    category: '申請',
    title: 'CITD 計畫第二階段開放',
    description: '技術開發計畫書開始收件',
    priority: 'normal',
    important: false,
    translations: {
      en: {
        category: 'Application',
        title: 'CITD Program Phase 2 Opens',
        description: 'Technology development proposals now accepted'
      }
    }
  },
  {
    month: '4月',
    date: '20',
    category: '審查',
    title: 'SBIR 計畫決審簡報',
    description: '入圍團隊進行最終簡報',
    priority: 'high',
    important: true,
    translations: {
      en: {
        category: 'Review',
        title: 'SBIR Program Final Presentations',
        description: 'Shortlisted teams present final pitches'
      }
    }
  },
  {
    month: '5月',
    date: '01',
    category: '公告',
    title: 'A+ 計畫補助名單公告',
    description: '核定通過名單與補助金額公布',
    priority: 'high',
    important: true,
    translations: {
      en: {
        category: 'Announcement',
        title: 'A+ Program Grant List Announced',
        description: 'Approved list and grant amounts published'
      }
    }
  },
  {
    month: '5月',
    date: '15',
    category: '活動',
    title: '新創團隊國際參展補助說明',
    description: '說明國際展覽補助申請辦法',
    priority: 'normal',
    important: false,
    translations: {
      en: {
        category: 'Event',
        title: 'International Exhibition Subsidy Briefing',
        description: 'Explanation of international exhibition subsidy application'
      }
    }
  },
  {
    month: '6月',
    date: '01',
    category: '申請',
    title: '下半年 SBIR 計畫開放申請',
    description: '第二期 SBIR 開始收件',
    priority: 'normal',
    important: false,
    translations: {
      en: {
        category: 'Application',
        title: 'Second Half SBIR Program Opens',
        description: 'Phase 2 SBIR applications now accepted'
      }
    }
  }
];

export const marketStrategyData = [
  {
    id: 1,
    title: '全球半導體產業AI晶片市場趨勢分析',
    titleEn: 'Global Semiconductor Industry AI Chip Market Trend Analysis',
    publishDate: '2025-01-15',
    industry: '電資通光',
    tags: ['AI', '半導體', '晶片設計', '市場趨勢'],
    tagsEn: ['AI', 'Semiconductor', 'Chip Design', 'Market Trends'],
    
    summary: {
      zh: '隨著生成式AI應用快速普及，AI晶片市場呈現爆炸性成長。2024年全球AI晶片市場規模達到530億美元，預計2028年將突破1,200億美元，年複合成長率達23.6%。NVIDIA持續主導高階AI訓練晶片市場，市占率超過80%，而AMD、Intel、Google等廠商正積極投入開發自研晶片以降低對NVIDIA的依賴。台灣半導體供應鏈在AI晶片製造扮演關鍵角色，TSMC的CoWoS先進封裝技術成為AI晶片量產的重要關鍵。',
      en: 'With the rapid proliferation of generative AI applications, the AI chip market is experiencing explosive growth. The global AI chip market reached $53 billion in 2024 and is projected to exceed $120 billion by 2028, with a CAGR of 23.6%. NVIDIA continues to dominate the high-end AI training chip market with over 80% market share, while AMD, Intel, Google and others are actively developing in-house chips to reduce dependence on NVIDIA. Taiwan\'s semiconductor supply chain plays a critical role in AI chip manufacturing, with TSMC\'s CoWoS advanced packaging technology becoming a key enabler for AI chip mass production.'
    },
    
    keyInsights: [
      {
        title: '市場規模快速擴張',
        titleEn: 'Rapid Market Scale Expansion',
        content: 'AI晶片市場從2023年的420億美元成長至2024年的530億美元，年增率達26.2%。其中，訓練晶片市場規模約340億美元，推論晶片市場約190億美元。預計2025-2028年推論晶片市場成長速度將超越訓練晶片，年複合成長率可達28%。',
        contentEn: 'The AI chip market grew from $42 billion in 2023 to $53 billion in 2024, a YoY increase of 26.2%. Training chips account for approximately $34 billion, while inference chips represent $19 billion. The inference chip market is expected to grow faster than training chips from 2025-2028, with a CAGR of 28%.'
      },
      {
        title: 'Edge AI晶片崛起',
        titleEn: 'Rise of Edge AI Chips',
        content: '隨著隱私保護意識提升及即時運算需求增加，Edge AI晶片需求快速成長。Qualcomm、MediaTek、Apple等廠商在手機端AI晶片競爭激烈，而在IoT領域，低功耗AI晶片解決方案成為關鍵。預計2025年Edge AI晶片市場將達85億美元。',
        contentEn: 'With increasing privacy awareness and real-time computing demands, Edge AI chip demand is growing rapidly. Qualcomm, MediaTek, and Apple are competing fiercely in mobile AI chips, while in IoT, low-power AI chip solutions are key. The Edge AI chip market is expected to reach $8.5 billion in 2025.'
      },
      {
        title: '先進封裝技術重要性提升',
        titleEn: 'Growing Importance of Advanced Packaging',
        content: 'AI晶片對運算效能及能源效率要求極高，CoWoS、FOPLP、3D IC等先進封裝技術成為關鍵。TSMC的CoWoS產能供不應求，已規劃2025年產能擴增至月產3.5萬片，較2024年成長75%。',
        contentEn: 'AI chips demand extreme computing performance and energy efficiency, making advanced packaging technologies like CoWoS, FOPLP, and 3D IC critical. TSMC\'s CoWoS capacity is in high demand, with plans to expand to 35,000 wafers per month in 2025, a 75% increase from 2024.'
      }
    ],
    
    keyCharts: [
      {
        imageUrl: 'https://d21aa2ghywi6oj.cloudfront.net/Report_Description_1_1024x583_a617ab47c3.png',
        caption: '圖1：全球AI晶片市場規模趨勢（2022-2028年）。數據顯示市場從2022年的280億美元快速成長至2024年的530億美元，預計2028年將達到1,200億美元，年複合成長率達23.6%。資料來源：Gartner, IDC',
        captionEn: 'Figure 1: Global AI chip market size trend (2022-2028). Data shows market growth from $28B in 2022 to $53B in 2024, projected to reach $120B by 2028, with CAGR of 23.6%. Source: Gartner, IDC'
      },
      {
        imageUrl: 'https://img.technews.tw/wp-content/uploads/2024/06/10094051/the-discrete-graphics-card-market-2024Q1.jpg',
        caption: '圖2：2024年全球AI晶片市場份額分布。NVIDIA以82%的市占率持續主導市場，AMD佔8%，Intel佔4%，其他廠商合計6%。這反映出AI訓練晶片市場的高度集中特性。資料來源：Jon Peddie Research, Mercury Research',
        captionEn: 'Figure 2: 2024 global AI chip market share distribution. NVIDIA continues to dominate with 82% market share, AMD holds 8%, Intel 4%, and others combined 6%. This reflects the highly concentrated nature of the AI training chip market. Source: Jon Peddie Research, Mercury Research'
      }
    ],
    
    strategies: [
      {
        zh: '晶片設計廠商應聚焦於特定應用場景的ASIC設計，如推論加速、視覺處理等垂直領域，避免與NVIDIA在通用訓練晶片市場直接競爭。同時應積極建立軟體生態系，提供完整的開發工具鏈。',
        en: 'Chip design companies should focus on ASIC designs for specific applications like inference acceleration and visual processing, avoiding direct competition with NVIDIA in general training chips. Actively build software ecosystems and provide complete development toolchains.'
      },
      {
        zh: '封裝測試廠商應投資先進封裝產能，特別是2.5D/3D封裝技術。與晶圓代工廠建立策略合作關係，提前布局AI晶片供應鏈。預估2025-2027年先進封裝產能需求將持續緊張。',
        en: 'Packaging & testing companies should invest in advanced packaging capacity, especially 2.5D/3D packaging technologies. Establish strategic partnerships with foundries and position early in the AI chip supply chain. Advanced packaging capacity is expected to remain tight from 2025-2027.'
      },
      {
        zh: 'AI應用開發商應評估導入專用AI加速器的可行性，特別是針對大規模推論應用。考慮採用多雲架構，分散對單一晶片供應商的依賴風險。',
        en: 'AI application developers should evaluate the feasibility of adopting specialized AI accelerators, especially for large-scale inference applications. Consider multi-cloud architectures to diversify dependency risks on single chip vendors.'
      }
    ],
    
    sources: [
      'Gartner - Global AI Chip Market Analysis Report 2024',
      'IDC - Worldwide AI Infrastructure Forecast 2024-2028',
      'SEMI - Global Semiconductor Market Trends Q4 2024',
      'TSMC Investor Relations - Advanced Packaging Technology Update',
      'NVIDIA Financial Reports - AI Computing Platform Revenue'
    ]
  },
  
  {
    id: 2,
    title: '永續能源轉型：全球氫能產業發展與商機分析',
    titleEn: 'Sustainable Energy Transition: Global Hydrogen Industry Development and Business Opportunities',
    publishDate: '2025-01-10',
    industry: '能源環境',
    tags: ['氫能', '綠色能源', '碳中和', '能源轉型'],
    tagsEn: ['Hydrogen', 'Green Energy', 'Carbon Neutrality', 'Energy Transition'],
    
    summary: {
      zh: '隨著全球淨零碳排目標推進，氫能被視為實現能源轉型的關鍵技術之一。2024年全球氫能市場規模達到1,850億美元，預計2030年將成長至4,200億美元。綠氫（透過再生能源電解水產生）成為投資焦點，歐盟、美國、日本、韓國等主要經濟體均推出大規模氫能發展計畫。中國大陸憑藉龐大的再生能源裝置容量，正快速擴大綠氫產能。技術突破、成本下降及政策支持，使氫能在工業脫碳、重型運輸、儲能等領域的應用前景日益明朗。',
      en: 'As global net-zero carbon targets advance, hydrogen is seen as a key technology for energy transition. The global hydrogen market reached $185 billion in 2024 and is projected to grow to $420 billion by 2030. Green hydrogen (produced via renewable energy electrolysis) has become an investment focus, with major economies like the EU, US, Japan, and South Korea launching large-scale hydrogen development programs. China is rapidly expanding green hydrogen capacity with its massive renewable energy installations. Technology breakthroughs, cost reductions, and policy support make hydrogen applications in industrial decarbonization, heavy transport, and energy storage increasingly promising.'
    },
    
    keyInsights: [
      {
        title: '綠氫成本快速下降',
        titleEn: 'Rapid Decline in Green Hydrogen Costs',
        content: '受惠於電解槽技術進步及再生能源成本降低，綠氫生產成本從2020年的每公斤5-6美元降至2024年的2.5-3.5美元。部分地區（如中東、澳洲）已實現每公斤2美元以下的成本。預計2030年綠氫成本將降至每公斤1.5美元，與灰氫（化石燃料製氫）成本相當。',
        contentEn: 'Thanks to advances in electrolyzer technology and lower renewable energy costs, green hydrogen production costs fell from $5-6/kg in 2020 to $2.5-3.5/kg in 2024. Some regions (Middle East, Australia) have achieved costs below $2/kg. Green hydrogen costs are expected to reach $1.5/kg by 2030, matching gray hydrogen costs.'
      },
      {
        title: '政策支持力度空前',
        titleEn: 'Unprecedented Policy Support',
        content: '美國《降低通膨法案》提供綠氫生產每公斤最高3美元的稅收抵免。歐盟《REPowerEU》計畫目標2030年生產1,000萬噸綠氫。中國十四五規劃將氫能列為六大未來產業之一，規劃2025年綠氫產量達10-20萬噸。',
        contentEn: 'The US Inflation Reduction Act provides up to $3/kg tax credits for green hydrogen production. The EU\'s REPowerEU plan targets 10 million tons of green hydrogen by 2030. China\'s 14th Five-Year Plan lists hydrogen as one of six future industries, targeting 100,000-200,000 tons of green hydrogen by 2025.'
      },
      {
        title: '工業應用率先突破',
        titleEn: 'Industrial Applications Leading the Way',
        content: '鋼鐵、化工、煉油等高碳排產業成為氫能應用先鋒。全球已有超過50個綠氫煉鋼示範項目，預計2025年開始商業化生產。化工產業的綠氨生產也快速發展，既可作為零碳肥料，也可用於航運燃料。',
        contentEn: 'High-carbon industries like steel, chemicals, and refining are pioneering hydrogen applications. Over 50 green hydrogen steelmaking demonstration projects globally are expected to begin commercial production in 2025. Green ammonia production in the chemical industry is also developing rapidly, serving both as zero-carbon fertilizer and shipping fuel.'
      }
    ],
    
    keyCharts: [
      {
        imageUrl: 'https://www.delta-foundation.org.tw/upload/userfiles/2022.11.1-3.png',
        caption: '圖1：綠氫生產成本下降趨勢（2020-2030年）。顯示綠氫成本從2020年的每公斤5-6美元持續下降，預計2030年將達到每公斤1.5美元，與傳統灰氫成本相當。資料來源：BloombergNEF, IEA',
        captionEn: 'Figure 1: Green hydrogen production cost decline trend (2020-2030). Shows green hydrogen costs falling from $5-6/kg in 2020, projected to reach $1.5/kg by 2030, matching gray hydrogen costs. Source: BloombergNEF, IEA'
      }
    ],
    
    strategies: [
      {
        zh: '氫能設備製造商應專注於提高電解槽效率及降低製造成本，特別是質子交換膜（PEM）和固態氧化物電解槽（SOEC）技術。建立在地化供應鏈以降低進口依賴。',
        en: 'Hydrogen equipment manufacturers should focus on improving electrolyzer efficiency and reducing manufacturing costs, particularly for PEM and SOEC technologies. Establish localized supply chains to reduce import dependence.'
      },
      {
        zh: '能源公司應評估在再生能源豐富地區建立綠氫生產基地的可行性，並建立氫能運輸與儲存基礎設施。考慮與工業客戶簽訂長期供應合約以確保需求。',
        en: 'Energy companies should evaluate the feasibility of establishing green hydrogen production facilities in renewable energy-rich regions and build hydrogen transport and storage infrastructure. Consider long-term supply contracts with industrial customers to ensure demand.'
      },
      {
        zh: '重工業企業應制定氫能轉型路徑圖，優先在高碳排製程（如鋼鐵、化工）導入氫能。申請政府補助及碳權交易機制以降低轉型成本。',
        en: 'Heavy industry enterprises should develop hydrogen transition roadmaps, prioritizing adoption in high-carbon processes (steel, chemicals). Apply for government subsidies and carbon trading mechanisms to reduce transition costs.'
      }
    ],
    
    sources: [
      'IEA - Global Hydrogen Review 2024',
      'BloombergNEF - Hydrogen Economy Outlook 2024',
      'Hydrogen Council - Path to Hydrogen Competitiveness Report',
      'IRENA - Green Hydrogen Cost Reduction Report',
      'European Commission - REPowerEU Hydrogen Strategy'
    ]
  }
];

export const orderCooperationData = [
  {
    id: 1,
    companyName: '台灣精密機械股份有限公司',
    companyNameEn: 'Taiwan Precision Machinery Co., Ltd.',
    industry: '機電運輸',
    industryEn: 'Mechanical & Transportation',
    productName: '智能工業機器人控制系統',
    productNameEn: 'Intelligent Industrial Robot Control System',
    orderQuantity: '500套',
    orderQuantityEn: '500 units',
    deadline: '2025-06-30',
    budget: '3000萬',
    budgetEn: '30 million',
    requirements: {
      zh: '尋求具備AI視覺辨識與自主學習能力的機器人控制系統供應商，需支援多軸協同控制，並提供完整的系統整合服務。',
      en: 'Seeking robot control system suppliers with AI vision recognition and autonomous learning capabilities, supporting multi-axis coordinated control, and providing complete system integration services.'
    },
    contactPerson: '張工程師',
    contactPersonEn: 'Engineer Chang',
    contactEmail: 'engineering@tpm.com.tw',
    contactPhone: '02-2345-6789',
    certifications: ['ISO 9001', 'CE', 'RoHS'],
    companyLogo: '/assets/logos/precision-machinery.png',
    publishDate: '2025-01-15',
    viewCount: 156
  },
  {
    id: 2,
    companyName: '綠能科技發展有限公司',
    companyNameEn: 'Green Energy Technology Co., Ltd.',
    industry: '能源環境',
    industryEn: 'Energy & Environment',
    productName: '太陽能板回收處理系統',
    productNameEn: 'Solar Panel Recycling System',
    orderQuantity: '10套完整系統',
    orderQuantityEn: '10 complete systems',
    deadline: '2025-09-30',
    budget: '8000萬',
    budgetEn: '80 million',
    requirements: {
      zh: '需要環保且高效的太陽能板回收處理系統，能夠分離並回收矽晶片、銀、鋁框等材料，回收率需達95%以上。',
      en: 'Environmentally friendly and efficient solar panel recycling system required, capable of separating and recovering silicon wafers, silver, aluminum frames, etc., with a recovery rate of over 95%.'
    },
    contactPerson: '李經理',
    contactPersonEn: 'Manager Li',
    contactEmail: 'contact@greenenergy.tw',
    contactPhone: '03-1234-5678',
    certifications: ['ISO 14001', 'ISO 45001'],
    companyLogo: '/assets/logos/green-energy.png',
    publishDate: '2025-01-10',
    viewCount: 243
  },
  {
    id: 3,
    companyName: '生醫創新有限公司',
    companyNameEn: 'BioMed Innovation Ltd.',
    industry: '生技醫材',
    industryEn: 'Biotechnology & Medical',
    productName: '遠距醫療監測穿戴裝置',
    productNameEn: 'Remote Medical Monitoring Wearable Device',
    orderQuantity: '10,000台',
    orderQuantityEn: '10,000 units',
    deadline: '2025-08-31',
    budget: '5000萬',
    budgetEn: '50 million',
    requirements: {
      zh: '開發具備心率、血氧、血壓監測功能的醫療級穿戴裝置，需通過TFDA認證，並支援雲端數據傳輸與AI健康分析。',
      en: 'Develop medical-grade wearable devices with heart rate, blood oxygen, and blood pressure monitoring capabilities, TFDA certified, supporting cloud data transmission and AI health analysis.'
    },
    contactPerson: '王博士',
    contactPersonEn: 'Dr. Wang',
    contactEmail: 'innovation@biomed.com.tw',
    contactPhone: '04-8765-4321',
    certifications: ['ISO 13485', 'TFDA', 'FDA (申請中)'],
    companyLogo: '/assets/logos/biomed.png',
    publishDate: '2025-01-08',
    viewCount: 312
  }
];

export const resourceSupportData = [
  {
    id: 1,
    title: '5G測試實驗室開放使用',
    titleEn: '5G Testing Laboratory Open for Use',
    category: '實驗室',
    categoryEn: 'Laboratory',
    location: '新竹科學園區',
    locationEn: 'Hsinchu Science Park',
    equipment: ['5G基站設備', '頻譜分析儀', '網路模擬器', '天線測試艙'],
    equipmentEn: ['5G Base Station Equipment', 'Spectrum Analyzer', 'Network Simulator', 'Antenna Test Chamber'],
    description: {
      zh: '提供完整的5G通訊產品測試環境，包含Sub-6GHz與毫米波測試能力，協助新創團隊進行產品驗證與認證。',
      en: 'Provides complete 5G communication product testing environment, including Sub-6GHz and mmWave testing capabilities, assisting startups in product verification and certification.'
    },
    availableTime: '週一至週五 09:00-18:00',
    availableTimeEn: 'Monday to Friday 09:00-18:00',
    bookingRequired: true,
    feeType: '會員優惠',
    feeTypeEn: 'Member Discount',
    contactPerson: '陳研究員',
    contactPersonEn: 'Researcher Chen',
    contactEmail: 'lab@itri.org.tw',
    contactPhone: '03-5912345',
    imageUrl: '/assets/images/5g-lab.jpg'
  },
  {
    id: 2,
    title: 'AI運算資源租賃服務',
    titleEn: 'AI Computing Resource Rental Service',
    category: '運算資源',
    categoryEn: 'Computing Resources',
    location: '雲端服務',
    locationEn: 'Cloud Service',
    equipment: ['NVIDIA A100 GPU集群', 'TPU運算節點', '高速儲存系統'],
    equipmentEn: ['NVIDIA A100 GPU Cluster', 'TPU Computing Nodes', 'High-Speed Storage System'],
    description: {
      zh: '提供高效能AI運算資源，支援深度學習模型訓練與推論，按使用時數計費，適合AI新創團隊快速驗證概念。',
      en: 'Provides high-performance AI computing resources, supporting deep learning model training and inference, billed by usage hours, suitable for AI startups to quickly validate concepts.'
    },
    availableTime: '24/7 全天候服務',
    availableTimeEn: '24/7 Service',
    bookingRequired: true,
    feeType: '計時收費',
    feeTypeEn: 'Hourly Rate',
    contactPerson: '林工程師',
    contactPersonEn: 'Engineer Lin',
    contactEmail: 'aicloud@itri.org.tw',
    contactPhone: '02-87654321',
    imageUrl: '/assets/images/ai-computing.jpg'
  }
];


export const expertTalentData = [
  {
    id: 1,
    name: '張明華博士',
    nameEn: 'Dr. Ming-Hua Chang',
    title: '資深AI研究員',
    titleEn: 'Senior AI Researcher',
    expertise: ['深度學習', '電腦視覺', '自然語言處理', '強化學習'],
    expertiseEn: ['Deep Learning', 'Computer Vision', 'NLP', 'Reinforcement Learning'],
    experience: '15年AI研發經驗，曾任職於Google AI與Microsoft Research',
    experienceEn: '15 years of AI R&D experience, formerly at Google AI and Microsoft Research',
    achievements: {
      zh: [
        '發表30+篇頂級會議論文（NeurIPS, CVPR）',
        '擁有12項AI相關專利',
        '輔導5家AI新創成功募資',
        '開發多項商業化AI產品'
      ],
      en: [
        'Published 30+ papers in top conferences (NeurIPS, CVPR)',
        '12 AI-related patents',
        'Mentored 5 AI startups to successful fundraising',
        'Developed multiple commercialized AI products'
      ]
    },
    availableServices: {
      zh: ['技術諮詢', '產品顧問', '投資評估', '團隊培訓'],
      en: ['Technical Consultation', 'Product Advisory', 'Investment Evaluation', 'Team Training']
    },
    hourlyRate: 'NT$ 8,000 - 15,000',
    contactEmail: 'mhchang@expert.tw',
    profileImage: '/assets/images/expert1.jpg'
  },
  {
    id: 2,
    name: '李雅婷',
    nameEn: 'Ya-Ting Li',
    title: '生技產業資深顧問',
    titleEn: 'Senior Biotech Industry Consultant',
    expertise: ['藥物開發', '臨床試驗', '法規認證', '生技商業化'],
    expertiseEn: ['Drug Development', 'Clinical Trials', 'Regulatory Certification', 'Biotech Commercialization'],
    experience: '20年生技製藥產業經驗，曾任跨國藥廠研發總監',
    experienceEn: '20 years in biotech and pharma industry, former R&D Director at multinational pharmaceutical company',
    achievements: {
      zh: [
        '主導3項新藥開發至臨床三期',
        '協助8家生技公司取得FDA認證',
        '募資總額超過50億元',
        '成功推動2家公司IPO'
      ],
      en: [
        'Led 3 new drug developments to Phase III trials',
        'Assisted 8 biotech companies in obtaining FDA certification',
        'Total fundraising over 5 billion NTD',
        'Successfully guided 2 company IPOs'
      ]
    },
    availableServices: {
      zh: ['法規諮詢', '臨床試驗設計', '募資輔導', '商業模式規劃'],
      en: ['Regulatory Consultation', 'Clinical Trial Design', 'Fundraising Guidance', 'Business Model Planning']
    },
    hourlyRate: 'NT$ 10,000 - 18,000',
    contactEmail: 'ytli@biotech-expert.tw',
    profileImage: '/assets/images/expert2.jpg'
  }
];


export const fundingSupportData = [
  {
    id: 1,
    title: 'SBIR 小型企業創新研發計畫',
    titleEn: 'SBIR Small Business Innovation Research',
    description: '經濟部中小及新創企業署推動的創新研發補助計畫，協助中小企業進行技術與產品創新研發活動，培育研發人才，提升企業競爭力。Phase 1 最高補助100萬元，Phase 2 最高補助1,000萬元。',
    descriptionEn: 'Innovation R&D subsidy program by MOEA SME and Startup Agency, supporting SMEs in technical and product innovation, talent development, and competitiveness enhancement. Phase 1 up to NT$1M, Phase 2 up to NT$10M.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    region: '全國',
    regionEn: 'National',
    industries: ['電資通光', '機電運輸', '生技醫材', '能源環境', '服務創新'],
    amount: '最高 100 萬元 (Phase 1) / 1,000 萬元 (Phase 2)',
    amountEn: 'Up to NT$1M (Phase 1) / NT$10M (Phase 2)',
    organizer: '經濟部中小及新創企業署',
    organizerEn: 'MOEA SME and Startup Agency',
    applicationType: '隨到隨審',
    applicationTypeEn: 'Rolling Basis',
    status: '全年開放',
    statusEn: 'Year Round',
    updateDate: '2025-11-05',
    website: 'https://www.sbir.org.tw/'
  },
  {
    id: 2,
    title: 'SIIR 服務業創新研發計畫',
    titleEn: 'SIIR Service Industry Innovation Research',
    description: '經濟部商業發展署推動的服務業創新補助計畫，鼓勵服務業進行商業模式創新、智慧應用與低碳轉型，提升服務品質與競爭力。分為個別創新、合作創新和國際化進階創新三類。',
    descriptionEn: 'Service industry innovation subsidy by MOEA Commerce Development Agency, encouraging business model innovation, smart applications, and low-carbon transformation. Three categories: individual, collaborative, and international innovation.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    region: '全國',
    regionEn: 'National',
    industries: ['服務創新', '文化創意', '電資通光'],
    amount: '最高 1,000 萬元',
    amountEn: 'Up to NT$10M',
    organizer: '經濟部商業發展署',
    organizerEn: 'MOEA Commerce Development Agency',
    applicationType: '分期受理',
    applicationTypeEn: 'Periodic Application',
    status: '申請中',
    statusEn: 'Now Accepting',
    updateDate: '2025-10-30',
    website: 'https://gcis.nat.gov.tw/neo-s/Web/Default.aspx'
  },
  {
    id: 3,
    title: 'U-start 創新創業計畫',
    titleEn: 'U-start Innovation and Startup Program',
    description: '教育部青年發展署推動的大專院校創業補助計畫，鼓勵大專校院學生將創意構想轉化為創業實踐，提供創業啟動金與育成輔導。分為第一階段(最高50萬)與第二階段(最高100萬)。',
    descriptionEn: 'University startup program by Youth Development Administration, supporting college students to transform creative ideas into entrepreneurial practices. Stage 1 up to NT$500K, Stage 2 up to NT$1M.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
    region: '全國',
    regionEn: 'National',
    industries: ['電資通光', '服務創新', '文化創意', '生技醫材'],
    amount: '最高 150 萬元',
    amountEn: 'Up to NT$1.5M',
    organizer: '教育部青年發展署',
    organizerEn: 'Youth Development Administration',
    applicationType: '分期受理',
    applicationTypeEn: 'Periodic Application',
    status: '即將開放',
    statusEn: 'Coming Soon',
    updateDate: '2025-10-20',
    website: 'https://youthfirst.yda.gov.tw/'
  },
  {
    id: 4,
    title: '青年創業及啟動金貸款',
    titleEn: 'Youth Entrepreneurship and Startup Loans',
    description: '經濟部提供的青年創業貸款，協助年輕創業者取得創業初期所需資金。貸款額度最高1,200萬元，前5年政府補貼利息，適合設立登記未滿8年之中小企業。',
    descriptionEn: 'Youth entrepreneurship loan program by MOEA, helping young entrepreneurs obtain startup capital. Maximum loan of NT$12M with 5-year government interest subsidy for SMEs established less than 8 years.',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop',
    region: '全國',
    regionEn: 'National',
    industries: ['電資通光', '機電運輸', '生技醫材', '能源環境', '服務創新', '文化創意'],
    amount: '最高 1,200 萬元',
    amountEn: 'Up to NT$12M',
    organizer: '經濟部中小及新創企業署',
    organizerEn: 'MOEA SME and Startup Agency',
    applicationType: '隨到隨審',
    applicationTypeEn: 'Rolling Basis',
    status: '全年開放',
    statusEn: 'Year Round',
    updateDate: '2025-11-01',
    website: 'https://www.bot.com.tw/tw/personal-banking/loan/Personal-Policy-Loan/young-loan'
  },
  {
    id: 5,
    title: '台北市 SITI 創業補助',
    titleEn: 'Taipei SITI Startup Subsidy',
    description: '台北市產業發展局推動的創業補助計畫，支持設立於台北市之新創企業進行創新研發、品牌建立與市場拓展。補助範圍涵蓋創業、研發、品牌三大類別。',
    descriptionEn: 'Taipei SITI startup subsidy program by Taipei City Government, supporting startups in Taipei for innovation R&D, branding, and market expansion. Three categories: startup, R&D, and branding.',
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    region: '台北市',
    regionEn: 'Taipei City',
    industries: ['電資通光', '服務創新', '文化創意'],
    amount: '最高 100 萬元',
    amountEn: 'Up to NT$1M',
    organizer: '台北市產業發展局',
    organizerEn: 'Taipei City Industry Development Bureau',
    applicationType: '隨到隨審',
    applicationTypeEn: 'Rolling Basis',
    status: '申請中',
    statusEn: 'Now Accepting',
    updateDate: '2025-10-25',
    website: 'https://www.doed.gov.taipei/'
  },
  {
    id: 6,
    title: '新創圓夢網補助資源',
    titleEn: 'Taiwan Startup Terrace Resource Platform',
    description: '經濟部中小及新創企業署整合之新創補助資源平台，提供完整的創業補助資訊、申請流程與輔導資源，協助新創團隊快速找到適合的補助計畫。',
    descriptionEn: 'Integrated startup subsidy resource platform by MOEA SME and Startup Agency, providing comprehensive startup subsidy information, application processes, and counseling resources.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    region: '全國',
    regionEn: 'National',
    industries: ['電資通光', '機電運輸', '生技醫材', '能源環境', '服務創新', '文化創意'],
    amount: '依計畫而定',
    amountEn: 'Varies by Program',
    organizer: '經濟部中小及新創企業署',
    organizerEn: 'MOEA SME and Startup Agency',
    applicationType: '資源平台',
    applicationTypeEn: 'Resource Platform',
    status: '全年開放',
    statusEn: 'Year Round',
    updateDate: '2025-11-05',
    website: 'https://startup.sme.gov.tw/'
  },
  {
    id: 7,
    title: '經濟部補助計畫入口網',
    titleEn: 'MOEA Subsidy Program Portal',
    description: '經濟部整合之補助計畫申請入口網站，提供各項產業補助、研發補助、創新補助等計畫資訊，一站式申請服務，簡化申請流程。',
    descriptionEn: 'MOEA integrated subsidy program portal, providing various industry subsidies, R&D subsidies, and innovation subsidies with one-stop application service.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    region: '全國',
    regionEn: 'National',
    industries: ['電資通光', '機電運輸', '生技醫材', '能源環境', '服務創新'],
    amount: '依計畫而定',
    amountEn: 'Varies by Program',
    organizer: '經濟部',
    organizerEn: 'Ministry of Economic Affairs',
    applicationType: '資源平台',
    applicationTypeEn: 'Resource Platform',
    status: '全年開放',
    statusEn: 'Year Round',
    updateDate: '2025-11-03',
    website: 'https://service.moea.gov.tw/EE502/NewPortal/'
  },
  {
    id: 8,
    title: '文化部文化內容策進院補助',
    titleEn: 'TAICCA Cultural Content Subsidy',
    description: '文化內容策進院推動的文化創意產業補助計畫,支持影視、音樂、出版、數位內容等文化內容產業發展,提供投融資、國際拓展與產業升級補助。',
    descriptionEn: 'TAICCA cultural content industry subsidy supporting film, music, publishing, and digital content development with investment, international expansion, and industry upgrade support.',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
    region: '全國',
    regionEn: 'National',
    industries: ['文化創意', '服務創新'],
    amount: '依計畫而定',
    amountEn: 'Varies by Program',
    organizer: '文化內容策進院',
    organizerEn: 'Taiwan Creative Content Agency',
    applicationType: '分期受理',
    applicationTypeEn: 'Periodic Application',
    status: '申請中',
    statusEn: 'Now Accepting',
    updateDate: '2025-10-18',
    website: 'https://taicca.tw/'
  },
  {
    id: 9,
    title: '桃園市地方型 SBIR',
    titleEn: 'Taoyuan Local SBIR',
    description: '桃園市政府經濟發展局推動的地方型創新研發補助計畫,協助設立於桃園市之中小企業進行創新研發,補助金額最高100萬元,申請門檻較中央型SBIR更為親民。',
    descriptionEn: 'Taoyuan local SBIR program by Taoyuan City Government, supporting SMEs in Taoyuan for innovation R&D with up to NT$1M subsidy and more accessible requirements than central SBIR.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    region: '桃園市',
    regionEn: 'Taoyuan',
    industries: ['電資通光', '機電運輸', '能源環境'],
    amount: '最高 100 萬元',
    amountEn: 'Up to NT$1M',
    organizer: '桃園市政府經濟發展局',
    organizerEn: 'Taoyuan Economic Development Bureau',
    applicationType: '分期受理',
    applicationTypeEn: 'Periodic Application',
    status: '即將開放',
    statusEn: 'Coming Soon',
    updateDate: '2025-10-15',
    website: 'https://deda.tycg.gov.tw/'
  },
  {
    id: 10,
    title: '台中市地方型 SBIR',
    titleEn: 'Taichung Local SBIR',
    description: '台中市政府經濟發展局推動的地方型創新研發補助,支持設立於台中市之中小企業進行產品與技術創新,最高補助100萬元,協助企業提升競爭力與技術能量。',
    descriptionEn: 'Taichung local SBIR program supporting SMEs in Taichung for product and technology innovation with up to NT$1M subsidy, enhancing competitiveness and technical capabilities.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    region: '台中市',
    regionEn: 'Taichung',
    industries: ['機電運輸', '生技醫材', '服務創新'],
    amount: '最高 100 萬元',
    amountEn: 'Up to NT$1M',
    organizer: '台中市政府經濟發展局',
    organizerEn: 'Taichung Economic Development Bureau',
    applicationType: '分期受理',
    applicationTypeEn: 'Periodic Application',
    status: '申請中',
    statusEn: 'Now Accepting',
    updateDate: '2025-10-22',
    website: 'https://www.economic.taichung.gov.tw/'
  },
  {
    id: 11,
    title: '高雄市地方型 SBIR',
    titleEn: 'Kaohsiung Local SBIR',
    description: '高雄市政府經濟發展局推動的地方型創新研發補助計畫,鼓勵設立於高雄市之中小企業投入創新研發,補助金額最高100萬元,特別支持5G、AIoT、智慧製造等領域。',
    descriptionEn: 'Kaohsiung local SBIR program encouraging SMEs in Kaohsiung to invest in innovation R&D with up to NT$1M subsidy, particularly supporting 5G, AIoT, and smart manufacturing.',
    imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
    region: '高雄市',
    regionEn: 'Kaohsiung',
    industries: ['電資通光', '機電運輸', '能源環境'],
    amount: '最高 100 萬元',
    amountEn: 'Up to NT$1M',
    organizer: '高雄市政府經濟發展局',
    organizerEn: 'Kaohsiung Economic Development Bureau',
    applicationType: '分期受理',
    applicationTypeEn: 'Periodic Application',
    status: '全年開放',
    statusEn: 'Year Round',
    updateDate: '2025-10-28',
    website: 'https://edbkcg.kcg.gov.tw/'
  },
  {
    id: 12,
    title: 'FINDIT 新創資料庫',
    titleEn: 'FINDIT Startup Database',
    description: '國家發展委員會建置的新創資料庫與活動平台,提供新創補助資訊、創投媒合、產業資源與活動訊息,是台灣最完整的新創生態系資源整合平台。',
    descriptionEn: 'National Development Council startup database and event platform, providing subsidy information, VC matchmaking, industry resources, and events - Taiwan\'s most comprehensive startup ecosystem platform.',
    imageUrl: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
    region: '全國',
    regionEn: 'National',
    industries: ['電資通光', '機電運輸', '生技醫材', '能源環境', '服務創新', '文化創意'],
    amount: '資源平台',
    amountEn: 'Resource Platform',
    organizer: '國家發展委員會',
    organizerEn: 'National Development Council',
    applicationType: '資源平台',
    applicationTypeEn: 'Resource Platform',
    status: '全年開放',
    statusEn: 'Year Round',
    updateDate: '2025-11-05',
    website: 'https://findit.org.tw/'
  }
];