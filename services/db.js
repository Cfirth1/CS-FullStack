// SQLite database connection for Travlr Getaways
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../db/travlr.db');
const db = new sqlite3.Database(dbPath);

module.exports = db;
