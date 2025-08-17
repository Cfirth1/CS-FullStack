// Service to interact with news table in SQLite
const db = require('./db');

function getAllNews(callback) {
  db.all('SELECT * FROM news ORDER BY date DESC', [], (err, rows) => {
    callback(err, rows);
  });
}

function addNews(news, callback) {
  const { title, date, author, content } = news;
  db.run(
    'INSERT INTO news (title, date, author, content) VALUES (?, ?, ?, ?)',
    [title, date, author, content],
    function(err) {
      callback(err, { id: this.lastID });
    }
  );
}

function updateNews(id, news, callback) {
  const { title, date, author, content } = news;
  db.run(
    'UPDATE news SET title = ?, date = ?, author = ?, content = ? WHERE id = ?',
    [title, date, author, content, id],
    function(err) {
      callback(err, { changes: this.changes });
    }
  );
}

function deleteNews(id, callback) {
  db.run('DELETE FROM news WHERE id = ?', [id], function(err) {
    callback(err, { changes: this.changes });
  });
}

module.exports = {
  getAllNews,
  addNews,
  updateNews,
  deleteNews
};
