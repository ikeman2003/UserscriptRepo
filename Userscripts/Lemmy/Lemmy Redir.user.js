// ==UserScript==
// @name           Lemmy/KBin Redir
// @version        0.1.1
// @author         ikeman2003
// @description    Redirects all Lemmy/kbin links to the host of your choice mine being kbin.
// @match          *://*.lemmy.ml/c/*   
// @downloadURL    https://github.com/ikeman2003/UserscriptRepo/raw/main/Userscripts/Lemmy/Lemmy%20Redir.user.js
// @updateURL      https://github.com/ikeman2003/UserscriptRepo/raw/main/Userscripts/Lemmy/Lemmy%20Redir.user.js
// @run-at         document-start
// ==/UserScript==

// Enforce strict mode for better code quality
'use strict';

// Declare current URL as a constant
const currentURL = window.location.href;

// Declare the host URL as a constant
const hostURL = 'https://kbin.social/m/';

// Check if the current URL is leading to lemmy.ml if so, redirect to the host URL
if (currentURL.includes("lemmy.ml/c/")) {
    const newURL = currentURL.replace(/^https?:\/\/(www\.)?lemmy.ml\/c\//, hostURL);
    window.location.replace(newURL+"@lemmy.ml");
}

