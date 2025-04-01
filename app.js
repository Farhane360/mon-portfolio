const contactBtn = document.querySelector(".contact-btn");
const overlay = document.getElementById("overlay");
const contactPopup = document.getElementById("contact-popup");


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

