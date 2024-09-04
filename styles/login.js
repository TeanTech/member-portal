
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // TO DO: Implement API call to authenticate member
  // For now, just log the credentials to the console
  console.log(`Username: ${username}, Password: ${password}`);

  // If the API call is successful, redirect to the member dashboard
  // For now, just display a success message
  errorMessage.textContent = 'Login successful!';
});