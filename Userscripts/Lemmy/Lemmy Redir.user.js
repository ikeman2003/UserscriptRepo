// ==UserScript==
// @name           Lemmy Redir
// @version        0.1
// @author         ikeman2003
// @description    Redirects all Lemmy links to the host of your choice mine being kbin.
// @match          *://*.lemmy.ml/c/*      
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

