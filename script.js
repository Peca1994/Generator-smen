// Funkce pro otevření/zavření menu
function toggleMenu() {
    const menu = document.getElementById("menuContent");
    menu.classList.toggle("show");
}

// Zavření menu, pokud uživatel klikne kamkoliv mimo něj
window.onclick = function(event) {
    if (!event.target.matches('.menu-btn') && !event.target.closest('.menu-btn')) {
        const dropdowns = document.getElementsByClassName("menu-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}