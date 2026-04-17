const nav = document.getElementById("navbar");
const handle = document.getElementById("resize-handle");

// NAVIGATION BUTTONS INIT
window.addEventListener("DOMContentLoaded", (): void => {

    document.querySelectorAll(".btns").forEach((btn) => {

        btn.addEventListener("click", (): void => {

            const view = (btn as HTMLElement).dataset.view;

            if (view) {
                loadView(view);
            }

        });

    });

});

// USER NAME DISPLAY
window.addEventListener("DOMContentLoaded", (): void => {

    const user = localStorage.getItem("user");
    const nameElement = document.getElementById("name");

    if (user && nameElement) {
        nameElement.textContent = user;
    }

});