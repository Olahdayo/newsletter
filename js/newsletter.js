// Get elements
const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const mainContainer = document.getElementById("main-container");
const successMessage = document.getElementById("success-message");
const confirmedEmail = document.getElementById("confirmed-email");

// Form submit event
form.onsubmit = function (event) {
  event.preventDefault();
  let email = emailInput.value;

  if (email === "") {
    showError("Please enter your email address.");
  } else if (!isValidEmail(email)) {
    showError("Please enter a valid email address.");
  } else {
    showSuccess(email);
  }
};

// Show error message
function showError(message) {
  errorMessage.textContent = message;
}

// Show success message
function showSuccess(email) {
  mainContainer.style.display = "none";
  successMessage.style.display = "block";
  confirmedEmail.textContent = email;
}

// Simple email validation
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}
