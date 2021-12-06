// const submit_btn = document.getElementById("submit-btn");

let current_color_scheme = chrome.storage.sync.get("colorScheme")
chrome.storage.sync.get(["colorScheme"], result => {
    console.log(result)
    
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


document.getElementById("color-scheme-select").addEventListener("change", () => {
    
    
    let color_scheme = color_scheme_inp.value;
    
    chrome.storage.sync.set({ "colorScheme": color_scheme }, () => {})
    
    color_scheme_inp.value = color_scheme

    chrome.tabs.reload()

    location.reload()

});