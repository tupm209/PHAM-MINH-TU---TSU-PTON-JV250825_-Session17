let hideText = document
  .getElementById("btn1")
  .addEventListener("click", function () {
    document.getElementById("text").style.display = "none";
  });

let showText = document
  .getElementById("btn2")
  .addEventListener("click", function () {
    document.getElementById("text").style.display = "block";
  });
