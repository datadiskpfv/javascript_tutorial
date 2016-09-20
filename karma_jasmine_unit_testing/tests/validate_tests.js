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

    // check add function in test1.js
    describe("Check Math functions", function() {

        it("Check add function", function() {
            expect(add(4,6)).toEqual(10);
            expect(add(4,7)).not.toEqual(10);

            expect(add(4,6)).toBeGreaterThan(9);
            expect(add(4,6)).toBeLessThan(11);
        });

        it("Check multiply function", function() {
            expect(multiply(5,5)).toEqual(25);
            expect(multiply(10,10)).toEqual(100);
            expect(multiply(5,5)).not.toEqual(26);
        })
    });

    // checking test1.js script file
    describe("Checks test1.js Objects (Person, Driver)", function() {

        beforeEach(function() {
            person1 = new Person("Paul", "Valle");
            driver1 = new Driver("Paul", "Valle", "Black Cab");
            driver2 = new Driver("Paul", "Valle", "Black Cab");
        });

        it("Check the Person object", function() {
            expect(person1.getFirstName()).toEqual("Paul");
            expect(person1.getLastName()).toEqual("Valle");
            expect(person1.getName()).toMatch(/Paul(.+)Valle/);

            expect(driver1.getFirstName()).toContain("Paul");
        });

        it("Check the Driver object", function() {
            expect(driver1.getFirstName()).toEqual("Paul");
            expect(driver1.getLastName()).toEqual("Valle");
            expect(driver1.getCabType()).toEqual("Black Cab");
        });

        it("Check Objects equal", function() {
            // checking if objects are actually equal
            expect(driver1).toEqual(driver1);
            expect(driver1).toBe(driver1);
            expect(driver1).not.toBe(driver2);
        });

        it("Check Driver instanceof Object, Person and Driver", function() {
           expect(driver1 instanceof Object).toBe(true);
           expect(driver1 instanceof Person).toBe(true);
           expect(driver1 instanceof Driver).toBe(true);
        });

        it("Check undefined variables", function() {
            expect(undef1).toBeFalsy();
            expect(undef2).toBeFalsy();
            expect(undef3).toBeFalsy();

            // be more specific
            expect(undef1).toBeUndefined();
            expect(undef2).toBeNull();
        });

        it("Check defined variables", function() {
            expect(def1).toBeTruthy();
            expect(def2).toBeTruthy();

            // bit more specific
            expect(def1).toBeDefined();
        });

        it("Check that a string is contained", function() {
            expect(def2).toContain("World");
            expect(driver1.getFirstName()).toContain("Paul");
        });
    });

    // check add function in test1.js
    describe("Check try/catch block", function() {

        it("Check custom exception", function() {
            expect(function() {
             //    throw new CustomError("'I have manually thrown a Custom Error'");
             // }).toThrow("I have manually thrown a Custom Error");
            throw "Some exception"
        }).toThrow("Some exception");

        });

    });
});