declare const chrome: any;

// LOAD VIEW FUNCTION (C# router)
function loadView(view: string): void {

    chrome.webview.postMessage({
        type: "view",
        data: view
    });
}

//LOAD FORM FUNCTION (C# router)
function openForm(view: string): void {

    chrome.webview.postMessage({
        type: "form",
        data: view
    });
}