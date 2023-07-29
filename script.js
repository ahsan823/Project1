let menu = document.getElementById("menu");
let navbar = document.querySelector(".navlist");
menu.addEventListener("click", () => {
  if (navbar.style.marginTop == "-80rem") {
    navbar.style.marginTop = "0rem";
  } else {
    navbar.style.marginTop = "-80rem";
  }
});
