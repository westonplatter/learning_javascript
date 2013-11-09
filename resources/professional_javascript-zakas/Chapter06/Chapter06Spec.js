// chapter 6 tests

describe("Chapter 6 Specs - Object Oriented Programming", function(){

    describe("page 174 - basic literal object creation", function(){

        var person = {
            name: "Nicholas",
            age: 29,
            job: "Software Engineer",

            sayName: function() {
                return this.name;
            }
        };

        it("name", function() {
            expect(person.name).toBe("Nicholas");
        });
        it("age", function() {
            expect(person.age).toBe(29);
        });
        it("job", function() {
            expect(person.job).toBe("Software Engineer");
        });
        it("sayName() returns name property value", function() {
            expect(person.sayName()).toBe("Nicholas");
        });
    });

    describe("page 175 - read-only property configuration", function(){

        var person = {};
        Object.defineProperty(person, "name", {
            configurable: false,    // read-only
            value: "Nicholas"       // Initial and only value
        });

        it("name", function() {
            expect(person.name).toBe("Nicholas");
        });
        person.name = "Nick";
        it("name change ignored", function() {
            expect(person.name).toBe("Nicholas");
        });
        delete person.name;
        it("name deletion ignored", function() {
            expect(person.name).toBe("Nicholas");
        });

        /*
         * Once configurable is set to false, it cannot be set to true. Throws error.
         *
         * jascks - Well, good idea expecting an error to be thrown, but Chrome, Firefox
         * and npm (via Node.js) all have different messages in the error, which is
         * what toThrow() is trying to match.  So, whether the test passes or fails
         * is environment specific.
         *
        it("setting name configurable true throws error", function() {
            expect(function() {

                Object.defineProperty(person, "name", {
                    configurable: true, // No can do
                    value: "Nicholas"
                });
            }).toThrow(new TypeError("Cannot redefine property: name"))
        });
        */
    });
});
