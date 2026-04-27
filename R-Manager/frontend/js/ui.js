"use strict";
const nav = document.getElementById("navbar");
// NAVIGATION BUTTONS INIT
window.addEventListener("click", (e) => {
    const target = e.target;
    // NAV BUTTONS
    if (target.classList.contains("btns")) {
        const view = target.dataset.view;
        if (view)
            loadView(view);
    }
    // FORM BUTTONS
    if (target.classList.contains("crudbtns")) {
        const view = target.dataset.view;
        if (view)
            openForm(view);
    }
});
// USER NAME DISPLAY
window.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("user");
    const nameElement = document.getElementById("name");
    if (user && nameElement) {
        nameElement.textContent = user;
    }
});
