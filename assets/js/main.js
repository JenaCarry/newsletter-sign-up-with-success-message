window.addEventListener("load", () => {
  const subscribe = document.querySelector(".subscribe");
  const form = document.querySelector(".form");
  const email = document.querySelector("#email");
  const btn = document.querySelector(".btn");

  const cardSuccess = document.querySelector(".thanks");
  const emailSubscribing = document.querySelector(".emailSubscribing");
  const btnSuccess = document.querySelector(".btn-success");

  btn.addEventListener("click", () => {
    checkEmail(email);
    if (checkEmail(email)) {
      cardSuccess.classList.toggle("isHidden");
      subscribe.classList.toggle("isHidden");
      emailSubscribing.innerHTML = email.value;
    }
  });

  btnSuccess.addEventListener("click", () => {
    cardSuccess.classList.toggle("isHidden");
    subscribe.classList.toggle("isHidden");
    email.value = "";
    email.parentNode.classList.remove("valid");
  });

  email.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      btn.click();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

function checkEmail(email) {
  const emailValidation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.value
    );
  if (emailValidation) {
    setSuccess(email);
  } else if (email.value === "") {
    setError(email, "cannot be empty");
  } else {
    setError(email, "valid email required");
  }
  return emailValidation;
}

function setError(input, msg) {
  const msgError = document.querySelector(".msg-error");
  input.parentNode.classList.remove("valid");
  input.parentNode.classList.add("invalid");
  msgError.innerHTML = msg;
}

function setSuccess(input) {
  input.parentNode.classList.remove("invalid");
  input.parentNode.classList.add("valid");
}
