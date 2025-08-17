// Seed the SQLite database with sample news data
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.join(__dirname, 'travlr.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    date TEXT NOT NULL,
    author TEXT NOT NULL,
    content TEXT NOT NULL
  )`);

  db.run(`DELETE FROM news`);

  const stmt = db.prepare(`INSERT INTO news (title, date, author, content) VALUES (?, ?, ?, ?)`);
  stmt.run('2023 Best Beaches Contest Winners', '2023-04-02', 'Juan De La Cruz', 'Integer magna leo, posuere et dignissim vitae, porttitor at odio...');
  stmt.run('Top 10 Diving Spots', '2023-05-29', 'Juan De La Cruz', 'Maecenas scelerisque odio quis arcu fringilla malesuada...');
  stmt.finalize();

  console.log('Database seeded with sample news data.');
});

db.close();
