"use strict";
const nav = document.getElementById("navbar");
const handle = document.getElementById("resize-handle");
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
//ON TESTING
let isResizing = false;
if (nav instanceof HTMLElement && handle instanceof HTMLElement) {
    handle.addEventListener("mousedown", (e) => {
        isResizing = true;
        document.body.style.cursor = "ew-resize";
    });
    document.addEventListener("mousemove", (e) => {
        if (!isResizing)
            return;
        let newWidth = e.clientX;
        const min = 200;
        const max = 380;
        if (newWidth < min)
            newWidth = min;
        if (newWidth > max)
            newWidth = max;
        nav.style.width = `${newWidth}px`;
    });
    document.addEventListener("mouseup", () => {
        isResizing = false;
        document.body.style.cursor = "default";
    });
}
//TO COMPILE:  tsc -w
