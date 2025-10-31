const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
const icon = togglePassword.querySelector('span');

togglePassword.addEventListener('click', () => {
  const isHidden = password.getAttribute('type') === 'password';
  password.setAttribute('type', isHidden ? 'text' : 'password');

  // Troca o ícone
  icon.textContent = isHidden ? 'visibility_off' : 'visibility';
});