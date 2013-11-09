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
  
  describe("page 34 - Boolean data types", function(){
    describe("convert Boolean to", function(){
      it("Boolean results in the same value", function() {
        expect(Boolean(true)).toBe(true);
      });
      it("String is true for non empty strings", function() {
        expect(Boolean("anything")).toBe(true);
      });
      it("String is false for empty strings", function() {
        expect(Boolean("")).toBe(false);
      });
      it("Number is false for zero", function() {
        expect(Boolean(0)).toBe(false);
      });
      it("Number is true for 1", function() {
        expect(Boolean(1)).toBe(true);
      });
      it("Number is false for NaN", function() {
        expect(Boolean(NaN)).toBe(false);
      });
    });
  });
  
  describe("page 35 - Number data types", function(){
    describe("declaring integers", function(){
      it("as ints", function() {
        var i = 5;
        expect(i).toBe(5);
      });
      it("as octals (base 8) requires the first char to be 0", function() {
        var octal = 070;
        expect(octal).toBe(56);
      });
      it("as hexidecimals (base 16) requires the first 2 chars to be 0x", function() {
        var hex = 0xA;
        expect(hex).toBe(10);
      });
    });
    it("as floating points requires 1 number to be after the decimal point", function(){
      var fp1 = 2.1;
      expect(fp1).toBe(2.1);
      
      var fp2 = 0.1;
      expect(fp2).toBe(0.1);
      
      var regularInteger = 1.;
      expect(regularInteger).toBe(1);
    });
    
    it("as NaN", function(){
      var nan = NaN;
      // see top of page 38
      expect(nan == NaN).toBe(false);
    });
  });
  
  describe("page 42 - String data types", function(){
    it("can use single quotes", function(){
      var one = '1';
      expect(one).toBe("1");
    });
    it("can use double quotes", function(){
      var two = "2";
      expect(two).toBe('2');
    });
    it("get the length of a string", function(){
      var string_of_3_letters = "abc";
      expect(string_of_3_letters.length).toBe(3); 
      
      var empty_string = "";
      expect(empty_string.length).toBe(0);
    });  
    
    describe("toString() conversion of", function(){
      it("Boolean returns true or false", function() {
         var yes = true;
         expect(yes.toString()).toBe("true");
         
         var no = false;
         expect(no.toString()).toBe("false");
      });
      describe("Numbers", function() {
        it("when integer with no args returns integer", function() {
          var number = 11;
          expect(number.toString()).toBe("11");
        });
        it("when integer with radix 2 should return base2", function() {
          var number = 11;
          expect(number.toString(2)).toBe("1011");
        });
        it("toString() with radix 11 should return base11", function() {
          var number = 11;
          expect(number.toString(11)).toBe("10");
        });
        it("toString() with radix 16 should return hexidecimal", function() {
          var number = 11;
          expect(number.toString(16)).toBe("b");
        });
      
        it("when floating point returns decimal", function() {
          var fp = 2.1;
          expect(fp.toString()).toBe("2.1");
        });
        it("when NaN returns /NaN/", function() {
          var nan = NaN;
          expect(nan.toString()).toBe("NaN");
        });
      });
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
