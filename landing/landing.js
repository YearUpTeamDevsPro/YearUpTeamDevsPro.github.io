/* Landing Page JavaScript */

"use strict";

const loginForm = document.getElementById("#login");
const loginButton = document. document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e)) => {
    e.preventDefault()
    // Prevent the form from refreshing the page,
    // as it will do by default when the Submit event is triggered

    // We can use loginForm.username (for example) to access
    // the input element in the form which has the ID of "username".
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }

    // Disables the button after the form has been submitted already:
    loginForm.loginButton.disabled = true;

    // Time to actually process the login using the function from auth.js!
    login(loginData);
};
