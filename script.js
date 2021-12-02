chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "loading") {
        if (tab.url.startsWith("https://www.vklass.se/")) {
            chrome.tabs.insertCSS(tabId, {
                file: "css/main.css"
            }, () => {
                console.log("Inserted");
            })
        }
    }
})