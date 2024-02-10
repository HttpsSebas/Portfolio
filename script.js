document.addEventListener("DOMContentLoaded", function() {
    const darkmode = document.getElementById("DarkMode");
    const navbar = document.getElementById("navbar");
    const banner = document.getElementById("banner");
    const par = document.getElementById("par");
    const navlinks = document.getElementsByClassName("nav-link");

    let darkModeEnabled = false;

    darkmode.addEventListener("click", function(){   
        if (darkModeEnabled) {
            // Cambiar al modo claro
            navbar.style.backgroundColor = "#FFFFFF";
            banner.style.backgroundColor = "#FFFFFF";
            darkmode.style.backgroundColor = "#000000";
            darkmode.style.color = "#FFFFFF";
            par.style.color = "#000000";

            for (let i = 0; i < navlinks.length; i++) {
                navlinks[i].style.color = "#000000";
            }

            darkModeEnabled = false;
        } else {
            // Cambiar al modo oscuro
            navbar.style.backgroundColor = "#000000";
            banner.style.backgroundColor = "#000000";
            darkmode.style.backgroundColor = "#FFFFFF";
            darkmode.style.color = "#000000";
            par.style.color = "#FFFFFF";

            for (let i = 0; i < navlinks.length; i++) {
                navlinks[i].style.color = "#FFFFFF";
            }

            darkModeEnabled = true;
        }
        });
});