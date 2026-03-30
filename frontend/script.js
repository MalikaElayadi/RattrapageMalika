// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application chargée');
    
    // Ajouter des événements aux liens de navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Fonction pour afficher un message dans la console
function logMessage(message) {
    console.log(message);
}

// Fonction pour ajouter une classe à un élément
function addClass(element, className) {
    if (element) {
        element.classList.add(className);
    }
}

// Fonction pour supprimer une classe d'un élément
function removeClass(element, className) {
    if (element) {
        element.classList.remove(className);
    }
}

// Fonction pour basculer une classe
function toggleClass(element, className) {
    if (element) {
        element.classList.toggle(className);
    }
}

logMessage('Script JavaScript chargé avec succès');
