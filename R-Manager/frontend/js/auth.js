"use strict";
// LOGIN FUNCTION
function login() {
    const userInput = document.getElementById("user");
    const passInput = document.getElementById("pass");
    const user = userInput.value;
    const pass = passInput.value;
    chrome.webview.postMessage({
        type: "login",
        user,
        pass
    });
}
// LOGIN NAVIGATION HELPERS
function goTo(page) {
    window.location.href = page;
}
function goLogin() {
    window.location.href = "login.html";
}
//TO COMPILE:  npx tsc -w
