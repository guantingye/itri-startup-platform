# ITRI 新創商情總覽平台 v8.1 - Member System Enhancement Edition

## 🚀 v8.1 最新更新

**會員系統雙軌提交功能！支持訂單合作與市場策略兩種提交類型。**

### 核心新功能
- ✅ 雙按鈕提交入口（訂單/策略）
- ✅ 市場策略提交表單
- ✅ 類型篩選查看功能
- ✅ 動態多欄位表單
- ✅ 提交類型標記顯示

---

## 📋 v8.1 功能詳情

### 1. 會員專區雙按鈕提交
- **新增訂單**按鈕 - 跳轉至訂單合作表單
- **新增策略**按鈕 - 跳轉至市場策略表單
- 響應式按鈕佈局，移動端自動適配

### 2. 市場策略提交表單
**基本資訊**：
- 標題（中英文）
- 發布日期
- 產業分類（5選項）

**內容**：
- 重點摘要（中英文）
- 關鍵洞察（動態多項）
- 策略建議（動態多項）

**其他資訊**：
- 資料來源（動態多項）
- 相關主題標籤（中英文，動態多項）

**特色**：
- 動態欄位（+ 新增 / X 刪除）
- 完整雙語支持
- 表單驗證

### 3. 提交歷史增強
**類型篩選**：
- 全部提交
- 僅訂單
- 僅策略

**類型標記**：
- 訂單標記（藍色）
- 策略標記（粉紅色）

**優化體驗**：
- 根據篩選條件顯示空狀態
- 快速創建按鈕
- 刪除確認提示

### 4. 資料管理升級
- 支持type參數（'order' | 'strategy'）
- 按類型篩選查詢
- LocalStorage自動保存
- 向後兼容現有資料

---

## 🚀 快速開始

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm start

# 建構生產版本
npm run build

# 訪問應用
http://localhost:3000
```

---

## 📊 圖表說明

### Treemap - 應用領域分布
- 10個應用領域
- 色塊大小代表比例
- 顯示數量和百分比
- Hover放大效果

### 柱狀圖 - 參與投資情況
- 4類投資者對比
- 高度代表數量
- 數值顯示在柱頂
- 統一藍色配色

### 折線圖 - 投資者趨勢
- 4條趨勢線
- 2015-2024共10年
- 不同顏色區分
- 最後一點顯示數值

---

## 🌐 多語言支援

### 切換方式
1. 點擊Header右上角語言圖標
2. 選擇「中文」或「English」
3. 全部內容即時切換

### 支援範圍
- ✅ 系統介面文字
- ✅ 圖表標題和標籤
- ✅ 數據內容
- ✅ 公司資訊
- ✅ 產品需求
- ✅ 提示訊息

---

## 📂 專案結構

```
itri-startup-platform-v8.1/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ModuleNav.jsx
│   │   │   └── TimelineBanner.jsx
│   │   │
│   │   ├── modules/
│   │   │   ├── Overview.jsx            # 圖表儀表板
│   │   │   ├── MarketStrategy.jsx      # 市場策略頁面
│   │   │   ├── OrderCooperation.jsx    # 訂單合作頁面
│   │   │   ├── ResourceSupport.jsx
│   │   │   ├── FundingSupport.jsx
│   │   │   ├── ExpertTalent.jsx
│   │   │   └── member/                 # 會員系統 ⭐
│   │   │       ├── MemberZone.jsx      # 會員專區（已增強）
│   │   │       ├── MemberSubmit.jsx    # 訂單提交表單
│   │   │       ├── MarketStrategySubmit.jsx # 策略提交表單 ⭐NEW
│   │   │       └── MemberZone.css      # 會員樣式（已增強）
│   │   │
│   │   └── shared/
│   │       ├── PageHeader.jsx
│   │       └── CollapsibleFilter.jsx
│   │
│   ├── services/
│   │   └── memberService.js            # 會員服務（已更新）⭐
│   │
│   ├── data/
│   │   └── mockData.js
│   │
│   ├── locales/
│   │   ├── zh.json
│   │   └── en.json
│   │
│   ├── styles/
│   │   ├── variables.css
│   │   └── global.css
│   │
│   ├── App.jsx                         # 路由（已更新）⭐
│   ├── App.css
│   ├── index.js
│   └── i18n.js
│
├── public/
│   ├── index.html
│   └── assets/
│       ├── logos/
│       └── images/
│
├── package.json
├── README.md
└── CHANGELOG_v8.1.md                   # 更新日誌 ⭐NEW
```

---

## 🎨 設計系統

### 配色方案
```
主色: #00ABEB (藍色)
成功: #10B981 (綠色)
錯誤: #EF4444 (紅色)
警告: #F59E0B (橙色)

Treemap色彩:
醫療: #00D9D9
硬體: #FFD700
能源: #00D9C4
AI: #FF9A56
...
```

### 圖表配色
- 企業/企業創投: #00ABEB
- 創投: #6366F1
- 國發基金: #10B981
- 海外投資人: #F59E0B

---

## 🔧 自定義指南

### 修改Treemap數據
```javascript
// src/components/modules/Overview.jsx
const fieldDistribution = [
  { 
    field: { zh: '醫療保健', en: 'Health Care' },
    count: 19,
    percentage: 15.2,
    color: '#00D9D9'
  }
];
```

### 修改柱狀圖數據
```javascript
const investmentParticipation = [
  { 
    type: { zh: '企業/企業創投', en: 'Corporate/CVC' },
    count: 2841
  }
];
```

### 修改折線圖數據
```javascript
const investorTrend = {
  years: ['2015', '2016', ..., '2024'],
  series: [
    {
      name: { zh: '企業/企業創投', en: 'Corporate/CVC' },
      data: [176, 195, ..., 428]
    }
  ]
};
```

---

## 📱 響應式設計

| 螢幕尺寸 | 寬度 | Overview | 訂單合作 |
|----------|------|----------|----------|
| Desktop | >1200px | 2列圖表 | Logo左+資訊右 |
| Tablet | 768-1200px | 1列圖表 | Logo上+資訊下 |
| Mobile | <768px | 垂直排列 | 全部垂直 |

---

## 📚 文檔

- [v8.1更新日誌](CHANGELOG_v8.1.md) - 詳細更新說明
- [快速開始指南](#-快速開始) - 安裝與運行
- [功能詳情](#-v81-功能詳情) - 新功能說明
- [專案結構](#-專案結構) - 目錄說明

---

## 🛠️ 技術棧

- React 18.2.0
- React i18next 13.5.0
- React Icons 5.0.1
- Pure CSS + SVG Charts

---

## 📝 版本歷史

### v8.1 (2025-10-27) ⭐最新
- ✅ 會員系統雙軌提交（訂單/策略）
- ✅ 市場策略提交表單
- ✅ 提交類型篩選功能
- ✅ 動態多欄位表單
- ✅ 類型標記顯示
- ✅ memberService增強
- ✅ 完整雙語支持

### v8.0 (2025-10-27)
- 圖片顯示修復
- 市場策略功能頁
- 豐富Mock Data

### v5.0 (2025-10-26)
- ✅ Overview圖表擴充
- ✅ 完整多語言支援
- ✅ 訂單合作優化
- ✅ UIUX持續優化

### v4.0 (2025-10-26)
- Overview專業圖表
- 專業連續時間軸
- Logo與圖片管理
- 多語言基礎

### v3.0 (2025-10-26)
- Overview專業化
- Timeline簡化

---

## 📞 聯絡資訊

- 📧 Email: info@itri.org.tw
- 🌐 Website: https://www.itri.org.tw

---

**版本**: v8.1 Member System Enhancement Edition  
**發布**: 2025-10-27  
**代號**: Dual-Track Submission System

**✨ 雙軌提交、類型篩選、動態表單、極致體驗！**
