// chapter 7 tests

describe("Chapter 7 Specs", function() {

	it("pages 217 - 238", function() {
			expect(true).toBe(true);
	});

	it("- functions have a name property that is equivalent to the identifier that immediately follows the 'function' keyword", function() {
	  FunctionNameExample01 = function() {
      function functionName(){
          //noop
      }
      
      //works only in Firefox, Safari, Chrome, and Opera
      return(functionName.name); //"functionName"

	  }
	  expect(FunctionNameExample01()).toEqual("functionName");
	});

	it("- function definition hoisting reads function declarations before the code executes. So a function declaration may appear after code that calls it and still work", function() {
	  FunctionDeclarationHoisting01 = function() {
      sayHi();
      function sayHi(){
        return("Hi!");
      };
      expect(FunctionDeclarationHoisting01()).toEqual("Hi!");
	  };
	});

	it("- function expressions act like other expressions and, therefore, must be assigned before usage.", function() {
	  FunctionDeclarationsErrorExample01 = function() {
	    
	    var condition = true;
	    
	    //never do this!
	    if(condition){
        function sayHi(){
          return("Hi!");
        }
	    } else {
        function sayHi(){
          return("Yo!");
        }
	    }

	    sayHi();
	  };

	    // A better way, one that works, would be to use 

	    // var sayHi;
	    //	    
	    // if(condition){
      //    sayHi = function(){
      //      return("Hi!");
      //    }
	    // } else {
      //    sayHi = function(){
      //      return("Yo!");
      //    }
	    // }
	  expect(FunctionDeclarationsErrorExample01()).toBeUndefined();
	});

	describe("Recursion, (page 220)", function() {
	  
	  it("- is the process by which a function calls itself by name.", function() {
	    RecursionExample01 = function() {
        function factorial(num){
          if (num <= 1){
            return 1;
          } else {
            return num * factorial(num-1);
          }
        }

        var anotherFactorial = factorial;
        factorial = null;
        return(anotherFactorial(4));  //error!
	    }

	    var errorMessage;

	    try {
	    	RecursionExample01();
	    } catch(e) {
	    	errorMessage = e.message;
	    }
	    expect(errorMessage).toContain("not a function");
	  });

	  it("- it's advisable to use the 'arguments.callee' pattern to avoid errors caused by changing values of the function being called.", function() {
	  	RecursionExample02 = function() {
        function factorial(num){
          if (num <= 1){
            return 1;
          } else {
            return num * arguments.callee(num-1);
          }
        }

        var anotherFactorial = factorial;
        factorial = null;
        return(anotherFactorial(4));  //24
	  	}
	  	expect(RecursionExample02()).toEqual(24);
	  });
	});

	describe("Closures (page 221)", function() {

		it("- anonymous functions and closures are not the same! Closures are functions that have access to variables from another function's scope.", function() {
		});

	  it("- a function that is defined inside another function adds the containing function's activation object into its scope chain.", function() {
	  });

	  it("- one side effect of closures is that the closure stores a reference to the entire variable object, not just to a particular variable", function() {
	    ClosureExample01 = function() {
        
        function createFunctions(){
          var result = new Array();
            
          for (var i=0; i < 10; i++){
              result[i] = function(){
  	            return i;
    	        };
          }
            
          return result;
        }
        
        var funcs = createFunctions();
        
        //every function outputs 10
        for (var i=0; i < funcs.length; i++){
          return(funcs[i]());
        }

        return funcs();
	    };
	    expect(ClosureExample01()).toEqual(10);
	  });

	  it("- you can avoid this side effect by creating another anonymous function within your function.", function() {
	  	ClosureExample02 = function() {
        function createFunctions(){
          var result = new Array();
            
          for (var i=0; i < 10; i++){
            result[i] = function(num){
              return function(){
                return num;
              };
            }(i);
          }
            
          return result;
        }
        
        var funcs = createFunctions();
        
        //every function outputs 10
        for (var i=0; i < funcs.length; i++){
          return(funcs[i]());
        }
	  	};
	  	// We test for 0 because i resets to 0 unlike in the example above
	  	expect(ClosureExample02()).toEqual(0);
	  });
	});

	describe("The 'this' Object (page 225)", function() {
	  
	  it("- always points to window in the case of anonymous functions which can cause issues later.", function() {
	    ThisObjectExample01 = function() {
        var name = "The Window";
        
        var object = {
          name : "My Object",
        
          getNameFunc : function(){
            return function(){
                return this.name;
            };
          }
        };
        
        return(object.getNameFunc()());  //"The Window"
	    };
	    expect(ThisObjectExample01()).toEqual("Greg");
	    // Accidentally a great example because the Window's name property is set to "Greg" in Chapter06Spec.js
	  });

	  it("- you can reset the value of this to the current scope by storing it in another variable that the closure can access.", function() {
	    ThisObjectExample02 = function() {
        var name = "The Window";
        
        var object = {
            name : "My Object",
        
            getNameFunc : function(){
                var that = this;
                return function(){
                    return that.name;
                };
            }
        };
        
        return(object.getNameFunc()());  //"MyObject"
	    };
	    expect(ThisObjectExample02()).toEqual("My Object");
	  });

	  it("- there are a few special cases to consider.", function() {
	  	ThisObjectExample03 = function() {
        var name = "The Window";
        
        var object = {
            name : "My Object",
        
            getName: function(){
                return this.name;
            }
        };
        
        // returns as predicted
        console.log(object.getName());     //"My Object"
        // 'this' value is maintained because object.getName and (object.getName) are defined to be equivalent
        console.log((object.getName)());   //"My Object"
        // does not maintain 'this' value because the value of the assignment is the function itself
        return((object.getName = object.getName)());   //"The Window" in non-strict mode
      };
      expect(ThisObjectExample03()).toEqual("Greg");
	  });
	});

	describe("Memory Leaks (page 227)", function() {
	  
	  it("are easy to create with anonymous functions. Make sure to reset your variables when possible to remove activation objects.", function() {
	  });
	});

	describe("Mimicking Block Scope (page 228)", function() {
	  
	  it("- JavaScript has no concept of block-level scoping, meaning variable defined inside of block statements are actually created in the containing function, not withing the block-statement.", function() {
	    function BlockScopeExample01() {
        function outputNumbers(count){
          for (var i=0; i < count; i++){
            console.log(i);
          }
      
          return(i);   //count
        }

        return outputNumbers(5);
	    };
	    expect(BlockScopeExample01()).toEqual(5);
	  });

	  it("- JavaScript will not allow you to redeclare variables inside of a function if they've already been initialized within a block.", function() {
	    function BlockScopeExample02() {
        function outputNumbers(count){
          for (var i=0; i < count; i++){
            console.log(i);
          }
      
          var i;    //variable re-declared
          return(i);   //count
        }

        return outputNumbers(5);
	    };
	    expect(BlockScopeExample02()).toEqual(5);
	  });

	  it("- JavaScript will allow you to use an anonymous function to mimic block scope by using parentheses to turn a function declaration into a function expression.", function() {
	    function BlockScopeExample03() {
        function outputNumbers(count){
      
          (function () {
            for (var i=0; i < count; i++){
              console.log(i);
            }
          })();
          
          return(i);   //causes an error
        }

        return outputNumbers(5);
	    };

	    var errorMessage;
	    try {
	    	BlockScopeExample03();
	    } catch(e) {
	    	errorMessage = e.message;
	    };
	    expect(errorMessage).toContain("");
	  });

	  it("- it is often used in the global scope outside of functions to limit the number of variables and functions added to the global scope. Private scopes allow multiple developers to use his or her variable without polluting the global scope.", function() {
	  });
	});

	describe("Private Variables (page 231)", function() {
	  
	  it("- there are privileged methods which are public methods with access to private variables.", function() {
	  });

	  it("- you can create them inside of a constructor.", function() {
	  });

	  it("- you can use privileged methods to hide data that should not be changed directly.", function() {
	    function PrivilegedMethodExample01() {
        function Person(name){
        
        // both privileged methods, accessible outside of the Person constructor but can access the private 'name' variable inside the constructor because they are closures.
          this.getName = function(){
            return name;
          };
      
          this.setName = function (value) {
            name = value;
          };
        }
        
        var person = new Person("Nicholas");
        console.log(person.getName());   //"Nicholas"
        person.setName("Greg");
        return(person.getName());   //"Greg"
	    };
	    expect(PrivilegedMethodExample01()).toEqual("Greg");
	  });
	});

	describe("Static Private Variables", function() {
	  
	  it("- can be used to implement privileged methods on custom types using either the constructor or prototype patterns.", function() {
	    PrivilegedMethodExample02 = function() {

	    	//uses parentheses to create an anonymous function expression
        (function(){
        
          var name = "";
          
          Person = function(value){                
            name = value;                
          };
          
          Person.prototype.getName = function(){
            return name;
          };
          
          Person.prototype.setName = function (value){
            name = value;
          };
        })();
        
        var person1 = new Person("Nicholas");
        console.log(person1.getName());   //"Nicholas"
        person1.setName("Greg");
        console.log(person1.getName());   //"Greg"
                           
        var person2 = new Person("Michael");
        console.log(person1.getName());   //"Michael"
        return(person2.getName());   //"Michael"
	    };
	    expect(PrivilegedMethodExample02()).toEqual("Michael");
	  });
	});

  describe("The Module Pattern", function() {
    
    it("creates private variables and privileged methods for singletons. Singletons are created in JS using object literal notation.", function() {
      ExampleFunction = function() {
      // Basic Syntax:
      // var singleton = function() {
      //
      //  //private variables and functions
      // var privateVariable = 10;

      // function privateFunction() {
      //   return false;
      // }
      // 
      //  //privileged/public methods and properties
      // return {
      //
      //  publicProperty: true,

      //  publicMethod : function() {
      //   privateVariable++;
      //   return privateFunction();
      // }
      // 
      // };
      //
      // }();
      // This uses an anonymous function that returns an object. Private variables and functions are defined first. Then an object literal is returned as the function value. The object literal contains the methods and values that should be public. Since the object is defined inside the anonymous function, all of the public methods have access to the private variables and functions. Essentially, the object literal defines the public interface for the singleton. 
      };
    });
    
    it("is useful when a singleton requires some sort of initialization and access to private variables.", function() {
      ModulePatternExample01 = function() {
        function BaseComponent(){
        }
        
        function OtherComponent(){
        }
    
        var application = function(){
        //The application object manages components.
        
          //private variables and functions
          var components = new Array();
        
          //initialization (new instance of base component is added to components array)
          components.push(new BaseComponent());
      
          //public interface (these are privileged methods with access to the components array)
          return {
            getComponentCount : function(){
              return components.length;
            },
    
            registerComponent : function(component){
              if (typeof component == "object"){
                components.push(component);
              }
            }
          };
        }();

        application.registerComponent(new OtherComponent());
        return(application.getComponentCount());  //2
        //
      }
      expect(ModulePatternExample01()).toEqual(2);
    });
  });

  describe("The Module-Augmentation Pattern", function() {
    
    it("is useful when the singleton object needs to be an instance of a particular type but must be augmented with additional properties and/or methods.", function() {
      ModuleAugmentationPatternExample01 = function() {
        function BaseComponent(){
        }
        
        function OtherComponent(){
        }
    
        var application = function(){
        
          //private variables and functions are defined first
          var components = new Array();
      
          //initialization
          components.push(new BaseComponent());
      
          //create a local copy of application. This is the local version of what will become the application object.
          var app = new BaseComponent();
      
          //public interface
          app.getComponentCount = function(){
            return components.length;
          };
      
          app.registerComponent = function(component){
            if (typeof component == "object"){
              components.push(component);
            }
          };
        
          //return it
          return app;
        }();

        console.log(application instanceof BaseComponent);
        application.registerComponent(new OtherComponent());
        return(application.getComponentCount());  //2
      };
      expect(ModuleAugmentationPatternExample01()).toEqual(2);
    });
  });
});

