(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = phrase;

String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("")
}

function phrase (input) {
    this.content = input;

this.comparison = function comparison() {
    return this.letters().toLowerCase();
}

this.letters = function letters() {
    //return Array.from(this.content).filter(char => char.match(/[a-zA-Z]/g)).join("");
    return (this.content.match(/[a-z]/gi).join("") || []);
}

//self contained palindrome object
this.palindrome = function palindrome() {
        return this.comparison() === this.comparison().reverse();
}} 



},{}],2:[function(require,module,exports){
let phrase = require("./index.js");

let userString = prompt("Please enter text for palindrome test");
let test = new phrase(userString);

if (test.palindrome()) {
    alert(`"${userString}" is a palindrome`);
}
else {
    alert(`"${userString}" is not a palindrome`);
}
alert(userString);
},{"./index.js":1}]},{},[2]);
