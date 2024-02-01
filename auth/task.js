const form = document.getElementById("signin__form");
const welcome = document.querySelector(".welcome");
const signin = document.querySelector(".signin");
const userId = welcome.querySelector("span");

form.addEventListener("submit", e => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  const formData = new FormData(form);
  xhr.responseType = 'json';
  xhr.send(formData);
  
  xhr.addEventListener("load", () => {
    if (xhr.response.success) {
      localStorage.setItem("userId", xhr.response.user_id);
      showWelcome();
    } else {
      alert("Неверный логин/пароль");
    }
  })
})

window.addEventListener("load", () => {
    if (localStorage.userId) {
        showWelcome;
    }
})

function showWelcome() {
  signin.classList.remove(`signin_active`);
  welcome.classList.add(`welcome_active`);
  userId.textContent = localStorage.userId;
}