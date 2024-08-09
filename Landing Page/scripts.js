// scripts.js

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    alert(`Thank you for registering, ${name}! We'll contact you at ${email}.`);
});
