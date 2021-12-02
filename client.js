// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

    // if (message.txt == "change-images") {
        // * replace images
        vellinge_logo = document.getElementById("ctl00_PageLogo");
        
        // vellinge_url = chrome.extension.getURL("images/Vellinge.svg");
        console.log(vellinge_url)

        vellinge_logo.src = vellinge_url;

        console.log("image changed")
    // }
// })
