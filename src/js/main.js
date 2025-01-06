// Tab
const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove("tabs__btn-item--active");
  });

  tabTarget.classList.add("tabs__btn-item--active");

  tabContent.forEach(function (item) {
    item.classList.remove("tabs__content-item--active");
  });

  document
    .querySelector(`#${button}`)
    .classList.add("tabs__content-item--active");
}


// burgerBtn
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});

const menuButton = document.getElementById("menuButton");


menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
});



// fixedHeaderMain
const header = document.querySelector(".header-main");
const hero = document.querySelector("#slider");

const heroHeight = hero.offsetHeight;


window.addEventListener("scroll", () => {
  if (window.scrollY > heroHeight) {
    header.classList.add("fixed"); 
  } else {
    header.classList.remove("fixed");
  }
});


// swiper
const swiper = new Swiper(".swiper", {
  effect: "fade",
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});
