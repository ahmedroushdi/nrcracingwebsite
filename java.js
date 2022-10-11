const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
     const visibility = primaryNav.getAttribute("data-visible");

     if (visibility === "false") {
          primaryNav.setAttribute("data-visible", "true");
          navToggle.setAttribute("aria-expanded" , "true");
     } else if (visibility === "true") {
          primaryNav.setAttribute("data-visible", false);
          navToggle.setAttribute("aria-expanded" , false);
     }
});


const times = document.querySelector(".times-mobileversion");
const timesToggle = document.querySelector(".mobile-times-toggle");

     timesToggle.addEventListener("click", () => {
     const visibility = times.getAttribute("data-visible");

     if (visibility === "false") {
          times.setAttribute("data-visible", "true");
          timesToggle.setAttribute("aria-expanded" , "true");
     } else if (visibility === "true") {
          times.setAttribute("data-visible", false);
          timesToggle.setAttribute("aria-expanded" , false);
     }
});

const droptoggle = document.querySelector(".dropdown-toggle-mob");
const dropdownmob = document.getElementById("dropdown-mob");
const dropdownmenu = dropdownmob.getElementsByClassName(".dropdown-menu-mob");

droptoggle.addEventListener("click", () =>  {
       dropdownmob.classList.toggle('open');
       droptoggle.setAttribute("aria-expanded", true);
       dropdownmenu.setAttribute("data-visible",true);
});
