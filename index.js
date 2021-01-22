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
