const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = path.join(__dirname, 'itri_platform.db');

// 初始化資料庫
function initDatabase() {
  const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
      console.error('❌ 資料庫連接失敗:', err.message);
      process.exit(1);
    }
    console.log('✅ 資料庫連接成功');
  });

  db.serialize(() => {
    // 1. 市場策略表
    db.run(`
      CREATE TABLE IF NOT EXISTS market_strategies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        title_en TEXT,
        publish_date TEXT NOT NULL,
        industry TEXT NOT NULL,
        tags TEXT,
        tags_en TEXT,
        summary_zh TEXT NOT NULL,
        summary_en TEXT,
        key_insights TEXT,
        key_charts TEXT,
        strategies TEXT,
        sources TEXT,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('❌ 建立 market_strategies 表失敗:', err.message);
      } else {
        console.log('✅ market_strategies 表已建立');
      }
    });

    // 2. 訂單合作表
    db.run(`
      CREATE TABLE IF NOT EXISTS order_cooperations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        company_name TEXT NOT NULL,
        company_name_en TEXT,
        industry TEXT NOT NULL,
        industry_en TEXT,
        product_name TEXT NOT NULL,
        product_name_en TEXT,
        order_quantity TEXT NOT NULL,
        order_quantity_en TEXT,
        deadline TEXT NOT NULL,
        budget TEXT NOT NULL,
        budget_en TEXT,
        requirements_zh TEXT NOT NULL,
        requirements_en TEXT,
        contact_person TEXT NOT NULL,
        contact_person_en TEXT,
        contact_email TEXT NOT NULL,
        contact_phone TEXT NOT NULL,
        certifications TEXT,
        company_logo TEXT,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('❌ 建立 order_cooperations 表失敗:', err.message);
      } else {
        console.log('✅ order_cooperations 表已建立');
      }
    });

    // 3. 資源支援表
    db.run(`
      CREATE TABLE IF NOT EXISTS resource_supports (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        title_en TEXT,
        category TEXT NOT NULL,
        category_en TEXT,
        location TEXT NOT NULL,
        location_en TEXT,
        equipment TEXT,
        equipment_en TEXT,
        description_zh TEXT NOT NULL,
        description_en TEXT,
        available_time TEXT,
        available_time_en TEXT,
        booking_required INTEGER DEFAULT 1,
        fee_type TEXT,
        fee_type_en TEXT,
        contact_person TEXT NOT NULL,
        contact_person_en TEXT,
        contact_email TEXT NOT NULL,
        contact_phone TEXT NOT NULL,
        image_url TEXT,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('❌ 建立 resource_supports 表失敗:', err.message);
      } else {
        console.log('✅ resource_supports 表已建立');
      }
    });

    // 4. 資金支援表
    db.run(`
      CREATE TABLE IF NOT EXISTS funding_supports (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        program_name TEXT NOT NULL,
        program_name_en TEXT,
        organizer TEXT NOT NULL,
        organizer_en TEXT,
        funding_amount TEXT NOT NULL,
        funding_amount_en TEXT,
        subsidy_ratio TEXT NOT NULL,
        subsidy_ratio_en TEXT,
        application_period TEXT NOT NULL,
        application_period_en TEXT,
        target_audience_zh TEXT NOT NULL,
        target_audience_en TEXT,
        requirements TEXT,
        requirements_en TEXT,
        benefits TEXT,
        benefits_en TEXT,
        contact_phone TEXT NOT NULL,
        contact_email TEXT NOT NULL,
        contact_website TEXT,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('❌ 建立 funding_supports 表失敗:', err.message);
      } else {
        console.log('✅ funding_supports 表已建立');
      }
    });

    // 5. 專家人才表
    db.run(`
      CREATE TABLE IF NOT EXISTS expert_talents (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        name_en TEXT,
        title TEXT NOT NULL,
        title_en TEXT,
        expertise TEXT NOT NULL,
        expertise_en TEXT,
        experience TEXT NOT NULL,
        experience_en TEXT,
        achievements TEXT,
        achievements_en TEXT,
        available_services TEXT,
        available_services_en TEXT,
        hourly_rate TEXT,
        contact_email TEXT NOT NULL,
        profile_image TEXT,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('❌ 建立 expert_talents 表失敗:', err.message);
      } else {
        console.log('✅ expert_talents 表已建立');
      }
    });

    // 6. 會員資料表
    db.run(`
      CREATE TABLE IF NOT EXISTS members (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        company TEXT,
        phone TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `, (err) => {
      if (err) {
        console.error('❌ 建立 members 表失敗:', err.message);
      } else {
        console.log('✅ members 表已建立');
      }
    });
  });

  db.close((err) => {
    if (err) {
      console.error('❌ 資料庫關閉失敗:', err.message);
    } else {
      console.log('✅ 資料庫初始化完成');
      console.log(`📁 資料庫位置: ${DB_PATH}`);
    }
  });
}

// 執行初始化
if (require.main === module) {
  console.log('🚀 開始初始化資料庫...\n');
  initDatabase();
}

module.exports = { DB_PATH, initDatabase };
