// Handle registration form submission

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('register-form');
  const message = document.getElementById('register-message');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value
    };
    fetch('/auth/register', {
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
          message.textContent = 'Registration successful!';
          form.reset();
        }
      })
      .catch(() => {
        message.textContent = 'Registration failed.';
      });
  });
});
