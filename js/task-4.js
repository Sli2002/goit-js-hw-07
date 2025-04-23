const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", function (e) {
  e.preventDefault();

  const userEmail = e.target.elements.email.value.trim();
  const userPassword = e.target.elements.password.value.trim();

  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
    return;
  }

  const userInfo = {
    email: userEmail,
    password: userPassword,
  };
  console.log(userInfo);
  e.target.reset();
});

const form = document.querySelector(".login-form");

const inputs = form.querySelectorAll("input");
inputs.forEach((input) => {
  input.classList.add("input-field");
});

const submitBtn = form.querySelector("button[type='submit']");
submitBtn.classList.add("submit-btn");
