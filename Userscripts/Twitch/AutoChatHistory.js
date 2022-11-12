// ==UserScript==
// @name         AutoChatHistory
// @namespace    https://github.com/ikeman2003/UserscriptRepo
// @version      0.2.1
// @description  Auto enable Twitch Chat History experiment
// @author       ikeman2003 (fork of th3an7 AutoWARP)
// @downloadURL  https://raw.githubusercontent.com/ikeman2003/UserscriptRepo/main/Userscripts/Twitch/AutoChatHistory.js
// @updateURL    https://raw.githubusercontent.com/ikeman2003/UserscriptRepo/main/Userscripts/Twitch/AutoChatHistory.js
// @match        https://www.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitch.tv
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    'use strict';

    function waitForFFZ() {
        setTimeout(function () {
            if (unsafeWindow.ffz == undefined) {
                console.log('Waiting...');
                waitForFFZ();
            } else {
                if (unsafeWindow.ffz.experiments.Cookie.getJSON().experiment_overrides.experiments['994869b7-223b-4d34-b30c-46b403d6468b'] != 'treatment') {
                    unsafeWindow.ffz.experiments.setTwitchOverride('994869b7-223b-4d34-b30c-46b403d6468b', 'treatment');
                    console.log('Experiment enabled - reloading webpage...');
                    location.reload();
                } else {
                    console.log('Experiment already enabled...');
                    return;
                }
            }
        }, 1000)
    }
    document.addEventListener('load', waitForFFZ());
})();