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


