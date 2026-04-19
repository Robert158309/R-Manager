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

/*NAVIGATION BUTTOMS ANIMATION
window.addEventListener("DOMContentLoaded", () => {

    let isResizing = false;

    if (nav instanceof HTMLElement && handle instanceof HTMLElement) {

        handle.addEventListener("mousedown", () => {
            isResizing = true;
            document.body.style.cursor = "ew-resize";
        });

        document.addEventListener("mousemove", (e) => {
            if (!isResizing) return;

            let newWidth = e.clientX;

            const min = 240;
            const max = 380;

            if (newWidth < min) newWidth = min;
            if (newWidth > max) newWidth = max;

            nav.style.width = `${newWidth}px`;
        });

        document.addEventListener("mouseup", () => {
            isResizing = false;
            document.body.style.cursor = "default";
        });
    }

});
*/

// USER NAME DISPLAY
window.addEventListener("DOMContentLoaded", (): void => {

    const user = localStorage.getItem("user");
    const nameElement = document.getElementById("name");

    if (user && nameElement) {
        nameElement.textContent = user;
    }

});
