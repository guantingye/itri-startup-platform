const express = require('express');
const router = express.Router();
const { queryAll, queryGet, queryRun } = require('../database/db');

// 獲取所有市場策略（含篩選）
router.get('/', async (req, res) => {
  try {
    const { industry, status = 'approved' } = req.query;
    
    let sql = 'SELECT * FROM market_strategies WHERE status = ?';
    let params = [status];
    
    if (industry && industry !== 'all') {
      sql += ' AND industry = ?';
      params.push(industry);
    }
    
    sql += ' ORDER BY publish_date DESC';
    
    const strategies = await queryAll(sql, params);
    
    // 解析 JSON 字段
    const formattedStrategies = strategies.map(s => ({
      id: s.id,
      title: s.title,
      titleEn: s.title_en,
      publishDate: s.publish_date,
      industry: s.industry,
      tags: s.tags ? JSON.parse(s.tags) : [],
      tagsEn: s.tags_en ? JSON.parse(s.tags_en) : [],
      summary: {
        zh: s.summary_zh,
        en: s.summary_en
      },
      keyInsights: s.key_insights ? JSON.parse(s.key_insights) : [],
      keyCharts: s.key_charts ? JSON.parse(s.key_charts) : [],
      strategies: s.strategies ? JSON.parse(s.strategies) : [],
      sources: s.sources ? JSON.parse(s.sources) : [],
      status: s.status,
      createdAt: s.created_at,
      updatedAt: s.updated_at
    }));
    
    res.json({
      success: true,
      data: formattedStrategies
    });
  } catch (error) {
    console.error('獲取市場策略失敗:', error);
    res.status(500).json({
      success: false,
      message: '獲取資料失敗',
      error: error.message
    });
  }
});

// 獲取單一市場策略
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const strategy = await queryGet('SELECT * FROM market_strategies WHERE id = ?', [id]);
    
    if (!strategy) {
      return res.status(404).json({
        success: false,
        message: '找不到該策略報告'
      });
    }
    
    const formattedStrategy = {
      id: strategy.id,
      title: strategy.title,
      titleEn: strategy.title_en,
      publishDate: strategy.publish_date,
      industry: strategy.industry,
      tags: strategy.tags ? JSON.parse(strategy.tags) : [],
      tagsEn: strategy.tags_en ? JSON.parse(strategy.tags_en) : [],
      summary: {
        zh: strategy.summary_zh,
        en: strategy.summary_en
      },
      keyInsights: strategy.key_insights ? JSON.parse(strategy.key_insights) : [],
      keyCharts: strategy.key_charts ? JSON.parse(strategy.key_charts) : [],
      strategies: strategy.strategies ? JSON.parse(strategy.strategies) : [],
      sources: strategy.sources ? JSON.parse(strategy.sources) : [],
      status: strategy.status,
      createdAt: strategy.created_at,
      updatedAt: strategy.updated_at
    };
    
    res.json({
      success: true,
      data: formattedStrategy
    });
  } catch (error) {
    console.error('獲取市場策略失敗:', error);
    res.status(500).json({
      success: false,
      message: '獲取資料失敗',
      error: error.message
    });
  }
});

// 新增市場策略
router.post('/', async (req, res) => {
  try {
    const {
      title,
      titleEn,
      publishDate,
      industry,
      tags,
      tagsEn,
      summary,
      summaryEn,
      keyInsights,
      keyCharts,
      strategies,
      sources
    } = req.body;
    
    // 驗證必填欄位
    if (!title || !publishDate || !industry || !summary) {
      return res.status(400).json({
        success: false,
        message: '缺少必填欄位'
      });
    }
    
    const sql = `
      INSERT INTO market_strategies (
        title, title_en, publish_date, industry,
        tags, tags_en, summary_zh, summary_en,
        key_insights, key_charts, strategies, sources,
        status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')
    `;
    
    const params = [
      title,
      titleEn || null,
      publishDate,
      industry,
      tags ? JSON.stringify(tags) : null,
      tagsEn ? JSON.stringify(tagsEn) : null,
      summary,
      summaryEn || null,
      keyInsights ? JSON.stringify(keyInsights) : null,
      keyCharts ? JSON.stringify(keyCharts) : null,
      strategies ? JSON.stringify(strategies) : null,
      sources ? JSON.stringify(sources) : null
    ];
    
    const result = await queryRun(sql, params);
    
    res.status(201).json({
      success: true,
      message: '市場策略新增成功',
      data: {
        id: result.id
      }
    });
  } catch (error) {
    console.error('新增市場策略失敗:', error);
    res.status(500).json({
      success: false,
      message: '新增失敗',
      error: error.message
    });
  }
});

// 更新市場策略狀態
router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: '無效的狀態值'
      });
    }
    
    await queryRun(
      'UPDATE market_strategies SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [status, id]
    );
    
    res.json({
      success: true,
      message: '狀態更新成功'
    });
  } catch (error) {
    console.error('更新狀態失敗:', error);
    res.status(500).json({
      success: false,
      message: '更新失敗',
      error: error.message
    });
  }
});

// 刪除市場策略
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await queryRun('DELETE FROM market_strategies WHERE id = ?', [id]);
    
    res.json({
      success: true,
      message: '刪除成功'
    });
  } catch (error) {
    console.error('刪除市場策略失敗:', error);
    res.status(500).json({
      success: false,
      message: '刪除失敗',
      error: error.message
    });
  }
});

module.exports = router;
