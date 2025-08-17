// Handle logout form submission

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('logout-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    fetch('/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          window.location.href = '/';
        }
      });
  });
});
