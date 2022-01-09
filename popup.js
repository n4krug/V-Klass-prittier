chrome.storage.sync.get(["customThemes"], result => {
    if (result.customThemes === null | result.customThemes === undefined) {
        empty_list = JSON.stringify([])
        chrome.storage.sync.set({"customThemes": empty_list});
    } else {
        console.log(result.customThemes)
        let custom_themes_group = document.getElementById("custom-themes-group");
        custom_themes = JSON.parse(result.customThemes);
        custom_themes.forEach(theme_name => {
            theme = document.createElement("option");
            theme.value = theme_name;
            theme.innerHTML = theme_name.substring(7);
            custom_themes_group.appendChild(theme);
        });
    }
})
// const submit_btn = document.getElementById("submit-btn");

// let current_color_scheme = chrome.storage.sync.get("colorScheme")
chrome.storage.sync.get(["colorScheme"], result => {
    // console.log(result)
    
    if (result.colorScheme.startsWith("custom-")) {
        console.log(result.colorScheme)
        chrome.storage.sync.get([result.colorScheme], colorScheme_raw => {
            body = document.getElementsByTagName("body")[0];
            
            console.log(colorScheme_raw[result.colorScheme])

            colorShceme_parsed = JSON.parse(colorScheme_raw[result.colorScheme])

            // {
            //     "bg_100": bg_100_picker.value,
            //     "bg_200": bg_200_picker.value,
            //     "bg_300": bg_300_picker.value,
            //     "bg_400": bg_400_picker.value,
            //     "bg_500": bg_500_picker.value,
            //     "text_500": text_500_picker.value,
            //     "text_200": text_200_picker.value,
            //     "accent_bg_100": accent_bg_100_picker.value,
            //     "accent_bg_200": accent_bg_200_picker.value,
            //     "accent_text_100": accent_text_100_picker.value,
            // }
            body.style.setProperty('--background-color-100', colorShceme_parsed.bg_100)
            body.style.setProperty('--background-color-200', colorShceme_parsed.bg_200)
            body.style.setProperty('--background-color-300', colorShceme_parsed.bg_300)
            body.style.setProperty('--background-color-400', colorShceme_parsed.bg_400)
            body.style.setProperty('--background-color-500', colorShceme_parsed.bg_500)
            body.style.setProperty('--text-color-500', colorShceme_parsed.text_500)
            body.style.setProperty('--text-color-200', colorShceme_parsed.text_200)
            body.style.setProperty('--accent-bg-color-100', colorShceme_parsed.accent_bg_100)
            body.style.setProperty('--accent-bg-color-200', colorShceme_parsed.accent_bg_200)
            body.style.setProperty('--accent-text-color-100', colorShceme_parsed.accent_text_100)
        })
        
    } else {
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

    }

    color_scheme_inp.value = result.colorScheme
})

let color_scheme_inp = document.getElementById("color-scheme-select");


chrome.storage.sync.get(["runAnimation"], result => {
    console.log(Boolean(result.runAnimation));
    if (result.runAnimation == null || result.runAnimation == undefined) {
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

    console.log("animation state:" + animation_state)

    chrome.storage.sync.set({ "runAnimation": animation_state }, () => {})

    chrome.storage.sync.get(["runAnimation"], result => {
        
        console.log(result)
    })
    
    chrome.tabs.reload()

    // location.reload()
});

let custom_themes_btn = document.getElementById("custom-themes-btn");
custom_themes_btn.addEventListener("click", () => {
    chrome.tabs.create({
        url: "control-page.html"
    })
})