document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
});

// Fechar o menu ao clicar em um link
var menuLinks = document.querySelectorAll('#menu ul li a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById('menu').classList.remove('show');
    });
});
