let assert = require("assert");
let phrase = require("../index.js");

describe ("phrase", function() {
    describe("#palindrome", function() {

        it("should return false for non-palindrome", function() {
            let NP = new phrase("billow");
            assert(!NP.palindrome());
         })

        it("should return true for plain palindrome", function() {
            let plP = new phrase("racecar");
            assert(plP.palindrome());
        })

        it("should return true for a mixed state palindrome", function() {
            let mxP = new phrase("raCeCAr");
            assert(mxP.palindrome()); })
        
        it ("should return true for a punctuated palindrome", function() {
            let puP = new phrase("madam i'm adam");
            assert(puP.palindrome());
        })
    })
    it ("should return only letters when given punctuated text", function() {
        let lettertest = new phrase("it's the ny time's's");
        assert(lettertest.letters() === "itsthenytimess");
    })
})