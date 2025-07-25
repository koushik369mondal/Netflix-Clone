document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signinForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailHelp = document.getElementById("emailHelp");
  const passwordHelp = document.getElementById("passwordHelp");
  const pwToggle = document.getElementById("pwToggle");

  //toggle password visibility
  pwToggle.addEventListener("click", function () {
  const type = passwordInput.getAttribute("type");
  if (type === "password") {
    passwordInput.setAttribute("type", "text");
    pwToggle.textContent = "Hide";
  } else {
    passwordInput.setAttribute("type", "password");
    pwToggle.textContent = "Show";
  }
});


  // Form submit handler
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let isValid = true;
    emailHelp.textContent = "";
    passwordHelp.textContent = "";

    if (!email || !email.includes("@") || !email.includes(".")) {
      emailHelp.textContent = "Enter a valid email address.";
      isValid = false;
    }

    if (!password || password.length < 6) {
      passwordHelp.textContent = "Password must be at least 6 characters.";
      isValid = false;
    }

    if (isValid) {
      // Simulate login success
      alert("Sign in successful!");
      window.location.href = "index.html";
      form.reset();
    }
  });
});
