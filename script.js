function changeImages(vellinge_url) {
     vellinge_logo = document.getElementById("ctl00_PageLogo");
        
         // vellinge_url = chrome.extension.getURL("images/Vellinge.svg");
     console.log(vellinge_url)

     vellinge_logo.src = vellinge_url;

     console.log("image changed")
}

function addSnow(snow_url) {
    document.getElementById("ctl00_pagebody").style.setProperty("background-image", `url("${snow_url}")`, 'important');
}

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
                    });
                    chrome.scripting.insertCSS({
                        target: {tabId: tabId},
                        files: ["css/main.css"]
                    }, () => {
                        console.log("Inserted");
                    });

                }
                
                chrome.action.setIcon({path: { 
                    16: `icons/${colorScheme}_icon_16.png`,
                    48: `icons/${colorScheme}_icon_48.png`,
                   128: `icons/${colorScheme}_icon_128.png` 
                }})
                
            } else {
                chrome.action.setIcon({path: { 
                    16: `icons/default_icon_16.png`,
                    48: `icons/default_icon_48.png`,
                   128: `icons/default_icon_128.png` 
                }})
            }
        })
        
    }
    
    if (changeInfo.status === "loading") {
        chrome.storage.sync.get("colorScheme", ({colorScheme}) => {
            if (colorScheme != "none") {
                if (tab.url.startsWith("https://www.vklass.se/")) {
                    vellinge_url = chrome.runtime.getURL(`images/${colorScheme}_vellinge.svg`);
                    
                    chrome.scripting.executeScript({
                        target: {tabId: tabId},
                        // files: ["client.js"],
                        func: changeImages,
                        args: [vellinge_url]
                    }, () => {
                        console.log("Changed images");
                    });

                    if (colorScheme === "christmas") {
                        snow_url = chrome.runtime.getURL("images/snow.svg");

                        chrome.scripting.executeScript({
                            target: {tabId: tabId},
                            // files: ["client.js"],
                            func: addSnow,
                            args: [snow_url]
                        }, () => {
                            console.log("Changed images");
                        });
                    }
                }
            }
        })
    }    
})

