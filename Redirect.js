/*const anchor = document.querySelector('.button-class');
document.addEventListener('DOMContentLoaded',()=>{
anchor.addEventListener('click',()=>{
    chrome.runtime.sendMessage({action:'redirect'});
});
});
*/
const anchorPop = document.querySelector('.button-class');
anchorPop.addEventListener('click',()=>{
    browser.tabs.create({url:"https://github.com/Adw-eeyaa/Discord-Presence-Chromium-Extension/releases/tag/v1.0.0"})
});
