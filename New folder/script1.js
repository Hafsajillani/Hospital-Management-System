const loginForm = document.getElementById("login-form");
const patientRecords = document.getElementById("patient-records");
const logoutButton = document.getElementById("logout-button");

// When the user submits the login form
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;

  // Check if the username and password are correct
  if (username === "doctor" && password === "password") {
    // Show the patient records
    loginForm.classList.add("hidden");
    patientRecords.classList.remove("hidden");
  } else {
    // Display an error message
    alert("Invalid username or password");
  }
});

// When the user clicks the logout button
logoutButton.addEventListener("click", () => {
  // Hide the patient records and show the login form
  patientRecords.classList.add("hidden");
  loginForm.classList.remove("hidden");
});