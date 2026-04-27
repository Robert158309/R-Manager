"use strict";
// LOAD VIEW FUNCTION (C# router)
function loadView(view) {
    chrome.webview.postMessage({
        type: "view",
        data: view
    });
}
//LOAD FORM FUNCTION (C# router)
function openForm(view) {
    chrome.webview.postMessage({
        type: "form",
        data: view
    });
}
