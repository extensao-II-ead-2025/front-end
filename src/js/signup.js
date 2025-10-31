// Alternar visibilidade das senhas
const toggleButtons = document.querySelectorAll('.togglePassword');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const input = button.parentElement.querySelector('input');
        const icon = button.querySelector('span');

        const isHidden = input.getAttribute('type') === 'password';
        input.setAttribute('type', isHidden ? 'text' : 'password');
        icon.textContent = isHidden ? 'visibility_off' : 'visibility';
    });
});