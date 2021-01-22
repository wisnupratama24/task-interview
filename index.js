const burger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    burger.classList.add("change");
    menu.classList.remove("hidden");
  } else {
    burger.classList.remove("change");
    menu.classList.add("hidden");
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("nav").classList.add("bg-gray-200");
  } else {
    document.querySelector("nav").classList.remove("bg-gray-200");
  }
}
