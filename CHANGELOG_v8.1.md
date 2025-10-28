# ITRI新創商情總覽平台 v8.1 更新說明

## 版本資訊
- **版本號**：v8.1
- **基於版本**：v8.0
- **更新日期**：2025-10-27

## 主要更新內容

### 1. 會員系統提交類型功能
實現了會員提交的雙軌制，支持「訂單合作」和「市場策略」兩種提交類型。

### 2. 新增功能詳細說明

#### 2.1 會員專區雙按鈕提交
**位置**：`src/components/modules/member/MemberZone.jsx`

**更新內容**：
- 新增「新增訂單」按鈕（藍色外框，購物車圖標）
- 新增「新增策略」按鈕（藍色主色，趨勢圖標）
- 按鈕並排顯示，在移動端自動適配

**功能**：
- 點擊「新增訂單」跳轉至訂單合作表單
- 點擊「新增策略」跳轉至市場策略表單

#### 2.2 市場策略提交表單
**新檔案**：`src/components/modules/member/MarketStrategySubmit.jsx`

**表單欄位**：

**基本資訊**：
- 標題（中文）*必填
- 標題（英文）
- 發布日期
- 產業分類（5選項下拉選單）

**內容**：
- 重點摘要（中文）*必填
- 重點摘要（英文）

**關鍵洞察（可多項）**：
- 洞察（中文）- 動態新增/刪除
- 洞察（英文）- 動態新增/刪除

**策略建議（可多項）**：
- 建議（中文）- 動態新增/刪除
- 建議（英文）- 動態新增/刪除

**其他資訊**：
- 資料來源 - 動態新增/刪除
- 相關主題標籤（中文）- 動態新增/刪除
- 相關主題標籤（英文）- 動態新增/刪除

**設計特色**：
- 動態欄位支持（+ 按鈕新增，X 按鈕刪除）
- 雙語言支持（中英文）
- 響應式設計
- 與現有UI風格一致

#### 2.3 會員服務更新
**檔案**：`src/services/memberService.js`

**更新方法**：

```javascript
// getSubmissions - 支持類型篩選
getSubmissions(type = null)
// type: null | 'order' | 'strategy'
// 返回所有或特定類型的提交

// addSubmission - 支持類型參數
addSubmission(submission, type = 'order')
// type: 'order' | 'strategy'
// 保存時自動加上type屬性
```

#### 2.4 路由更新
**檔案**：`src/App.jsx`

**新增路由**：
- `member-submit-order`：訂單合作表單
- `member-submit-strategy`：市場策略表單

**路由邏輯**：
- 會員專區根據按鈕類型跳轉不同表單
- 表單提交成功後返回會員專區

#### 2.5 提交歷史功能增強
**檔案**：`src/components/modules/member/MemberZone.jsx`

**新增功能**：

**類型篩選器**：
- 全部（顯示所有類型）
- 訂單（僅顯示訂單類型）
- 策略（僅顯示策略類型）

**類型標記顯示**：
- 每個提交卡片顯示類型徽章
- 訂單：藍色徽章
- 策略：粉紅色徽章

**空狀態優化**：
- 根據篩選類型顯示不同提示
- 提供快速創建按鈕

#### 2.6 樣式更新
**檔案**：`src/components/modules/member/MemberZone.css`

**新增樣式類**：
- `.submissions-header` - 提交歷史標題與篩選器容器
- `.type-filter` - 類型篩選按鈕組
- `.filter-btn` - 篩選按鈕樣式
- `.filter-btn.active` - 激活狀態
- `.type-badge` - 類型標記
- `.type-badge.type-order` - 訂單標記（藍色）
- `.type-badge.type-strategy` - 策略標記（粉紅色）
- `.dynamic-fields` - 動態欄位容器
- `.dynamic-field-row` - 動態欄位行
- `.btn-icon` - 圖標按鈕（刪除用）
- `.btn.btn-sm` - 小尺寸按鈕

## 文件結構更新

```
src/
├── components/
│   └── modules/
│       └── member/
│           ├── MemberZone.jsx          (已更新)
│           ├── MemberSubmit.jsx        (已更新)
│           ├── MarketStrategySubmit.jsx (新增)
│           └── MemberZone.css          (已更新)
├── services/
│   └── memberService.js                (已更新)
└── App.jsx                             (已更新)
```

## 使用方式

### 提交訂單合作
1. 進入會員專區
2. 點擊「新增訂單」按鈕
3. 填寫訂單合作表單
4. 點擊「提交」保存

### 提交市場策略
1. 進入會員專區
2. 點擊「新增策略」按鈕
3. 填寫市場策略表單
4. 使用「+」按鈕新增多個洞察、策略等
5. 點擊「提交」保存

### 查看提交歷史
1. 在會員專區查看所有提交
2. 使用篩選按鈕切換顯示類型
3. 每個提交顯示類型標記
4. 點擊刪除按鈕可刪除提交

## 資料格式

### 訂單合作提交
```javascript
{
  id: 1,
  type: 'order',
  title: '訂單標題',
  postDate: '2025-10-27',
  deadline: '2025-12-31',
  companyName: '公司名稱',
  // ... 其他訂單欄位
  status: 'pending',
  submittedAt: '2025-10-27T10:00:00.000Z'
}
```

### 市場策略提交
```javascript
{
  id: 2,
  type: 'strategy',
  title: '策略報告標題',
  titleEn: 'Strategy Report Title',
  publishDate: '2025-10-27',
  industry: '電資通光',
  summary: '重點摘要',
  summaryEn: 'Executive Summary',
  keyInsights: ['洞察1', '洞察2'],
  keyInsightsEn: ['Insight 1', 'Insight 2'],
  strategies: ['策略1', '策略2'],
  strategiesEn: ['Strategy 1', 'Strategy 2'],
  sources: ['來源1', '來源2'],
  tags: ['標籤1', '標籤2'],
  tagsEn: ['Tag 1', 'Tag 2'],
  status: 'pending',
  submittedAt: '2025-10-27T10:00:00.000Z'
}
```

## 技術細節

### LocalStorage資料結構
所有提交資料存儲在 `itri_submissions` key中，每個提交都包含type欄位用於區分類型。

### 響應式設計
- 桌面端：雙欄表單佈局，按鈕橫排
- 平板端：單欄表單佈局，按鈕橫排
- 移動端：單欄表單佈局，按鈕適配

### 國際化支持
- 完整的中英文雙語支持
- 根據用戶語言設定自動切換
- 表單欄位、按鈕、提示均支持雙語

## 向後兼容性

- 保留所有v8.0功能
- 現有訂單資料自動視為type='order'
- 不影響其他模組功能
- 設計風格完全一致

## 測試建議

### 功能測試
1. 測試訂單合作表單提交
2. 測試市場策略表單提交
3. 測試類型篩選功能
4. 測試動態欄位新增/刪除
5. 測試提交刪除功能
6. 測試表單驗證
7. 測試語言切換

### 響應式測試
1. 測試桌面端佈局
2. 測試平板端佈局
3. 測試移動端佈局
4. 測試按鈕排列

### 瀏覽器兼容測試
- Chrome
- Firefox
- Safari
- Edge

## 已知問題
無

## 未來優化建議

1. 增加批量操作功能
2. 增加導出功能
3. 增加高級搜索功能
4. 增加提交編輯功能
5. 增加草稿保存功能

## 聯絡資訊
如有任何問題或建議，請聯繫開發團隊。

---

**版本歷史**
- v8.0: 圖片顯示修復、市場策略功能頁
- v8.1: 會員系統提交類型選擇功能
