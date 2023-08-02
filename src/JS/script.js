// // TopMenu
// const toggleMenuBtn = document.querySelector("#menu-btn");
// const toggleMenuImg = document.querySelector("#menu-btn img");
// const toggledMenu = document.querySelector("#toggled-menu");
// // const menuLinks = document.querySelector("#nav-bar ul a");
// const menuLinks = document.querySelector("#competencesLink");
// const projetsLink = document.querySelector("#projetsLink");


// toggleMenuBtn.addEventListener("click", toggleNav);
// menuLinks.addEventListener("click", toggleNav);
// projetsLink.addEventListener("click", toggleNav);

// function toggleNav() {
//     toggledMenu.classList.toggle("-translate-y-full")

//     if (toggledMenu.classList.contains("-translate-y-full")) {
//         toggleMenuImg.setAttribute("src", "./assets/logos/logo_menu/menu.svg")
//         toggleMenuBtn.setAttribute("aria-expanded", "false")
//     }
//     else {
//         toggleMenuImg.setAttribute("src", "./assets/logos/logo_menu/cross.svg")
//         toggleMenuBtn.setAttribute("aria-expanded", "true")
//     }
// }

// // AsideMenu
// const toggleAsideBtn = document.querySelector("#aside-btn");
// const competencesLink = document.querySelector("#competencesLink");
// const toggleAsideImg = document.querySelector("#aside-btn img");
// const toggledAside = document.querySelector("#toggled-aside");


// toggleAsideBtn.addEventListener("click", toggleAside);
// competencesLink.addEventListener("click", toggleAside);
// projetsLink.addEventListener("click", toggleAside);

// function toggleAside() {
//     toggledAside.classList.toggle("-translate-x-full")

//     if (toggledAside.classList.contains("-translate-x-full")) {
//         toggleAsideImg.setAttribute("src", "./assets/logos/logo_menu/menu.svg")
//         toggleAsideBtn.setAttribute("aria-expanded", "false")
//     }
//     else {
//         toggleAsideImg.setAttribute("src", "./assets/logos/logo_menu/cross.svg")
//         toggleAsideBtn.setAttribute("aria-expanded", "true")
//     }
// }

// Attendre que le document soit chargé
// document.addEventListener("DOMContentLoaded", function () {
const lienDelai = document.querySelectorAll(".lienDelai");

function onClickHandler(event) {
    event.preventDefault();

    const delai = 2500;

    // Redirige vers le lien après le délai
    setTimeout(function () {
        // window.location.href = lienDelai.a.getAttribute("href");
        console.log(lienDelai.nodeList)
    }, delai);
}
lienDelai.forEach(lien => {
    lien.addEventListener("click", onClickHandler);

})

const lienDelai2 = document.querySelectorAll(".lienDelai > a ");
lienDelai2.forEach(lienDelai => {
    lienDelai.addEventListener("click", (event) => {
        event.preventDefault()
    });
})

// });
