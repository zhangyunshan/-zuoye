/*
Theme Name:yuncms theme
Theme URI:http://www.haothemes.com/name
Author:author
Author URI:http://www.haothemes.com
Description:yuncms
Version:1.0.0
License:MIT
Tags:wordpress,themes,haothemes,Bootstrap,full-width,one-column,font-awesome
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
require('./global');


//轮播时间控制
$('.carousel').carousel({
    interval: 2000
})



},{"./global":2}],2:[function(require,module,exports){
(function (global){
'use strict';
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
$(function () {

});
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])