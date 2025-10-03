// let box1 = document.querySelector(".box1");
// let box2 = document.querySelector(".box2");
// let box3 = document.querySelector(".box3");
// let background = document.querySelector(".background");

// box1.addEventListener("mouseover", function () {
//   background.style.background = "yellow";
// });

// box2.addEventListener("mouseover", function () {
//   background.style.background = "green";
// });

// box3.addEventListener("mouseover", function () {
//   background.style.background = "grey";
// });

// box1.addEventListener("mouseout", function () {
//   background.style.background = "white";
// });

// box2.addEventListener("mouseout", function () {
//   background.style.background = "white";
// });

// box3.addEventListener("mouseout", function () {
//   background.style.background = "white";
// });

let background = document.querySelector(".background");
const colorMap = {
  box1: "yellow",
  box2: "green",
  box3: "grey",
};

["box1", "box2", "box3"].forEach((className) => {
  let box = document.querySelector(`.${className}`);

  box.addEventListener("mouseover", function () {
    background.style.background = colorMap[className];
  });

  box.addEventListener("mouseout", function () {
    background.style.background = "white";
  });
});
