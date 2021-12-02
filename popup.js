// const submit_btn = document.getElementById("submit-btn");

let current_color_scheme = chrome.storage.sync.get("colorScheme")

let color_scheme_inp = document.getElementById("color-scheme-select");

color_scheme_inp.value = current_color_scheme


document.getElementById("submit-btn").addEventListener("click", () => {
    
    
    let color_scheme = color_scheme_inp.value;
    
    chrome.storage.sync.set({ "colorScheme": color_scheme }, () => {})
    
    color_scheme_inp.value = color_scheme

    chrome.tabs.reload()

});