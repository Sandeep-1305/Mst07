// Toggle menu for mobile screens
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', (event) => {
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();

    if (!name || !email || !message) {
        alert("All fields are required!");
        event.preventDefault();
    }
});

// Modal functionality
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');

setTimeout(() => {
    modal.style.display = 'flex';
}, 2000);  // Show modal after 2 seconds

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});
