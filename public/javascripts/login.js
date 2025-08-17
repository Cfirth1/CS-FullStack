// Handle login form submission

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('login-form');
  const message = document.getElementById('login-message');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
      username: form.username.value,
      password: form.password.value
    };
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(result => {
        if (result.error) {
          message.textContent = result.error;
        } else {
          message.textContent = 'Login successful!';
          form.reset();
        }
      })
      .catch(() => {
        message.textContent = 'Login failed.';
      });
  });
});
