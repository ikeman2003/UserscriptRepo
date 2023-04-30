// ==UserScript==
// @name         AutoChatResize
// @namespace    https://github.com/ikeman2003/UserscriptRepo
// @version      0.2.4
// @description  Auto enable Twitch Chat Resize experiment
// @author       ikeman2003 (fork of th3an7 AutoWARP)
// @downloadURL  https://raw.githubusercontent.com/ikeman2003/UserscriptRepo/main/Userscripts/Twitch/AutoChatResize.user.js
// @updateURL    https://raw.githubusercontent.com/ikeman2003/UserscriptRepo/main/Userscripts/Twitch/AutoChatResize.user.js
// @match        https://www.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitch.tv
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    'use strict';

    function waitForFFZ() {
        setTimeout(function () {
            if (unsafeWindow.ffz == undefined) {
                console.log('[AutoChatResize] Waiting...');
                waitForFFZ();
            } else {
                if (unsafeWindow.ffz.experiments.Cookie.getJSON().experiment_overrides.experiments['e85998cd-a7b4-400e-8139-6b1aeab9b4c9'] != 'treatment') {
                    unsafeWindow.ffz.experiments.setTwitchOverride('e85998cd-a7b4-400e-8139-6b1aeab9b4c9', 'treatment');
                    console.log('[AutoChatResize] Experiment enabled - reloading webpage...');
                    location.reload();
                } else {
                    console.log('[AutoChatResize] Experiment already enabled...');
                    return;
                }
            }
        }, 1000)
    }
    document.addEventListener('load', waitForFFZ());
})();