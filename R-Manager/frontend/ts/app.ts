declare const chrome: any;

//NAVIGATION BUTTONS RECORD
let viewStack: string[] = [];
let currentView: string = "";

// LOAD VIEW FUNCTION
function loadView(view: string): void {

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
function openForm(view: string): void {

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
function goBack(): void {
    const lastView = viewStack.pop();

    if (lastView) {
        currentView = lastView;

        chrome.webview.postMessage({
            type: "view",
            data: lastView
        });
    }
}
