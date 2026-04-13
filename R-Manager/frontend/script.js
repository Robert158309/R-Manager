function loadView(view) {
    chrome.webview.postMessage({
        type: "view",
        data: view
    });
}

function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    chrome.webview.postMessage({
        type: "login",
        user,
        pass
    });
}

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btns").forEach(btn => {
        btn.addEventListener("click", () => {
            loadView(btn.dataset.view);
        });
    });
});