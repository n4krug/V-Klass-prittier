function changeImages(vellinge_url) {
    vellinge_logo = document.getElementById("ctl00_PageLogo");
        
         // vellinge_url = chrome.extension.getURL("images/Vellinge.svg");
    if (vellinge_logo.src == "https://www.vklass.se/graphics/org_708355F2-915F-47D9-997E-C659F2AF448A.png" || vellinge_logo.src == "https://vklass.se/graphics/org_708355F2-915F-47D9-997E-C659F2AF448A.png") {

        console.log(vellinge_url)

        vellinge_logo.src = vellinge_url;

        console.log("image changed")
    }
}

function addSnow(snow_url) {
    const background_div = document.createElement("div");
    background_div.id = "background_div";
    background_div.style.setProperty("background-image", `url("${snow_url}")`, 'important');
    document.getElementById("ctl00_pagebody").appendChild(background_div);

}

function setBG(bg_url) {
    document.getElementById("ctl00_pagebody").style.setProperty("background-image", `url("${bg_url}")`, 'important');
}

function customTheme(theme) {
    body = document.getElementsByTagName("html")[0];

    body.style.setProperty('--background-color-100', theme.bg_100)
    body.style.setProperty('--background-color-200', theme.bg_200)
    body.style.setProperty('--background-color-300', theme.bg_300)
    body.style.setProperty('--background-color-400', theme.bg_400)
    body.style.setProperty('--background-color-500', theme.bg_500)
    body.style.setProperty('--text-color-500', theme.text_500)
    body.style.setProperty('--text-color-200', theme.text_200)
    body.style.setProperty('--accent-bg-color-100', theme.accent_bg_100)
    body.style.setProperty('--accent-bg-color-200', theme.accent_bg_200)
    body.style.setProperty('--accent-text-color-100', theme.accent_text_100)

	body.style.setProperty('--home-profile-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z"></path></svg>')`)
	body.style.setProperty('--messages-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"></path></svg>')`)
	body.style.setProperty('--contacts-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z"></path></svg>')`)
	body.style.setProperty('--feed-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M18 22H6V16L10 12L6 8V2H18V8L14 12L18 16M8 7.5L12 11.5L16 7.5V4H8M12 12.5L8 16.5V20H16V16.5M14 18H10V17.2L12 15.2L14 17.2Z"></path></svg>')`)
	body.style.setProperty('--search-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}"  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg>')`)
	body.style.setProperty('--menu-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}"  d="M21,15.61L19.59,17L14.58,12L19.59,7L21,8.39L17.44,12L21,15.61M3,6H16V8H3V6M3,13V11H13V13H3M3,18V16H16V18H3Z"></path></svg>')`)
	body.style.setProperty('--account-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path></svg>')`)
	body.style.setProperty('--logout-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3A2,2 0 0,1 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z"></path></svg>')`)
	body.style.setProperty('--lates-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M21 11.11V5C21 3.9 20.11 3 19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H11.11C12.37 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.37 21 11.11M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M5 19V5H7V7H17V5H19V9.68C18.09 9.25 17.08 9 16 9H7V11H11.1C10.5 11.57 10.04 12.25 9.68 13H7V15H9.08C9.03 15.33 9 15.66 9 16C9 17.08 9.25 18.09 9.68 19H5M16 21C13.24 21 11 18.76 11 16S13.24 11 16 11 21 13.24 21 16 18.76 21 16 21M16.5 16.25L19.36 17.94L18.61 19.16L15 17V12H16.5V16.25Z"></path></svg>')`)
	body.style.setProperty('--side-test-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M17,9H7V7H17M17,13H7V11H17M14,17H7V15H14M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"></path></svg>')`)
	body.style.setProperty('--side-calendar-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z"></path></svg>')`)
	body.style.setProperty('--side-course-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z"></path></svg>')`)
	body.style.setProperty('--side-class-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"></path></svg>')`)
	body.style.setProperty('--side-files-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M19,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H19A2,2 0 0,1 21,8H21L4,8V18L6.14,10H23.21L20.93,18.5C20.7,19.37 19.92,20 19,20Z"></path></svg>')`)
	body.style.setProperty('--side-school-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}"  d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"></path></svg>')`)
	body.style.setProperty('--side-tools-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}"  d="M21.71 20.29L20.29 21.71A1 1 0 0 1 18.88 21.71L7 9.85A3.81 3.81 0 0 1 6 10A4 4 0 0 1 2.22 4.7L4.76 7.24L5.29 6.71L6.71 5.29L7.24 4.76L4.7 2.22A4 4 0 0 1 10 6A3.81 3.81 0 0 1 9.85 7L21.71 18.88A1 1 0 0 1 21.71 20.29M2.29 18.88A1 1 0 0 0 2.29 20.29L3.71 21.71A1 1 0 0 0 5.12 21.71L10.59 16.25L7.76 13.42M20 2L16 4V6L13.83 8.17L15.83 10.17L18 8H20L22 4Z"></path></svg>')`)
	body.style.setProperty('--side-teams-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}"  d="M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M15.6,8.34C16.67,8.34 17.53,9.2 17.53,10.27C17.53,11.34 16.67,12.2 15.6,12.2A1.93,1.93 0 0,1 13.67,10.27C13.66,9.2 14.53,8.34 15.6,8.34M9.6,6.76C10.9,6.76 11.96,7.82 11.96,9.12C11.96,10.42 10.9,11.5 9.6,11.5C8.3,11.5 7.24,10.42 7.24,9.12C7.24,7.81 8.29,6.76 9.6,6.76M9.6,15.89V19.64C7.2,18.89 5.3,17.04 4.46,14.68C5.5,13.56 8.13,13 9.6,13C10.13,13 10.8,13.07 11.5,13.21C9.86,14.08 9.6,15.23 9.6,15.89M12,20C11.72,20 11.46,20 11.2,19.96V15.89C11.2,14.47 14.14,13.76 15.6,13.76C16.67,13.76 18.5,14.15 19.44,14.91C18.27,17.88 15.38,20 12,20Z"></path></svg>')`)
	body.style.setProperty('--side-help-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}"  d="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"></path></svg>')`)
	body.style.setProperty('--side-swap-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}"  d="M17 15L14 12V14H10V12L7 15L10 18V16H14V18M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2M18 20H6V4H13V9H18Z"></path></svg>')`)
	body.style.setProperty('--side-pc-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}"  d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"></path></svg>')`)
	body.style.setProperty('--side-cloud-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="48" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}"  d="M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z"></path></svg>')`)
	body.style.setProperty('--timetable-calendar-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z"></path></svg>')`)
	body.style.setProperty('--timetable-feed-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M6.18,15.64A2.18,2.18 0 0,1 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82A2.18,2.18 0 0,1 6.18,15.64M4,4.44A15.56,15.56 0 0,1 19.56,20H16.73A12.73,12.73 0 0,0 4,7.27V4.44M4,10.1A9.9,9.9 0 0,1 13.9,20H11.07A7.07,7.07 0 0,0 4,12.93V10.1Z"></path></svg>')`)
	body.style.setProperty('--timetable-print-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"></path></svg>')`)
	body.style.setProperty('--course-url', `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="%23${theme.text_500.substring(1)}" d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"></path></svg>')`)
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
                
                console.log(tab.url.startsWith("https://www.vklass.se/"))
                if ((tab.url.startsWith("https://www.vklass.se/") || tab.url.startsWith("https://vklass.se/") ) && (!tab.url.startsWith("https://www.vklass.se/administration/") || !tab.url.startsWith("https://vklass.se/administration/"))) {
                    console.log("url matches")
                    if (colorScheme.startsWith("custom-")) {
                        chrome.storage.sync.get([colorScheme], result => {
                            theme = JSON.parse(result[colorScheme])
                            chrome.scripting.executeScript({
                                target: {tabId: tabId},
                                // files: ["client.js"],
                                func: customTheme,
                                args: [theme]
                            }, () => {
                                console.log("Changed images");
                            });
                        })

                    } else {

                        chrome.scripting.insertCSS({
                            target: {tabId: tabId},
                            files: [`colorSchemes/${colorScheme}.css`]
                        }, () => {
                            console.log("Inserted color scheme");
                        });
                    }
                    chrome.scripting.insertCSS({
                        target: {tabId: tabId},
                        files: ["css/main.css"]
                    }, () => {
                        console.log("Inserted");
                    });

                    chrome.storage.sync.get(["runAnimation"], result => {
                        if (result.runAnimation == false) {
                            chrome.scripting.insertCSS({
                                target: {tabId: tabId},
                                files: ["no_animations.css"]
                            }, () => {
                                console.log("Inserted no_animations.css");
                            });
                        }
                    })

                }
                
                chrome.action.setIcon({path: { 
                    16: `icons/${colorScheme}_icon_16.png`,
                    48: `icons/${colorScheme}_icon_48.png`,
                   128: `icons/${colorScheme}_icon_128.png` 
                }}, () => {})
                
                
            } else {
                chrome.action.setIcon({path: { 
                    16: `icons/default_icon_16.png`,
                    48: `icons/default_icon_48.png`,
                   128: `icons/default_icon_128.png` 
                }}, () => {})
            }
        })
        
    }
    
    if (changeInfo.status === "loading") {
        chrome.storage.sync.get("colorScheme", ({colorScheme}) => {
            if (colorScheme != "none") {
                if ((tab.url.startsWith("https://www.vklass.se/") || tab.url.startsWith("https://vklass.se/") ) && (!tab.url.startsWith("https://www.vklass.se/administration/") || !tab.url.startsWith("https://vklass.se/administration/"))) {
                    vellinge_url = chrome.runtime.getURL(`images/${colorScheme}_vellinge.svg`);
                    
                    if (colorScheme.startsWith("custom-")) {
                        chrome.storage.sync.get([colorScheme], result => {
                            theme = JSON.parse(result[colorScheme])
                            if (theme.dark_logo) {
                                vellinge_url = chrome.runtime.getURL("images/dark_vellinge.svg")
                            } else {
                                vellinge_url = chrome.runtime.getURL("images/dark_vellinge.svg")
                            }
                            chrome.scripting.executeScript({
                                target: {tabId: tabId},
                                // files: ["client.js"],
                                func: changeImages,
                                args: [vellinge_url]
                            }, () => {
                                console.log("Changed images");
                            });
                        });
                    } else {

                        
                        chrome.scripting.executeScript({
                            target: {tabId: tabId},
                            // files: ["client.js"],
                            func: changeImages,
                            args: [vellinge_url]
                        }, () => {
                            console.log("Changed images");
                        });
                    }
                        
                    if (colorScheme === "christmas" || colorScheme === "dark-christmas") {
                        snow_url = chrome.runtime.getURL("images/snow.svg");
                        
                        chrome.scripting.executeScript({
                            target: {tabId: tabId},
                            // files: ["client.js"],
                            func: addSnow,
                            args: [snow_url]
                        }, () => {
                            console.log("Changed images");
                        });
                        
                        bg_url = chrome.runtime.getURL("images/snowy-forest-bg.svg");
                        chrome.scripting.executeScript({
                            target: {tabId: tabId},
                            // files: ["client.js"],
                            func: setBG,
                            args: [bg_url]
                        }, () => {
                            console.log("Changed images");
                        });
                    } else if (colorScheme === "dark-forest") {
                        bg_url = chrome.runtime.getURL("images/dark-forest-bg.svg");
                        chrome.scripting.executeScript({
                            target: {tabId: tabId},
                            // files: ["client.js"],
                            func: setBG,
                            args: [bg_url]
                        }, () => {
                            console.log("Changed images");
                        });
                    }
                }
            }
        })
    }    
})

