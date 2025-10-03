const username = "huanrose@gmail.com";
const password = "123456";

const form = document.getElementById("login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  // console.log(formData.get("email"));
  // console.log(formData.get("password"));
  if (formData.get("email") !== username) {
    alert("Nhập sai email! Đăng nhập thất bại!");
  } else if (formData.get("email") === username) {
    if (formData.get("password") !== password) {
      alert("Nhập sai mật khẩu! Đăng nhập thất bại!");
    } else {
      alert("Đăng nhập thành công!");
    }
  }
});
