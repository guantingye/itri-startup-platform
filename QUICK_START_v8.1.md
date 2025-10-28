# ITRI新創商情總覽平台 v8.1 快速開始指南

## 📦 安裝步驟

### 1. 解壓專案
```bash
unzip itri-startup-platform-v8.1.zip
cd itri-startup-platform-v8.1
```

### 2. 安裝依賴
```bash
npm install
```

### 3. 啟動開發伺服器
```bash
npm start
```

### 4. 訪問應用
在瀏覽器中打開：`http://localhost:3000`

## 🎯 快速體驗v8.1新功能

### 體驗會員系統雙軌提交

#### Step 1: 進入會員專區
1. 點擊右上角「會員」按鈕
2. 進入會員專區頁面

#### Step 2: 提交訂單合作
1. 點擊「新增訂單」按鈕（藍色外框，購物車圖標）
2. 填寫訂單合作表單：
   - 標題 *必填
   - 截止日期 *必填
   - 公司資訊（選填）
   - 產品需求（選填）
3. 點擊「提交」保存
4. 自動返回會員專區

#### Step 3: 提交市場策略
1. 點擊「新增策略」按鈕（藍色主色，趨勢圖標）
2. 填寫市場策略表單：
   - 標題（中文）*必填
   - 重點摘要（中文）*必填
   - 使用「+」按鈕新增多個關鍵洞察
   - 使用「+」按鈕新增多個策略建議
   - 使用「+」按鈕新增多個資料來源
   - 使用「+」按鈕新增多個標籤
3. 點擊「提交」保存
4. 自動返回會員專區

#### Step 4: 使用類型篩選
1. 在提交歷史區域，查看篩選按鈕
2. 點擊「全部」- 顯示所有提交
3. 點擊「訂單」- 僅顯示訂單類型
4. 點擊「策略」- 僅顯示策略類型
5. 觀察每個提交卡片上的類型標記：
   - 藍色標記 = 訂單
   - 粉紅色標記 = 策略

#### Step 5: 管理提交
1. 點擊提交卡片右上角的刪除按鈕
2. 確認刪除提示
3. 提交被刪除

## 🌐 多語言切換

1. 點擊右上角語言按鈕（地球圖標）
2. 選擇「中文」或「English」
3. 所有內容即時切換

## 📱 響應式測試

### 桌面端（>1200px）
- 雙欄表單佈局
- 按鈕橫排顯示
- 完整功能展示

### 平板端（768-1200px）
- 單欄表單佈局
- 按鈕橫排顯示
- 優化間距

### 移動端（<768px）
- 單欄表單佈局
- 按鈕自動適配
- 觸控優化

## 🗂️ 資料存儲說明

### LocalStorage Keys
- `itri_member_info` - 會員資訊
- `itri_submissions` - 所有提交記錄
- `itri_submission_counter` - 提交ID計數器

### 清除資料
在瀏覽器開發者工具中：
```javascript
// 清除所有會員資料
localStorage.removeItem('itri_member_info');
localStorage.removeItem('itri_submissions');
localStorage.removeItem('itri_submission_counter');
```

## 🧪 測試建議

### 功能測試清單
- [ ] 訂單合作表單提交
- [ ] 市場策略表單提交
- [ ] 動態欄位新增/刪除
- [ ] 類型篩選切換
- [ ] 提交刪除功能
- [ ] 表單驗證（必填欄位）
- [ ] 中英文語言切換
- [ ] 空狀態顯示

### 測試場景

#### 場景1：完整流程
1. 創建1個訂單提交
2. 創建2個策略提交
3. 使用篩選查看不同類型
4. 刪除1個提交
5. 確認資料正確

#### 場景2：動態欄位
1. 進入市場策略表單
2. 新增5個關鍵洞察
3. 刪除第3個
4. 新增3個策略建議
5. 提交並確認

#### 場景3：多語言
1. 使用中文創建提交
2. 切換到英文
3. 創建英文提交
4. 切換回中文
5. 確認顯示正確

## 🔧 開發指南

### 添加新的產業選項
編輯檔案：`src/components/modules/member/MarketStrategySubmit.jsx`

```javascript
const industryOptions = [
  { value: '電資通光', label: { zh: '電資通光', en: 'ICT & Optoelectronics' } },
  // 在這裡添加新選項
  { value: '新產業', label: { zh: '新產業名稱', en: 'New Industry Name' } }
];
```

### 修改提交狀態選項
編輯檔案：`src/services/memberService.js`

```javascript
// 在addSubmission方法中修改預設狀態
const newSubmission = {
  ...submission,
  status: 'pending' // 可改為 'approved', 'rejected' 等
};
```

### 自定義表單欄位
參考 `MarketStrategySubmit.jsx` 的實現方式，添加新欄位。

## 📝 常見問題

### Q1: 提交後資料在哪裡？
A: 資料存儲在瀏覽器的LocalStorage中，重新整理頁面後仍會保留。

### Q2: 如何備份資料？
A: 開發者工具 → Application → Local Storage → 複製資料

### Q3: 動態欄位最多可以添加多少個？
A: 理論上沒有限制，但建議每個欄位不超過20個以保持良好體驗。

### Q4: 是否支持編輯已提交的內容？
A: v8.1版本暫不支持編輯，可以刪除後重新創建。未來版本將添加編輯功能。

### Q5: 如何重置所有資料？
A: 在瀏覽器開發者工具的Console中執行：
```javascript
localStorage.clear();
location.reload();
```

## 🎨 UI/UX特色

### 設計亮點
- 統一的配色系統
- 流暢的動畫過渡
- 清晰的視覺層次
- 直觀的操作流程

### 互動細節
- 按鈕hover效果
- 篩選器active狀態
- 卡片懸停陰影
- 表單焦點效果

### 無障礙設計
- 清晰的標籤文字
- 適當的對比度
- 鍵盤導航支持
- 表單驗證提示

## 🚀 部署建議

### 建構生產版本
```bash
npm run build
```

### 部署到靜態網站
```bash
# 將build目錄部署到您的伺服器
# 或使用以下服務：
# - GitHub Pages
# - Netlify
# - Vercel
# - AWS S3
```

### 環境配置
根據部署環境調整 `package.json` 中的設定。

## 📞 技術支援

如有任何問題或建議：
- 📧 Email: info@itri.org.tw
- 🌐 Website: https://www.itri.org.tw
- 📖 文檔: 查看 CHANGELOG_v8.1.md

---

**祝您使用愉快！**

**版本**: v8.1  
**更新日期**: 2025-10-27
