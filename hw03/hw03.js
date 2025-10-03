let btnOpen = document.querySelector(".btn-open");
let btnClose = document.querySelector(".btn-close");
let box = document.querySelector(".box");
let backgroundColor = document.querySelector(".backgrn");

btnOpen.addEventListener("click", function () {
  box.style.display = "block";
  backgroundColor.style.backgroundColor = "grey";
});

btnClose.addEventListener("click", function () {
  box.style.display = "none";
  backgroundColor.style.backgroundColor = "white";
});
