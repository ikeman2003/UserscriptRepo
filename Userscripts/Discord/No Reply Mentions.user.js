// ==UserScript==
// @name         Discord - Do Not Mention on Replies By Default
// @version      1.1
// @description  Sets Mention on Reply to Off by default, and adds Alt+p as a keyboard shortcut to toggle
// @author       ikeman2003 (fork of Suyooo's version)
// @license      Apache-2.0
// @match        https://discordapp.com/*
// @match        https://discord.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @downloadURL  https://raw.githubusercontent.com/ikeman2003/UserscriptRepo/main/Userscripts/Discord/No%20Reply%20Mentions.user.js
// @updateURL    https://raw.githubusercontent.com/ikeman2003/UserscriptRepo/main/Userscripts/Discord/No%20Reply%20Mentions.user.js
// ==/UserScript==

(function() {
    'use strict';

    let mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach( function(currentValue, currentIndex, listObj) {
                if (currentValue.nodeType == Node.ELEMENT_NODE) {
                    $("div[class*='_841c8f86lf7b2704-mentionButton`'][style*='color: var(--text-link);']", currentValue).click();
                }
            });
        });
    });
    mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    function onKeyDown(e) {
        if (e.key == "p" && e.altKey) {
            $("div[class*='_841c8f86lf7b2704-mentionButton']").click();
        }
    }
    window.addEventListener("keydown", onKeyDown, true);
})();
