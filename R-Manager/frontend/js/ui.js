"use strict";
const nav = document.getElementById("navbar");
const handle = document.getElementById("resize-handle");
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
