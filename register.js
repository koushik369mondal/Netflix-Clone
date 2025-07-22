document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const strengthBar = document.getElementById("strengthBar");
  const togglePassword = document.getElementById("togglePassword");
  const formFeedback = document.getElementById("formFeedback");

  const showError = (input, message) => {
    document.getElementById(input.id + "Help").textContent = message;
  };

  const clearErrors = () => {
    ["usernameHelp", "emailHelp", "passwordHelp", "confirmHelp"].forEach(id => {
      document.getElementById(id).textContent = "";
    });
  };

  const checkPasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^A-Za-z0-9]/.test(pwd)) strength++;

    const width = (strength / 4) * 100;
    strengthBar.style.width = width + "%";

    if (strength <= 1) {
      strengthBar.style.backgroundColor = "#ff4c4c"; // weak
    } else if (strength === 2) {
      strengthBar.style.backgroundColor = "#ffcc00"; // medium
    } else {
      strengthBar.style.backgroundColor = "#00d084"; // strong
    }
  };

  password.addEventListener("input", () => {
    checkPasswordStrength(password.value);
  });

  togglePassword.addEventListener("change", () => {
    const type = togglePassword.checked ? "text" : "password";
    password.type = confirmPassword.type = type;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default submit
    clearErrors();
    let valid = true;

    if (username.value.trim() === "") {
      showError(username, "Username is required");
      valid = false;
    }

    if (email.value.trim() === "") {
      showError(email, "Email is required");
      valid = false;
    }

    if (password.value.length < 6) {
      showError(password, "Password must be at least 6 characters");
      valid = false;
    }

    if (confirmPassword.value !== password.value) {
      showError(confirmPassword, "Passwords do not match");
      valid = false;
    }

    if (valid) {
      formFeedback.textContent = "Registration Successful!";
      formFeedback.style.color = "#00d084";
      form.reset();
      strengthBar.style.width = "0";
    } else {
      formFeedback.textContent = "Please fix the errors above.";
      formFeedback.style.color = "#ff4c4c";
    }
  });
});
