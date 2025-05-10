const correctPassword = "99387"; // Set your password here

// Check if the user is already authenticated
if (localStorage.getItem("authenticated") === "true") {
    // Redirect to the home page immediately
    window.location.href = "home_page/home.html";
}

document.getElementById("submit-button").addEventListener("click", () => {
    const passwordInput = document.getElementById("password-input");
    const userPassword = passwordInput.value;

    if (userPassword === correctPassword) {
        alert("Access granted!");
        // Store authentication status in localStorage
        localStorage.setItem("authenticated", "true");
        // Redirect to the home page
        window.location.href = "home_page/home.html";
    } else {
        alert("Incorrect password. Please try again.");
        // Clear the input field
        passwordInput.value = "";
    }
});