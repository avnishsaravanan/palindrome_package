let phrase = require("./index.js");

let userString = prompt("Please enter text for palindrome test");
let test = new phrase(userString);

if (test.palindrome()) {
    alert(`"${userString}" is a palindrome`);
}
else {
    alert(`"${userString}" is not a palindrome`);
}
