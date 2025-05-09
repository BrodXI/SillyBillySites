const correctPassword = "SillyBilly123"; // Set your password here

document.getElementById("submit-button").addEventListener("click", () => {
    const passwordInput = document.getElementById("password-input");
    const userPassword = passwordInput.value;

    if (userPassword === correctPassword) {
        alert("Access granted!");
        // Redirect to the home page
        window.location.href = "home_page/home.html"; // Updated to point to home.html
    } else {
        alert("Incorrect password. Please try again.");
        // Clear the input field
        passwordInput.value = "";
    }
});