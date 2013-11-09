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
      var person = {}; // this is the same as, var person = new Object();
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
    });
    
    it("as NaN", function(){
      var nan = NaN;
      expect(isNaN(nan)).toBe(true);
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
  
  describe("page 44 - Operators", function() {
    
    describe("Unary operators", function() {
      it("++ should increment by 1", function() {
        var i = 0;
        i++;
        expect(i).toBe(1);
      });
      it("should decrement by 1", function() {
        var i = 0;
        i--;
        expect(i).toBe(-1);
      });
      it("should ++ increment by 1 before evaluation", function(){
        var i = 0;
        var result = 2 - ++i;
        expect(i).toBe(1);
        expect(result).toBe(1);
      });
      it("should ++ increment by 1 after evaluation", function(){
        var i = 0;
        var result = 2 - i++;
        expect(i).toBe(1);
        expect(result).toBe(2);
      });
    });
    
    describe("Bitwise operators", function() {});
    
    describe("Boolean operators", function() {
    });
    
    describe("Multiplicative operators", function() {
      describe("multiply", function(){
        it("simple multiplication works as expected", function() {
          var result = 2 * 3;
          expect(result).toBe(6);
        });
        it("if any number is NaN the result is NaN", function() {
          var result = 2 * NaN;
          expect(isNaN(result)).toBe(true);
        });
        it("if 0 and Infinity the result is NaN", function() {
          var result = 0 * NaN;
          expect(isNaN(result)).toBe(true);
        });
        it("if all numbers are not zero and Infinity is 1 of the numbers, the result is NaN", function() {
          var result = 2 * Infinity;
          expect(result).toBe(Infinity);
          
          var negativeResult = result * -1;
          expect(negativeResult).toBe(-Infinity);
        });
        it("Infinity times Infinity results in Infinity", function() {
          var result = Infinity * Infinity;
          expect(result).toBe(Infinity);
        });
        it("automatically converts non-Number types to Number via Number() before evaluation", function() {
          var result = "2" * 3;
          expect(result).toBe(6);
        });
      });
      describe("divide", function(){
        it("simple division works as expected", function() {
          var result = 10/2;
          expect(result).toBe(5);
        });
        it("if either number is NaN, the result is NaN", function() {
          var result = NaN/2;
          expect(isNaN(result)).toBe(true);
        });
        it("if 0 divided by zero, the result is NaN", function() {
          var result = 0/0;
          expect(isNaN(result)).toBe(true);
        });
        it("if numerator is non-zero and denominator is 0, result is [-|+]Infinity", function() {
          var result = -2/0;
          expect(result).toBe(-Infinity);
        });
        it("if Infinity is divided by any number, result [-|+]Infinity", function() {
          var result = -Infinity/0;
          expect(result).toBe(-Infinity);
        });
        it("automatically converts non-Number types to Number via Number() before evaluation", function() {
          var result = "10" / 2;
          expect(result).toBe(5);
        });
      }); 
      describe("modulus", function(){
        // TODO add tests for thses, pages 60-61
      });
    });
    
    describe("Additive operators", function() {
      // TODO add tests for these, pages 61-62
    });
    
    describe("Equality operators", function() {
    });
    
    describe("Rational operators", function() {
      // TODO add tests for these, pages 63-65
    });
    
    describe("Conditional or Ternary operators", function() {
      it("execute if else logic in 1 line", function() {
        var yes = true;
        var result = yes ? "yes was true" : "yes was false";
        expect(result).toBe("yes was true");
        
        yes = false;
        result = yes ? "yes was true" : "yes was false";
        expect(result).toBe("yes was false");
      });
    });
    
    describe("Assignment operators", function() {
    });
    
    describe("If statement", function() {
      it("simple if ... else example", function() {
        var result = "star";
        if (true){
          result += " wars";
        }
        expect(result).toBe("star wars");    
        
        if(false){
          result += "was a great plot";
        } else {
          result += " eposide 1 had no character developlent";
        }
        expect(result).toBe("star wars eposide 1 had no character developlent");
      });
    });
    
    describe("Do-While statement", function() {
      it("goes until while logic returns false", function() {
        var i = 0;
        do {
          i++;
        }while(i < 5);
        
        expect(i).toBe(5);
      });
      
      it("is a post-test loop", function() {
        var i = 0;
        do {
          i++;
        }while(false);
        expect(i).toBe(1);
      });
    });
    
    describe("While statement", function() {
      it("goes until while logic returns false", function() {
        var i = 0;
        while (i < 5) {
          i++;
        }
        expect(i).toBe(5);
      });
      
      it("is a pre-test loop", function() {
        var i = 0;
        while(false){
          i++;
        }
        expect(i).toBe(0);
      });
    });
    
    describe("For statement", function() {
      // TODO add tests for thses, pages 70-71
    });
    
    describe("For-In statement", function() {
      // TODO add tests for thses, pages 71-72
    });
    
    describe("Break", function() {
      it("exits to loop function immediately", function() {
        var count = 0;
        for(var p = 0; p < 5; p ++){
          if (p == 3){
            break;
          }
          count ++;
        }
        expect(count).toBe(3);
      });
    });
    
    describe("Conintue", function() {
      it("exits to loop function immediately", function() {
        var count = 0;
        for(var p = 0; p < 5; p ++){
          if (p == 3){
            continue;
          }
          count ++;
        }
        expect(count).toBe(4);
      });
    });
    
    describe("With statement", function() {
      it("evalates logic on top of with(object)", function() {
        var hash = {
          a: "alpha", 
        };
        
        var x;
        with(hash){
          x = a;
        }
        
        expect(x).toBe("alpha");
      });
    });
    
    describe("Switch statement", function() {
      var switchFunction = function(value){
        switch(value){
          case 1: return "one";
          case "two": return 2;
          default: return "default";
        }
      };
      
      expect(switchFunction(1)).toBe("one");
      expect(switchFunction("two")).toBe(2);
      expect(switchFunction()).toBe("default");
    });
    
    describe("Functions", function(){
      describe("argments", function() {
        it("present whether or not declared in method signature", function() {
          var returnFirstArgument = function(){
            return arguments[0];
          };
          
          expect(returnFirstArgument(1)).toBe(1);
        });
        
        it("are flexible", function() {
          var howManyArguments = function(){
            return arguments.length;
          };
          expect( howManyArguments()).toBe(0);
          expect( howManyArguments("abc", "xyz")).toBe(2);
        });
      });
      
      describe("overloading", function() {
        var robot = function(num1, num2){
          return num1 + num2;
        };
        robot = function(num1){
          return num1;
        };
        
        expect(robot(1, 2)).toBe(1);
      });
    });
  });

});
