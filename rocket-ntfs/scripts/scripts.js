const buttonOpenMenu = document.getElementById("button-open-menu");
const buttonCloseMenu = document.getElementById("button-close-menu");
const navigationTag = document.querySelector(".header-container nav");

buttonCloseMenu.classList.add("is-closed");


let windowWidth = window.innerWidth;
toggleMenuButton(windowWidth);
window.addEventListener('resize', () => {
  windowWidth = window.innerWidth;

  toggleMenuButton(windowWidth);
});


buttonOpenMenu.addEventListener("click", openNavigatioMenu);
buttonCloseMenu.addEventListener("click", closeNavigatioMenu);

function toggleMenuButton(width) {
  if (width <= 768) {
    navigationTag.classList.add("is-mobile");
    buttonOpenMenu.classList.remove("is-closed");
    buttonOpenMenu.classList.add("is-open");
    if (navigationTag.className.indexOf("nav-open")) {
      navigationTag.classList.remove("nav-open");
    }
    buttonCloseMenu.classList.remove("is-closed");
  } else {
    navigationTag.classList.remove("is-mobile");
    buttonOpenMenu.classList.add("is-closed");
    buttonOpenMenu.classList.remove("is-open");
    buttonCloseMenu.classList.add("is-closed");
  }
}

function openNavigatioMenu() {
  navigationTag.classList.add("nav-open");
  buttonCloseMenu.classList.remove("is-closed");
  buttonOpenMenu.classList.add("is-closed");
  buttonOpenMenu.classList.remove("is-open");
}

function closeNavigatioMenu() {
  navigationTag.classList.remove("nav-open");
  buttonCloseMenu.classList.add("is-closed");
  buttonOpenMenu.classList.add("is-open");
}

