"use strict";
const nav = document.getElementById("navbar");
// NAVIGATION BUTTONS INIT
document.addEventListener("click", (e) => {
    const target = e.target;
    // NAV BUTTONS
    const navBtn = target.closest(".btns");
    if (navBtn) {
        const view = navBtn.dataset.view;
        if (view)
            loadView(view);
        return;
    }
    // FORM BUTTONS
    const new_btn = target.closest(".btns_new");
    if (new_btn) {
        const view = new_btn.dataset.view;
        if (view)
            openForm(view);
        return;
    }
    // CANCEL BUTTON
    const cancelBtn = target.closest("#btnCancel");
    if (cancelBtn) {
        goBack();
        return;
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
