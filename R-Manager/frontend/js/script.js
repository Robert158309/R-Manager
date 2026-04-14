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
// LOAD VIEW FUNCTION
function loadView(view) {
    chrome.webview.postMessage({
        type: "view",
        data: view
    });
}
// NAVIGATION BUTTONS INIT
window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btns").forEach((btn) => {
        btn.addEventListener("click", () => {
            const view = btn.dataset.view;
            if (view) {
                loadView(view);
            }
        });
    });
});
// USER NAME DISPLAY
window.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("user");
    const nameElement = document.getElementById("name");
    if (user && nameElement) {
        nameElement.textContent = user;
    }
});
//TO COMPILE:  tsc --watch
