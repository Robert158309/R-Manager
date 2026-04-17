"use strict";
// LOAD VIEW FUNCTION (C# router)
function loadView(view) {
    chrome.webview.postMessage({
        type: "view",
        data: view
    });
}
