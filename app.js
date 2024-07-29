const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hlinks = document.querySelectorAll(".hlink");
const dark = document.querySelector("#darkmood");
const body = document.querySelector("body");

dark.addEventListener("click", () => {
  body.classList.toggle("dark");
});

hlinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
  });
});

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});

function toggleReadMore() {
  const moreText = document.getElementById("moreText");
  const btnText = document.getElementById("readMoreBtn");

  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    btnText.textContent = "Read less";
  } else {
    moreText.classList.add("hidden");
    btnText.textContent = "Read more";
  }
}
