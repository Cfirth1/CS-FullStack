// Fetch and display news articles from the API

document.addEventListener('DOMContentLoaded', function() {
  const newsContainer = document.getElementById('news-list');
  const newsForm = document.getElementById('news-form');

  function loadNews() {
    fetch('/api/news')
      .then(response => response.json())
      .then(data => {
        newsContainer.innerHTML = '';
        data.forEach(article => {
          const item = document.createElement('li');
          item.innerHTML = `<h3>${article.title}</h3>
            <p><strong>Date:</strong> ${article.date} | <strong>Author:</strong> ${article.author}</p>
            <p>${article.content}</p>
            <button class="edit-btn" data-id="${article.id}">Edit</button>
            <button class="delete-btn" data-id="${article.id}">Delete</button>`;
          newsContainer.appendChild(item);
        });

        // Add event listeners for edit and delete buttons
        document.querySelectorAll('.delete-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            fetch(`/api/news/${id}`, {
              method: 'DELETE'
            })
              .then(response => response.json())
              .then(result => {
                loadNews();
              })
              .catch(err => {
                alert('Error deleting news.');
              });
          });
        });

        document.querySelectorAll('.edit-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const article = data.find(a => a.id == id);
            if (!article) return;
            // Fill form with article data for editing
            newsForm.title.value = article.title;
            newsForm.date.value = article.date;
            newsForm.author.value = article.author;
            newsForm.content.value = article.content;
            newsForm.setAttribute('data-edit-id', id);
            newsForm.querySelector('button[type="submit"]').textContent = 'Update';
          });
        });
      })
      .catch(err => {
        newsContainer.innerHTML = '<li>Error loading news.</li>';
      });
  }

  loadNews();

  if (newsForm) {
    newsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = {
        title: newsForm.title.value,
        date: newsForm.date.value,
        author: newsForm.author.value,
        content: newsForm.content.value
      };
      const editId = newsForm.getAttribute('data-edit-id');
      let url = '/api/news';
      let method = 'POST';
      if (editId) {
        url = `/api/news/${editId}`;
        method = 'PUT';
      }
      fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(result => {
          newsForm.reset();
          newsForm.removeAttribute('data-edit-id');
          newsForm.querySelector('button[type="submit"]').textContent = 'Submit';
          loadNews();
        })
        .catch(err => {
          alert('Error submitting news.');
        });
    });
  }
});
