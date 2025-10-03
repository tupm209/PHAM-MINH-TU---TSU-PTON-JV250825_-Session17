const numbers = document.querySelectorAll(".number");
const screen = document.querySelector("#screen");
const equal = document.querySelector("#equal");
const cancel = document.querySelector("#cancel");

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    screen.value += button.value;
  });
});

equal.addEventListener("click", () => {
  const check = screen.value.includes("/0");
  if (check) {
    alert("Phép tính không hợp lệ!");
    return;
  }

  const regex = /[+\-*/.]/;
  if (
    regex.test(screen.value.charAt(0)) ||
    regex.test(screen.value.charAt(screen.value.length-1))
  ) {
    alert("Phép tính không hợp lệ!");
    return;
  }

  const result = eval(screen.value);
  screen.value = result;
  return result;

});

cancel.addEventListener("click", () => {
  screen.value = "";
});
