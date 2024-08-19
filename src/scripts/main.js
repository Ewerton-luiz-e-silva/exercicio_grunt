// main.js

document.addEventListener('DOMContentLoaded', function() {
    var updateButton = document.getElementById('updateButton');
    var message = document.getElementById('message');

    updateButton.addEventListener('click', function() {
        message.textContent = 'Mensagem Atualizada!';
    });
});