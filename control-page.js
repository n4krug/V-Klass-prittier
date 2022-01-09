const root = document.getElementById("root");

var bg_100_picker = document.getElementById("bg-100-picker");
var bg_100_wrapper = document.getElementById("bg-100-wrapper");
bg_100_picker.onchange = function() {
    bg_100_wrapper.style.backgroundColor = bg_100_picker.value;    
    root.style.setProperty('--background-color-100', bg_100_picker.value)
}

var bg_200_picker = document.getElementById("bg-200-picker");
var bg_200_wrapper = document.getElementById("bg-200-wrapper");
bg_200_picker.onchange = function() {
    bg_200_wrapper.style.backgroundColor = bg_200_picker.value;    
    root.style.setProperty('--background-color-200', bg_200_picker.value)
}

var bg_300_picker = document.getElementById("bg-300-picker");
var bg_300_wrapper = document.getElementById("bg-300-wrapper");
bg_300_picker.onchange = function() {
    bg_300_wrapper.style.backgroundColor = bg_300_picker.value;    
    root.style.setProperty('--background-color-300', bg_300_picker.value)
}

var bg_400_picker = document.getElementById("bg-400-picker");
var bg_400_wrapper = document.getElementById("bg-400-wrapper");
bg_400_picker.onchange = function() {
    bg_400_wrapper.style.backgroundColor = bg_400_picker.value;    
    root.style.setProperty('--background-color-400', bg_400_picker.value)
}

var bg_500_picker = document.getElementById("bg-500-picker");
var bg_500_wrapper = document.getElementById("bg-500-wrapper");
bg_500_picker.onchange = function() {
    bg_500_wrapper.style.backgroundColor = bg_500_picker.value;    
    root.style.setProperty('--background-color-500', bg_500_picker.value)
}

var text_500_picker = document.getElementById("text-500-picker");
var text_500_wrapper = document.getElementById("text-500-wrapper");
text_500_picker.onchange = function() {
    text_500_wrapper.style.backgroundColor = text_500_picker.value;    
    root.style.setProperty('--text-color-500', text_500_picker.value)
    root.style.setProperty('--side-teams-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 24 24"><path fill="%23${text_500_picker.value.substring(1)}"  d="M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M15.6,8.34C16.67,8.34 17.53,9.2 17.53,10.27C17.53,11.34 16.67,12.2 15.6,12.2A1.93,1.93 0 0,1 13.67,10.27C13.66,9.2 14.53,8.34 15.6,8.34M9.6,6.76C10.9,6.76 11.96,7.82 11.96,9.12C11.96,10.42 10.9,11.5 9.6,11.5C8.3,11.5 7.24,10.42 7.24,9.12C7.24,7.81 8.29,6.76 9.6,6.76M9.6,15.89V19.64C7.2,18.89 5.3,17.04 4.46,14.68C5.5,13.56 8.13,13 9.6,13C10.13,13 10.8,13.07 11.5,13.21C9.86,14.08 9.6,15.23 9.6,15.89M12,20C11.72,20 11.46,20 11.2,19.96V15.89C11.2,14.47 14.14,13.76 15.6,13.76C16.67,13.76 18.5,14.15 19.44,14.91C18.27,17.88 15.38,20 12,20Z"></path></svg>')`)
    root.style.setProperty('--contacts-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 24 24"><path fill="%23${text_500_picker.value.substring(1)}" d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z"></path></svg>')`)
}

var text_200_picker = document.getElementById("text-200-picker");
var text_200_wrapper = document.getElementById("text-200-wrapper");
text_200_picker.onchange = function() {
    text_200_wrapper.style.backgroundColor = text_200_picker.value;    
    root.style.setProperty('--text-color-200', text_200_picker.value)
}

var accent_bg_100_picker = document.getElementById("accent-bg-100-picker");
var accent_bg_100_wrapper = document.getElementById("accent-bg-100-wrapper");
accent_bg_100_picker.onchange = function() {
    accent_bg_100_wrapper.style.backgroundColor = accent_bg_100_picker.value;    
    root.style.setProperty('--accent-bg-color-100', accent_bg_100_picker.value)
}

var accent_bg_200_picker = document.getElementById("accent-bg-200-picker");
var accent_bg_200_wrapper = document.getElementById("accent-bg-200-wrapper");
accent_bg_200_picker.onchange = function() {
    accent_bg_200_wrapper.style.backgroundColor = accent_bg_200_picker.value;    
    root.style.setProperty('--accent-bg-color-200', accent_bg_200_picker.value)
}

var accent_text_100_picker = document.getElementById("accent-text-100-picker");
var accent_text_100_wrapper = document.getElementById("accent-text-100-wrapper");
accent_text_100_picker.onchange = function() {
    accent_text_100_wrapper.style.backgroundColor = accent_text_100_picker.value;    
    root.style.setProperty('--accent-text-color-100', accent_text_100_picker.value)
}

var logo_check = document.getElementById("logo-check");
var logo_img = document.getElementById("logo");
logo_check.onchange = () => {
    if (logo_check.checked) {
        logo_img.src = "images/midday_vellinge.svg"
    } else {
        logo_img.src = "images/midnight_vellinge.svg"
    }
}

bg_100_wrapper.style.backgroundColor = bg_100_picker.value;
bg_200_wrapper.style.backgroundColor = bg_200_picker.value;
bg_300_wrapper.style.backgroundColor = bg_300_picker.value;
bg_400_wrapper.style.backgroundColor = bg_400_picker.value;
bg_500_wrapper.style.backgroundColor = bg_500_picker.value;
text_500_wrapper.style.backgroundColor = text_500_picker.value;
text_200_wrapper.style.backgroundColor = text_200_picker.value;
accent_bg_100_wrapper.style.backgroundColor = accent_bg_100_picker.value;
accent_bg_200_wrapper.style.backgroundColor = accent_bg_200_picker.value;
accent_text_100_wrapper.style.backgroundColor = accent_text_100_picker.value;

save_btn = document.getElementById("save-btn");
save_inp = document.getElementById("save-inp");

save_btn.addEventListener("click", () => {
    theme_name = save_inp.value;
    chrome.storage.sync.get(["customThemes"], result => {
        
        if (result.customThemes === null | result.customThemes === undefined) {
            empty_list = JSON.stringify([])
            chrome.storage.sync.set({"customThemes": empty_list});
        } else {
            parsed_list = JSON.parse(result.customThemes);
            if (!parsed_list.includes(`custom-${theme_name}`)) {
                parsed_list.push(`custom-${theme_name}`)
            }
            chrome.storage.sync.set({"customThemes": JSON.stringify(parsed_list)});

            theme_save = `custom-${theme_name}`
            console.log(theme_save)
            theme_data = {
                "bg_100": bg_100_picker.value,
                "bg_200": bg_200_picker.value,
                "bg_300": bg_300_picker.value,
                "bg_400": bg_400_picker.value,
                "bg_500": bg_500_picker.value,
                "text_500": text_500_picker.value,
                "text_200": text_200_picker.value,
                "accent_bg_100": accent_bg_100_picker.value,
                "accent_bg_200": accent_bg_200_picker.value,
                "accent_text_100": accent_text_100_picker.value,
                "dark_logo": logo_check.checked
            }

            console.log(theme_data)
            console.log(JSON.stringify(theme_data))
            theme_json = {}
            theme_json[theme_save] = JSON.stringify(theme_data)
            chrome.storage.sync.set(theme_json)
        }
    })
})

document.getElementById("reset-btn").addEventListener("click", () => {
    empty_list = JSON.stringify([])
    chrome.storage.sync.set({"customThemes": empty_list});
})