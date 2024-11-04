const dropdownButton = document.getElementById('dropdownButtons');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});