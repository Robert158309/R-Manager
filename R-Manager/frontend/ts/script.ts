declare const chrome: any;
const nav = document.getElementById("navbar");
const handle = document.getElementById("resize-handle");

// LOGIN FUNCTION
function login(): void {

    const userInput = document.getElementById("user") as HTMLInputElement;
    const passInput = document.getElementById("pass") as HTMLInputElement;

    const user: string = userInput.value;
    const pass: string = passInput.value;

    chrome.webview.postMessage({
        type: "login",
        user,
        pass
    });
}


// LOAD VIEW FUNCTION
function loadView(view: string): void {

    chrome.webview.postMessage({
        type: "view",
        data: view
    });
}


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

//ON TESTING
let isResizing = false;

if (nav instanceof HTMLElement && handle instanceof HTMLElement) {

    handle.addEventListener("mousedown", (e: MouseEvent): void => {
        isResizing = true;
        document.body.style.cursor = "ew-resize";
    });

    document.addEventListener("mousemove", (e: MouseEvent): void => {
        if (!isResizing) return;

        let newWidth = e.clientX;

        const min = 220;
        const max = 380;

        if (newWidth < min) newWidth = min;
        if (newWidth > max) newWidth = max;

        nav.style.width = `${newWidth}px`;
    });

    document.addEventListener("mouseup", (): void => {
        isResizing = false;
        document.body.style.cursor = "default";
    });

}

//TO COMPILE:  tsc -w