// Password protection logic
const correctPassword = "SillyBilly123"; // Set your password here

// Prompt the user for a password
const userPassword = prompt("Enter the password to access this site:");

// Check if the password is correct
if (userPassword !== correctPassword) {
    alert("Incorrect password. You will be redirected.");
    window.location.href = "https://www.google.com"; // Redirect to another page
}