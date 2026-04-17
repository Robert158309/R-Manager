declare const chrome: any;

// LOAD VIEW FUNCTION (C# router)
function loadView(view: string): void {

    chrome.webview.postMessage({
        type: "view",
        data: view
    });
}