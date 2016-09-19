/**
 * Created by pvalle on 19/09/2016.
 */

describe("The name validator", function(){

    describe("Checks for empty string", function() {

        it("should return true when the string is empty", function() {

            expect(checkEmpty("    ")).toBe(true);
        });

        it("should return false when the string is not empty", function() {
           expect(checkEmpty("Paul")).toBe(false);
        });
    });

    describe("Checks for first letter as capital", function() {

        it("should return true if first letter is capital", function() {
            expect(checkFirstLetterNotUppercase("Paul")).toBe(true);
        });

        it("should return false if first letter is not capital", function() {
            expect(checkFirstLetterNotUppercase("paul")).toBe(false);
        });
    });

});