const express = require('express');
const router = express.Router();
const { queryAll, queryGet, queryRun } = require('../database/db');

// 獲取所有訂單（含篩選）
router.get('/', async (req, res) => {
  try {
    const { industry, status = 'approved' } = req.query;
    
    let sql = 'SELECT * FROM order_cooperations WHERE status = ?';
    let params = [status];
    
    if (industry && industry !== 'all') {
      sql += ' AND industry = ?';
      params.push(industry);
    }
    
    sql += ' ORDER BY created_at DESC';
    
    const orders = await queryAll(sql, params);
    
    const formattedOrders = orders.map(o => ({
      id: o.id,
      companyName: o.company_name,
      companyNameEn: o.company_name_en,
      industry: o.industry,
      industryEn: o.industry_en,
      productName: o.product_name,
      productNameEn: o.product_name_en,
      orderQuantity: o.order_quantity,
      orderQuantityEn: o.order_quantity_en,
      deadline: o.deadline,
      budget: o.budget,
      budgetEn: o.budget_en,
      requirements: {
        zh: o.requirements_zh,
        en: o.requirements_en
      },
      contactPerson: o.contact_person,
      contactPersonEn: o.contact_person_en,
      contactEmail: o.contact_email,
      contactPhone: o.contact_phone,
      certifications: o.certifications ? JSON.parse(o.certifications) : [],
      companyLogo: o.company_logo,
      status: o.status,
      createdAt: o.created_at,
      updatedAt: o.updated_at
    }));
    
    res.json({
      success: true,
      data: formattedOrders
    });
  } catch (error) {
    console.error('獲取訂單失敗:', error);
    res.status(500).json({
      success: false,
      message: '獲取資料失敗',
      error: error.message
    });
  }
});

// 獲取單一訂單
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const order = await queryGet('SELECT * FROM order_cooperations WHERE id = ?', [id]);
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: '找不到該訂單'
      });
    }
    
    const formattedOrder = {
      id: order.id,
      companyName: order.company_name,
      companyNameEn: order.company_name_en,
      industry: order.industry,
      industryEn: order.industry_en,
      productName: order.product_name,
      productNameEn: order.product_name_en,
      orderQuantity: order.order_quantity,
      orderQuantityEn: order.order_quantity_en,
      deadline: order.deadline,
      budget: order.budget,
      budgetEn: order.budget_en,
      requirements: {
        zh: order.requirements_zh,
        en: order.requirements_en
      },
      contactPerson: order.contact_person,
      contactPersonEn: order.contact_person_en,
      contactEmail: order.contact_email,
      contactPhone: order.contact_phone,
      certifications: order.certifications ? JSON.parse(order.certifications) : [],
      companyLogo: order.company_logo,
      status: order.status,
      createdAt: order.created_at,
      updatedAt: order.updated_at
    };
    
    res.json({
      success: true,
      data: formattedOrder
    });
  } catch (error) {
    console.error('獲取訂單失敗:', error);
    res.status(500).json({
      success: false,
      message: '獲取資料失敗',
      error: error.message
    });
  }
});

// 新增訂單
router.post('/', async (req, res) => {
  try {
    const {
      companyName,
      companyNameEn,
      industry,
      industryEn,
      productName,
      productNameEn,
      orderQuantity,
      orderQuantityEn,
      deadline,
      budget,
      budgetEn,
      requirements,
      requirementsEn,
      contactPerson,
      contactPersonEn,
      contactEmail,
      contactPhone,
      certifications,
      companyLogo
    } = req.body;
    
    // 驗證必填欄位
    if (!companyName || !industry || !productName || !orderQuantity || 
        !deadline || !budget || !requirements || !contactPerson || 
        !contactEmail || !contactPhone) {
      return res.status(400).json({
        success: false,
        message: '缺少必填欄位'
      });
    }
    
    const sql = `
      INSERT INTO order_cooperations (
        company_name, company_name_en, industry, industry_en,
        product_name, product_name_en, order_quantity, order_quantity_en,
        deadline, budget, budget_en,
        requirements_zh, requirements_en,
        contact_person, contact_person_en,
        contact_email, contact_phone,
        certifications, company_logo, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')
    `;
    
    const params = [
      companyName,
      companyNameEn || null,
      industry,
      industryEn || null,
      productName,
      productNameEn || null,
      orderQuantity,
      orderQuantityEn || null,
      deadline,
      budget,
      budgetEn || null,
      requirements,
      requirementsEn || null,
      contactPerson,
      contactPersonEn || null,
      contactEmail,
      contactPhone,
      certifications ? JSON.stringify(certifications) : null,
      companyLogo || null
    ];
    
    const result = await queryRun(sql, params);
    
    res.status(201).json({
      success: true,
      message: '訂單新增成功',
      data: {
        id: result.id
      }
    });
  } catch (error) {
    console.error('新增訂單失敗:', error);
    res.status(500).json({
      success: false,
      message: '新增失敗',
      error: error.message
    });
  }
});

// 更新訂單狀態
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
      'UPDATE order_cooperations SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
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

// 刪除訂單
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await queryRun('DELETE FROM order_cooperations WHERE id = ?', [id]);
    
    res.json({
      success: true,
      message: '刪除成功'
    });
  } catch (error) {
    console.error('刪除訂單失敗:', error);
    res.status(500).json({
      success: false,
      message: '刪除失敗',
      error: error.message
    });
  }
});

module.exports = router;
