# ITRI Platform Backend Server

**版本**: 8.2.0  
**Database**: SQLite3  
**Framework**: Express.js

---

## 📋 功能特點

- ✅ RESTful API 設計
- ✅ SQLite 輕量級資料庫
- ✅ 結構化資料儲存
- ✅ 易於遷移到外部資料庫
- ✅ CORS 支持
- ✅ 大型檔案支持（Base64 圖片）

---

## 🚀 快速開始

### 1. 安裝依賴

```bash
cd server
npm install
```

### 2. 初始化資料庫

```bash
npm run init-db
```

這會在 `/server/database/` 目錄下創建 `itri_platform.db` 檔案。

### 3. 啟動服務器

```bash
npm start
```

或使用開發模式（自動重啟）：

```bash
npm run dev
```

服務器將運行於 `http://localhost:3001`

---

## 📊 資料庫結構

### 資料表清單

1. **market_strategies** - 市場策略
2. **order_cooperations** - 訂單合作
3. **resource_supports** - 資源支援
4. **funding_supports** - 資金支援
5. **expert_talents** - 專家人才
6. **members** - 會員資料

---

## 🔌 API 端點

### 健康檢查

```
GET /api/health
```

### 市場策略 API

```
GET    /api/market-strategies          # 獲取所有策略
GET    /api/market-strategies/:id      # 獲取單一策略
POST   /api/market-strategies          # 新增策略
PATCH  /api/market-strategies/:id/status  # 更新狀態
DELETE /api/market-strategies/:id      # 刪除策略
```

**查詢參數**:
- `industry` - 產業篩選 (optional)
- `status` - 狀態篩選 (pending/approved/rejected, default: approved)

### 訂單合作 API

```
GET    /api/order-cooperations         # 獲取所有訂單
GET    /api/order-cooperations/:id     # 獲取單一訂單
POST   /api/order-cooperations         # 新增訂單
PATCH  /api/order-cooperations/:id/status  # 更新狀態
DELETE /api/order-cooperations/:id     # 刪除訂單
```

**查詢參數**:
- `industry` - 產業篩選 (optional)
- `status` - 狀態篩選 (pending/approved/rejected, default: approved)

---

## 📝 API 請求範例

### 新增市場策略

```bash
curl -X POST http://localhost:3001/api/market-strategies \
  -H "Content-Type: application/json" \
  -d '{
    "title": "AI晶片市場分析",
    "titleEn": "AI Chip Market Analysis",
    "publishDate": "2025-01-15",
    "industry": "電資通光",
    "tags": ["AI", "半導體"],
    "tagsEn": ["AI", "Semiconductor"],
    "summary": "市場概況...",
    "summaryEn": "Market overview...",
    "keyInsights": [
      {
        "title": "市場成長",
        "titleEn": "Market Growth",
        "content": "內容...",
        "contentEn": "Content..."
      }
    ],
    "keyCharts": [
      {
        "imageUrl": "https://...",
        "caption": "圖表說明",
        "captionEn": "Chart caption"
      }
    ],
    "strategies": [
      {
        "zh": "策略建議",
        "en": "Strategy recommendation"
      }
    ],
    "sources": ["Source 1", "Source 2"]
  }'
```

### 獲取市場策略

```bash
# 獲取所有已核准的策略
curl http://localhost:3001/api/market-strategies

# 篩選特定產業
curl http://localhost:3001/api/market-strategies?industry=電資通光

# 獲取待審核的策略
curl http://localhost:3001/api/market-strategies?status=pending
```

### 更新狀態

```bash
curl -X PATCH http://localhost:3001/api/market-strategies/1/status \
  -H "Content-Type: application/json" \
  -d '{"status": "approved"}'
```

---

## 🗄️ 資料庫管理

### 查看資料庫

使用 SQLite 客戶端：

```bash
sqlite3 database/itri_platform.db
```

常用 SQL 指令：

```sql
-- 查看所有表
.tables

-- 查看表結構
.schema market_strategies

-- 查詢資料
SELECT * FROM market_strategies LIMIT 10;

-- 更新狀態
UPDATE market_strategies SET status = 'approved' WHERE id = 1;

-- 刪除資料
DELETE FROM market_strategies WHERE id = 1;

-- 離開
.quit
```

### 備份資料庫

```bash
cp database/itri_platform.db database/itri_platform_backup_$(date +%Y%m%d).db
```

### 重置資料庫

```bash
rm database/itri_platform.db
npm run init-db
```

---

## 🔧 配置說明

### 環境變數 (.env)

```env
PORT=3001                    # 服務器端口
NODE_ENV=development         # 環境模式
DB_PATH=./database/itri_platform.db  # 資料庫路徑
ALLOWED_ORIGINS=http://localhost:3000  # CORS 允許來源
```

---

## 📦 遷移到外部資料庫

### 1. 資料匯出

```bash
# 匯出為 SQL
sqlite3 database/itri_platform.db .dump > backup.sql

# 匯出為 JSON（需要自訂腳本）
node scripts/export-to-json.js
```

### 2. 支援的資料庫

- ✅ PostgreSQL
- ✅ MySQL / MariaDB
- ✅ MongoDB
- ✅ Cloud Databases (AWS RDS, Azure SQL, etc.)

### 3. 遷移步驟

1. 更新 `database/db.js` 使用新的資料庫連接
2. 調整資料表結構（如需要）
3. 匯入資料
4. 更新環境變數
5. 測試 API 端點

---

## 🐛 除錯與日誌

### 查看日誌

服務器運行時會輸出到控制台：

```
✅ ITRI Platform API Server 已啟動
📡 運行於: http://localhost:3001
```

### 常見問題

**Q: 資料庫鎖定錯誤**
A: 確保沒有其他程序正在使用資料庫檔案

**Q: CORS 錯誤**
A: 檢查 `.env` 中的 `ALLOWED_ORIGINS` 設定

**Q: 圖片過大**
A: 調整 `server.js` 中的 `bodyParser.json({ limit: '50mb' })`

---

## 📊 效能優化

### 建議

1. **索引** - 為常用查詢欄位添加索引
2. **連接池** - 升級到支援連接池的資料庫
3. **快取** - 使用 Redis 快取熱門數據
4. **壓縮** - 啟用 gzip 壓縮
5. **CDN** - 圖片使用 CDN 儲存

---

## 🔐 安全性

### 生產環境建議

- [ ] 啟用 HTTPS
- [ ] 添加 API 認證（JWT）
- [ ] 速率限制（rate limiting）
- [ ] 輸入驗證與清理
- [ ] SQL 注入防護
- [ ] CSRF 防護

---

## 📞 技術支援

如遇問題，請檢查：
1. 資料庫是否已初始化
2. 端口 3001 是否被占用
3. 環境變數是否正確設定
4. 前端 API_BASE_URL 是否正確

---

**開發完成日期**: 2025-10-27  
**版本**: 8.2.0  
**下一步**: 添加認證系統、檔案上傳服務
