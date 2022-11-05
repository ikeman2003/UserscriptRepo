// ==UserScript==
// @name         AutoChatResize
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto enable Twitch Chat Resize experiment
// @author       ikeman2003 (fork of th3an7 AutoWARP)
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
                if (unsafeWindow.ffz.experiments.Cookie.getJSON().experiment_overrides.experiments['e85998cd-a7b4-400e-8139-6b1aeab9b4c9'] != 'treatment') {
                    unsafeWindow.ffz.experiments.setTwitchOverride('e85998cd-a7b4-400e-8139-6b1aeab9b4c9', 'treatment');
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