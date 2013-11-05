// chapter 5 tests

describe("Chapter 5 Specs - Reference Types", function(){
  
  // we need 1 test to make the Jasmine test suite to run.
  it("pages 103-170", function() {
    expect(true).toBe(true);
  });
  
  describe("page 104 - the Object type", function(){
    describe("create object using", function() {
      xit("new Object()", function() {});
      xit("object literal and /key: value/ pairs", function() {});
      xit("object literal and /'key': value/ pairs", function() {});
      xit("dot notation", function() {});
    });
    
    describe("access object properties using", function(){
      xit("bracket notation", function() {});
      xit("dot notation", function() {});
      xit("when property has a space in it", function() {});
      xit("when property has a hyphen in it", function() {});
    });
  });
 
 
  describe("page 106 - the Array type", function() {
    describe("create array using", function() {
      xit("new Array()", function() {});
      xit("new Array(10)", function() {});
      xit("brackets", function() {});
    });
    
    describe("reading array values", function() {
      xit("array index starts at zero", function() {});
      xit("array.length returns number of elements starting from 1", function() {});
      xit("access value within array", function() {});
      xit("array.length - 1 returns the last element", function() {});
      xit("cannot access values outside array", function() {});
    });
    
    xit("use /instanceOf/ to detect Array", function() {});    
    
    describe("conversion methods", function() {
      xit("toString() returns comma separated values", function() {});
      xit("valueOf() returns comma separated values", function() {});
      xit("only use array variable returns comma separated values", function() {});
      xit("toLocaleString()", function() {});
      xit("toLocaleString() returns each element's toString() result", function() {});
      xit("join() returns comma separated values", function() {});
      xit("join('?') returns ? separated values")
    });
    
    describe("stack methods", function() {
    });
    
    describe("queue methods", function() {
    });
    
    describe("reordering methods", function() {
    });
    
    describe("manipulation methods", function() {
    });
    
    describe("location methods", function() {
    });
    
    describe("iterative methods", function() {
    });
    
    describe("reduction methods", function() {
    });
  });

  describe("page 122 - the Date type", function() {
    describe("inherited methods", function() {
    });
    
    describe("date formatting methods", function() {
    });
  });
  
});
