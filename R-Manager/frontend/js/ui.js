"use strict";
const nav = document.getElementById("navbar");
const handle = document.getElementById("resize-handle");
// NAVIGATION BUTTONS INIT
window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btns").forEach((btn) => {
        btn.addEventListener("click", () => {
            const view = btn.dataset.view;
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
window.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("user");
    const nameElement = document.getElementById("name");
    if (user && nameElement) {
        nameElement.textContent = user;
    }
});
/*MODAL FORM LOGIC
chrome.webview.postMessage({
    type: "modal",
    data: "newPending.html"
});

function closeModal(): void {
    const modal = document.getElementById("modal") as HTMLElement;
    modal.classList.add("hidden");
}

// detectar botones dinámicos
document.addEventListener("click", (e) => {

    const target = e.target as HTMLElement;
    const btn = target.closest("button");

    if (!btn) return;

    console.log("CLICK:", btn.id);

});

function saveInventory(): void {

    const nombre = (document.getElementById("I_name") as HTMLInputElement).value;
    const desc = (document.getElementById("I_des") as HTMLInputElement).value;
    const count = (document.getElementById("I_count") as HTMLInputElement).value;
    const price = (document.getElementById("I_price") as HTMLInputElement).value;

    chrome.webview.postMessage({
        type: "newInventory",
        data: { nombre, desc, count, price }
    });

    closeModal();
}

function savePending(): void {

    const nombre = (document.getElementById("C_name") as HTMLInputElement).value;
    const dispositivo = (document.getElementById("C_device") as HTMLInputElement).value;
    const modelo = (document.getElementById("C_model") as HTMLInputElement).value;
    const resumen = (document.getElementById("C_summary") as HTMLTextAreaElement).value;
    const repuestos = (document.getElementById("C_parts") as HTMLTextAreaElement).value;
    const precio = (document.getElementById("C_price") as HTMLInputElement).value;

    chrome.webview.postMessage({
        type: "newPending",
        data: { nombre, dispositivo, modelo, resumen, repuestos, precio }
    });

    closeModal();
} */ 
