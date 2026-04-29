"use strict";
//NAVIGATION BUTTONS RECORD
let viewStack = [];
let currentView = "";
// LOAD VIEW FUNCTION
function loadView(view) {
    if (currentView) {
        viewStack.push(currentView);
    }
    currentView = view;
    chrome.webview.postMessage({
        type: "view",
        data: view
    });
}
// LOAD FORM FUNCTION
function openForm(view) {
    if (currentView) {
        viewStack.push(currentView);
    }
    currentView = view;
    chrome.webview.postMessage({
        type: "form",
        data: view
    });
}
// GO BACK
function goBack() {
    const lastView = viewStack.pop();
    if (lastView) {
        currentView = lastView;
        chrome.webview.postMessage({
            type: "view",
            data: lastView
        });
    }
}
