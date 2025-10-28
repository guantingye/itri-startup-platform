const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' })); // 支持大型 Base64 圖片
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// 靜態檔案服務
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
const marketStrategiesRouter = require('./routes/marketStrategies');
const orderCooperationsRouter = require('./routes/orderCooperations');

app.use('/api/market-strategies', marketStrategiesRouter);
app.use('/api/order-cooperations', orderCooperationsRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'ITRI Platform API Server is running',
    version: '8.2.0',
    timestamp: new Date().toISOString()
  });
});

// 404 處理
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

// 錯誤處理
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 啟動服務器
app.listen(PORT, () => {
  console.log('\n🚀 ========================================');
  console.log(`✅ ITRI Platform API Server 已啟動`);
  console.log(`📡 運行於: http://localhost:${PORT}`);
  console.log(`📊 健康檢查: http://localhost:${PORT}/api/health`);
  console.log(`📝 市場策略 API: http://localhost:${PORT}/api/market-strategies`);
  console.log(`📦 訂單合作 API: http://localhost:${PORT}/api/order-cooperations`);
  console.log('========================================\n');
});

module.exports = app;
