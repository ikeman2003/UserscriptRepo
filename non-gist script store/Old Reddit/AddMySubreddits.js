// ==UserScript==
// @name Add Reddit Top Menuitems (My Subreddits )
// @description adds quickaccess menuitems: My Subreddits
// @grant       none
// @match          http://reddit.com/*
// @match          https://reddit.com/*
// @match          http://*.reddit.com/*
// @match          https://*.reddit.com/*
// @version     1.0.1
// @namespace ikeman2003
// ==/UserScript==
//http or https
var http = window.location.href.search("reddit.com");
var subreddit ="";

// get subreddit from url.
var substart = window.location.href.search("/r/")+3;
if (substart>2) {
	// found subreddit
	subreddit = window.location.href.substring(substart); 
	var subend = subreddit.search("/");
	if (subend >0) {
		subreddit= subreddit.substr(0,subend);
	}
	subreddit= '/r/'+ subreddit;
}
var subredditurl = window.location.href.substring(0,http) + 'reddit.com' + subreddit;
$(".flat-list.sr-bar.hover").append('<li><span class="separator">-</span><a class="choice" href="/subreddits/mine/">My Subreddits</a></li>')