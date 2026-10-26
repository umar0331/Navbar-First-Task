const menuBtn = document.querySelector(".menu_btn");
const links = document.querySelector(".all_links");

menuBtn.addEventListener("click", function () {
  links.classList.toggle("active");
});
