declare const chrome: any;

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

//TO COMPILE:  tsc --watch