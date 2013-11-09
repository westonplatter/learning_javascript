// chapter 3 tests
//

describe("Chapter 3 Specs", function(){
  
  describe("show the 5 Javascript data types", function(){
    
    // test by creating variable, then checking "typeof" for that variable
    
    it("Undefined", function(){
      expect(typeof(undefined)).toBe("undefined");
    });
    it("Boolean",  function(){
      var isBoolean = true;
      expect(typeof(isBoolean)).toBe("boolean");
    });
    it("String", function(){
      var name = "John Doe";
      expect(typeof(name)).toBe("string");
    });
    it("Number", function(){
      var age = 36;
      expect(typeof(age)).toBe("number");
    });
    it("Object", function(){
      var person = new Object();
      expect(typeof(person)).toBe("object");
    });
    it("Function", function(){
      function isOld(age)
      {
        alert("Dude you're aging!");
      }
      expect(typeof(isOld)).toBe("function");
    });
  });
  
  describe("page 29 - apply use strict when declaring variables", function(){
    xit("withOUT 'use strict'");
    xit("with'use strict'");
  });
  
  describe("Boolean data types", function(){
    xit("page 34 - convert boolean types to other data types", function(){});
  });
  
  describe("Number data types", function(){
    xit("page 35 - init integer", function(){});
    xit("page 35 - init hex", function(){});
    xit("page 36 - init floating point", function(){});
    xit("page 37 - init NaN", function(){});
  });
  
  describe("String data types", function(){
    it("page 42 - can use single quotes", function(){
      var one = '1';
      expect(one).toBe("1");
    });
    it("page 42 - can use double quotes", function(){
      var two = "2";
      expect(two).toBe('2');
    });
    it("page 43 - get the length of a string", function(){
      var string_of_3_letters = "abc";
      expect(string_of_3_letters.length).toBe(3); 
      
      var empty_string = "";
      expect(empty_string.length).toBe(0);
    });  
    
    describe("page 43 - toString() conversions of non Strings", function(){
      var number = 11;
      it("toString() should return base10 string", function() {
        expect(number.toString()).toBe("11");  
      });
      it("toString() with radix 2 should return base2", function() {
        expect(number.toString(2)).toBe("1011");
      });
      it("toString() with radix 11 should return base11", function() {
        expect(number.toString(11)).toBe("10");
      });
      it("toString() with radix 16 should return hexidecimal", function() {
        expect(number.toString(16)).toBe("b");
      });
    });
    
    describe("page 44 - String() conversions", function(){
    });
  });
  
  describe("Object data type", function() {
    
    describe("page 45 - default object properities", function() {
    });    
    
    describe("page 45 - default object methods", function() {
    });
  });
  
  describe("Operators", function() {
    
    describe("Unary operators", function() {
      it("page 46: ++ should increment by 1", function() {
        var i = 0;
        i++;
        expect(i).toBe(1);
      });
      
      it("page 46: -- should decrement by 1", function() {
        var i = 0;
        i--;
        expect(i).toBe(-1);
      });
      xit("page 47: ++ increment before", function() {});
      xit("page 47: ++ increment after", function() {});
    });
    
    describe("Bitwise operators", function() {
    });
    
    describe("Boolean operators", function() {
    });
    
    describe("Multiplicative operators", function() {
    });
    
    describe("Additive operators", function() {
    });
    
    describe("Equality operators", function() {
    });
    
    describe("Conditional or ternary operators", function() {
      xit("should how it's the same as if ... else", function() {});
    });
    
    describe("If statement", function() {});
    
    describe("Do-While statement", function() {});
    
    describe("While statement", function() {});
    
    describe("For statement", function() {});
    
    describe("For-In statement", function() {});
    
    describe("Break in loop functions", function() {});
    
    describe("Conintue in loop functions", function() {});
    
    describe("Breaks AND Conintues in loop functions", function() {});
    
    describe("With statement", function() {});
    
    describe("Switch statement", function() {});
    
    describe("Functions", function(){
      describe("argments", function() {});
      describe("overloading", function() {});
    });
    
  });
})
