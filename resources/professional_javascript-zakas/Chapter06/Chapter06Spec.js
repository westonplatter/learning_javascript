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
});
