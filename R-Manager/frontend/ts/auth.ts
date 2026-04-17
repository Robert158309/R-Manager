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

// LOGIN NAVIGATION HELPERS
function goTo(page: string): void {
    window.location.href = page;
}

function goLogin(): void {
    window.location.href = "login.html";
}

//TO COMPILE:  npx tsc -w