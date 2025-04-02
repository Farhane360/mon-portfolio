const contactBtn = document.querySelector(".contact-btn");
const overlay = document.getElementById("overlay");
const contactPopup = document.getElementById("contact-popup");
const menuButton = document.querySelector('.menu');
const menu = document.querySelector('ul');
const body = document.querySelector('body');


// Fonction pour ouvrir le popup
contactBtn.addEventListener("click", () => {
    contactPopup.style.visibility = "visible"; 
    contactPopup.style.opacity = "1"; 
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
});

// Fermer le popup en cliquant en dehors
overlay.addEventListener("click", () => {
    contactPopup.style.visibility = "hidden";
    contactPopup.style.opacity = "0";
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
});

// Fonction pour ouvrir le menu
menuButton.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Fermer le menu quand on clique en dehors de celui-ci
body.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
        menu.classList.remove('show');
    }
});
