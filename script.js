chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // tabId = tabs[0].id
    // changeInfo = tabs[0].changeInfo
    // tab = tabs[0]
    console.log("running")
    chrome.storage.sync.get("colorScheme", ({colorScheme}) => {
        console.log(colorScheme)
        if (colorScheme === "" || colorScheme === null || !colorScheme) {
            chrome.storage.sync.set({ "colorScheme": "midnight" }, () => {})
            console.log("Default color scheme set to 'midnight'")
            chrome.tabs.reload(tabId)
        }
    })

    if (changeInfo.status === "loading") {
        chrome.storage.sync.get("colorScheme", ({colorScheme}) => {
            if (colorScheme != "none") {
                if (tab.url.startsWith("https://www.vklass.se/")) {
                    chrome.scripting.insertCSS({
                        target: {tabId: tabId},
                        files: [`colorSchemes/${colorScheme}.css`]
                    }, () => {
                        console.log("Inserted color scheme");
                    })
                    chrome.scripting.insertCSS({
                        target: {tabId: tabId},
                        files: ["css/main.css"]
                    }, () => {
                        console.log("Inserted");
                    })
                }
            }
        })

    }
})