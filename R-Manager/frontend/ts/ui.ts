const nav = document.getElementById("navbar");

// NAVIGATION BUTTONS INIT
document.addEventListener("click", (e) => {

    const target = e.target as HTMLElement;

    // NAV BUTTONS
    const navBtn = target.closest(".btns") as HTMLElement;
    if (navBtn) {
        const view = navBtn.dataset.view;
        if (view) loadView(view);
        return;
    }

    // FORM BUTTONS
    const crudBtn = target.closest(".crudbtns") as HTMLElement;
    if (crudBtn) {
        const view = crudBtn.dataset.view;
        if (view) openForm(view);
        return;
    }

});

// USER NAME DISPLAY
window.addEventListener("DOMContentLoaded", (): void => {

    const user = localStorage.getItem("user");
    const nameElement = document.getElementById("name");

    if (user && nameElement) {
        nameElement.textContent = user;
    }

});