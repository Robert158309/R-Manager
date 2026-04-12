function loadView(view) {

    window.chrome.webview.postMessage(view);

}

window.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".btns").forEach(btn => {

        btn.addEventListener("click", () => {

            loadView(btn.dataset.view);

        });

    });

});