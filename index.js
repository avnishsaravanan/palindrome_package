string.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("")
}
function reverse(string) {
    return Array.from(string).reverse().join("")
}

function phrase (input) {
    this.content = input;

this.comparison = function comparison() {
    return this.translation.toLowerCase();
}
//self contained palindrome object
this.palindrome = function palindrome() {
        return this.comparison() === this.comparison().reverse();
}}

//translated obejct

function phrasesT (input, input2) {
    this.content = input;
    this.translated = input2;}

phrasesT.prototype = new phrase();

