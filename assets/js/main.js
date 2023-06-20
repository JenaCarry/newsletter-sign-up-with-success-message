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
      subscribe.style.animation = "anima 200ms ease-in-out forwards";
      emailSubscribing.innerHTML = email.value;
      setTimeout(() => {
        subscribe.style.animation = "none";
        subscribe.style.display = "none";
        cardSuccess.style.animation =
          "anima 200ms ease-in-out reverse forwards";
        email.value = "";
        email.parentNode.classList.remove("valid");
        email.parentNode.classList.remove("invalid");
        setTimeout(() => {
          cardSuccess.style.animation = "none";
          cardSuccess.style.display = "block";
        }, 200);
      }, 200);
    }
  });

  btnSuccess.addEventListener("click", () => {
    cardSuccess.style.animation = "anima 200ms ease-in-out forwards";
    setTimeout(() => {
      cardSuccess.style.animation = "none";
      cardSuccess.style.display = "none";
      subscribe.style.animation = "anima 200ms ease-in-out reverse forwards";
      setTimeout(() => {
        subscribe.style.animation = "none";
        subscribe.style.display = "block";
      }, 200);
    }, 200);
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
  } else {
    setError(email);
  }
  return emailValidation;
}

function setError(input) {
  input.parentNode.classList.remove("valid");
  input.parentNode.classList.add("invalid");
}

function setSuccess(input) {
  input.parentNode.classList.remove("invalid");
  input.parentNode.classList.add("valid");
}
