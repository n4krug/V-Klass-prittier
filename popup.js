// const submit_btn = document.getElementById("submit-btn");

// let current_color_scheme = chrome.storage.sync.get("colorScheme")
chrome.storage.sync.get(["colorScheme"], result => {
    // console.log(result)
    
    var cssId = 'myCss';  // you could encode the css path itself to generate id..
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = `colorSchemes/${result.colorScheme}.css`;
        link.media = 'all';
        head.appendChild(link);
    }

    color_scheme_inp.value = result.colorScheme
})

let color_scheme_inp = document.getElementById("color-scheme-select");

avaliableSchemes = ["none", "midnight", "midday", "darkness", "dark-mint", "dark-forest"]

// color_scheme_inp.selectedIndex = avaliableSchemes.indexOf(current_color_scheme)

chrome.storage.sync.get(["runAnimation"], result => {
    console.log(result.runAnimation)
    if (result.runAnimation == "" || result.runAnimation == null || result.runAnimation == undefined) {
        console.log("state not set")
        chrome.storage.sync.set({ "runAnimation": "true" }, () => {})
        
        // chrome.tabs.reload()
        
        // location.reload()
    } else {
        document.getElementById("animation-check").checked = result.runAnimation;
        console.log("gui updated")
    }
})


document.getElementById("color-scheme-select").addEventListener("change", () => {
    
    
    let color_scheme = color_scheme_inp.value;
    
    chrome.storage.sync.set({ "colorScheme": color_scheme }, () => {})
    
    color_scheme_inp.value = color_scheme

    chrome.tabs.reload()

    location.reload()

});

let animation_check = document.getElementById("animation-check");
animation_check.addEventListener("change", () => {
    let animation_state = animation_check.checked;

    // console.log(animation_state)

    chrome.storage.sync.set({ "runAnimation": String(animation_state) }, () => {})

    chrome.tabs.reload()

    location.reload()
});