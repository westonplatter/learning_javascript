// chapter 4 tests

describe("Chapter 4 Specs", function(){
  
  // we need 1 test to make the Jasmine test suite to run.
  it("pages 85-101", function() {
    expect(true).toBe(true);
  });
    
  describe("Page 86 - Dynamic Properties", function(){
    it("are allowed with reference values.", function(){
      DynamicPropertiesExample01 = function(){
        var person = new Object();
        person.name = "Nicholas";
        return(person.name);    //"Nicholas"
      }
      expect(DynamicPropertiesExample01()).toEqual("Nicholas");
    });
    it("are not allowed with primitive values.", function(){
      DynamicPropertiesExample02 = function(){
        var name = "Nicholas";
        name.age = 27;
        return(name.age);    //undefined  
      }
      expect(DynamicPropertiesExample02()).toBeUndefined();
    });
  });
 
  describe("Page 88 - Argument Passing", function(){
   it("shows how arguments are passed by value.", function(){
    FunctionArgumentsExample01 = function(){ 
      function addTen(num) {
          num += 10;
          return num;
      }
      
      var count = 20
      var result = addTen(count);
      return(count);    //20
      return(result);   //10
    // the spec tests for 20 because the second return is  
    // unreachable after the first return value is found 
    }
    expect(FunctionArgumentsExample01()).toEqual(20);
   });

   it("shows how objects are accessed by reference even when they are passed into a function by value.", function(){
    FunctionArgumentsExample02 = function(){
      function setName(obj) {
          obj.name = "Nicholas";
      }
      
      var person = {};
      // var person = new Object();
      // this is the same as above.
      
      setName(person);
      return(person.name);    //"Nicholas"
    }
    expect(FunctionArgumentsExample02()).toEqual("Nicholas");
   });
 });
 
 describe("page 89 - Demonstrate instanceOf", function(){});

 describe("page 90 - Execution and Context Scope", function(){
   describe("show function can access variables in the parent context", function(){});
   describe("show function's variable definitions have first priority", function(){});
   describe("show that there are no block-level scopes", function(){});
 });

 describe("Page 91-95 Execution Context and Scope", function(){
  it("shows how scope chain includes local and global context",
      function(){
    ExecutionContextExample01 = function(){
      var color = "blue";
      
      function changeColor(){
          if (color === "blue"){
              color = "red";
          } else {
              color = "blue";
          }
      }
      
      changeColor();

      return("Color is now " + color);
    }
    expect(ExecutionContextExample01()).toEqual("Color is now red");
  });

  it("shows how scope chain allows a function to access variables belonging to parent execution contexts but not vice-versa.",
      function(){
        ExecutionContextExample02 = function(){
        var color = "blue";
        
        function changeColor(){
            var anotherColor = "red";
        
            function swapColors(){
                var tempColor = anotherColor;
                anotherColor = color;
                color = tempColor;
                
                //color, anotherColor, and tempColor are all accessible here
            }
        
            //color and anotherColor are accessible here, but not tempColor        
            swapColors();
        }
        
        changeColor();

        //anotherColor and tempColor aren't accessible here, but color is
        return("Color is now " + color);

        // This function has three execution contexts:
        // 1. global context - has one variable, color
        // 2. local context of changeColor - has one variable named another Color
        //    and one function named swapColors
        // 3. local context of swapColors - has one variable, tempColor
        //    that is accessible only in this context.
        //
        // Neither 1 nor 2 has access to tempColor.
        // Within swapColors, the variables of 1 and 2 are accessible since
        // they are parent execution contexts.
      }
    expect(ExecutionContextExample02()).toEqual("Color is now red");
  });

  it("allows for scope chain augmentation.", function(){
    ExecutionContextExample03 = function(){
      function buildUrl() {
          var qs = "?debug=true";
      
          with(location){
              var url = href + qs;        
          }
    //Here with() acts on the location object so location itself
    // is added to the front of the scope chain.   
          return url;
      }

      var result = buildUrl();
      return(result);
    }
    expect(ExecutionContextExample03()).toContain("debug=true");
  });

  it("automatically adds declared variables to the most immediate context available.", function(){
    ExecutionContextExample04 = function(){
      function add(num1, num2) {
        var sum = num1 + num2;
        return sum;
      }

      var result = add(10, 20);  //30
      return(sum);  //causes an error since sum is not a valid variable
    };

    var errorMessage;

    try{
      ExecutionContextExample04();
    }catch(e){
      errorMessage = e.message;
    }

    expect(errorMessage).toContain("sum");
  });

  it("automatically adds undeclared variables to the global scope.",
      function(){
    ExecutionContextExample05 = function(){
      function add(num1, num2) {
          sum = num1 + num2;
          return sum;
      }
      
      var result = add(10, 20);  //30
      return(sum);                //30
    };
    expect(ExecutionContextExample05()).toEqual(30);
  });

  it("uses an identifier lookup that starts at the front of the scope chain and continues up the chain until it finds a match or reaches the global context.",
      function(){
    ExecutionContextExample06 = function(){
      var color = "blue";

      function getColor(){
          return color;
      }

      return(getColor());  //"blue"
    };
    expect(ExecutionContextExample06()).toEqual("blue");
  });

  it("stops searching for identifiers after a match is found.",
      function(){
    ExecutionContextExample07 = function(){
      var color = "blue";

      function getColor(){
          var color = "red";
          return color;
      }

      return(getColor());  //"red"
    };
    expect(ExecutionContextExample07()).toEqual("red");
  });  
 });
});