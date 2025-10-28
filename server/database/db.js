const sqlite3 = require('sqlite3').verbose();
const { DB_PATH } = require('./init');

// 建立資料庫連接
function getDatabase() {
  return new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
      console.error('資料庫連接錯誤:', err.message);
    }
  });
}

// Promise 包裝的查詢方法
function queryAll(sql, params = []) {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    db.all(sql, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
      db.close();
    });
  });
}

function queryGet(sql, params = []) {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    db.get(sql, params, (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
      db.close();
    });
  });
}

function queryRun(sql, params = []) {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    db.run(sql, params, function(err) {
      if (err) {
        reject(err);
      } else {
        resolve({ id: this.lastID, changes: this.changes });
      }
      db.close();
    });
  });
}

module.exports = {
  getDatabase,
  queryAll,
  queryGet,
  queryRun
};
