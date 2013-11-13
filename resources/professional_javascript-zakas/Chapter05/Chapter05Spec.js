// chapter 5 tests

describe("Chapter 5 Specs - Reference Types", function(){
  
  // we need 1 test to make the Jasmine test suite to run.
  it("pages 103-170", function() {
    expect(true).toBe(true);
  });

  describe("page 104 - the Object type", function(){
    it("allows you to create an object using an object constructor.",
      function() {
      ObjectTypeExample01 = function(){
        var person = new Object();
        person.name = "Nicholas";
        person.age = 29;

        return(person.name + " " + person.age);
      };
      expect(ObjectTypeExample01()).toEqual("Nicholas 29");
    });

    it("allows you to use object literal notation to create a new object.",
      function(){
      ObjectTypeExample02 = function(){
        var person = {
            name : "Nicholas",
            age : 29
        };

        return(person.name + " " + person.age);
      };
      expect(ObjectTypeExample02()).toEqual("Nicholas 29");
    });          

    it("allows you to pass a large number of optional arguments to a function, the preferred way of doing this is with object literal notation.",
      function(){
      ObjectTypeExample04 = function(){
        function displayInfo(args) {
          var output = "";

          if (typeof args.name == "string"){
              output += "Name: " + args.name + "\n";
          }

          if (typeof args.age == "number") {
              output += "Age: " + args.age + "\n";
          }

          return(output);
        }
        
        displayInfo({
            name: "Nicholas",
            age: 29
        });
        
        displayInfo({
            name: "Greg"
        });
      };
      expect(ObjectTypeExample04()).toBeUndefined();
    });
  });

  describe("page 106 - the Array type", function() {
    it("can react unpredictably when you pass numbers to it's constructor.",
      function(){
      ArrayTypeExample01 = function(){
        var colors = new Array(3);      //create an array with three items
        var names = new Array("Greg");  //create an array with one item, the string "Greg"

        return(colors.length + names.length);
      };
      expect(ArrayTypeExample01()).toEqual(4);
    });


    it("discourages the use of commas in array literal notation.",
      function(){
      ArrayTypeExample02 = function(){
        var colors = ["red", "blue", "green"]; //creates an array with three strings
        var names = [];                        //creates an empty array
        var values = [1,2,];                   //AVOID! Creates an array with 2 or 3 items
        var options = [,,,,,];                 //AVOID! creates an array with 5 or 6 items
        
      //  return(colors.length);    //3
      //  return(names.length);     //0
      //  return(values.length);    //2 (FF, Safari, Opera) or 3 (IE)
      //  return(options.length);   //5 (FF, Safari, Opera) or 6 (IE)

      };
      expect(ArrayTypeExample02()).not.toEqual(6);
    });

    it("is unique in that it's length() method is not read-only.",
      function(){
      ArrayTypeExample03 = function(){
        var colors = ["red", "blue", "green"];
        colors.length = 2;
        return(colors[2]);
      };
      expect(ArrayTypeExample03()).toBeUndefined();
    });

    it("allows you to lengthen an array to include empty positions which, when called, will return undefined.",
      function(){
      ArrayTypeExample04 = function(){
        var colors = ["red", "blue", "green"];    //creates an array with three strings
        colors.length = 4;
        return(colors[3]);        //undefined
      };      
      expect(ArrayTypeExample04()).toBeUndefined();
    });

    it("can be used with the length method to add items to the end of an array.",
      function(){
      ArrayTypeExample05 = function(){
        var colors = ["red", "blue", "green"];    //creates an array with three strings
        colors[colors.length] = "black";          //add a color
        colors[colors.length] = "brown";          //add another color

      //  return(colors.length);    //5
      //  return(colors[3]);        //black
        return(colors[4]);        //brown
      };
      expect(ArrayTypeExample05()).toEqual("brown");
    });

    it("will automatically adjust its length when an item is placed in a position that's outside the current array.",
      function(){
      ArrayTypeExample06 = function(){
        var colors = ["red", "blue", "green"];    //creates an array with three strings
        colors[99] = "black";                     //add a color (position 99)
        return(colors.length);  //100
      };
      expect(ArrayTypeExample06()).toEqual(100);
    });

    it("will return the same value when toString() and valueOf() are called on it.",
      function(){
      ArrayTypeExample07 = function(){
        var colors = ["red", "blue", "green"];    //creates an array with three strings
        return(colors.toString());    //red,blue,green
        return(colors.valueOf());     //red,blue,green
        return(colors);               //red,blue,green
      };
      expect(ArrayTypeExample07()).toEqual("red,blue,green");
    });

    it("has a toLocaleString that returns the item as a string with localization.",
      function(){
      ArrayTypeExample08 = function(){
        var person1 = {
            toLocaleString : function () {
                return "Nikolaos";
            },
            
            toString : function() {
                return "Nicholas";
            }
        };
        
        var person2 = {
            toLocaleString : function () {
                return "Grigorios";
            },
            
            toString : function() {
                return "Greg";
            }
        };
        
        var people = [person1, person2];
        // return(people);                      //Nicholas,Greg
        // return(people.toString());           //Nicholas,Greg
        return(people.toLocaleString());     //Nikolaos,Grigorios
      }
      expect(ArrayTypeExample08()).toEqual("Nikolaos,Grigorios");
      });

    it("has a join method that allows you to choose which string separator to use.",
      function(){
      ArrayTypeJoinExample01 = function(){
        var colors = ["red", "green", "blue"];
        // return(colors.join(","));      //red,green,blue
        return(colors.join("||"));     //red||green||blue
      };
      expect(ArrayTypeJoinExample01()).toEqual("red||green||blue");
    });

    it("has methods that allow it to behave like a stack, including push() and pop() methods.",
      function(){
      ArrayTypeExample09 = function(){
        var colors = new Array();                      //create an array
        var count = colors.push("red", "green");       //push two items
        // return(count);  //2
        
        count = colors.push("black");                  //push another item on
        // return(count);  //3
        
        var item = colors.pop();                       //get the last item
        return(item);   //"black"
        // return(colors.length);  //2
      };
      expect(ArrayTypeExample09()).toContain("black")
    });


    it("has push() and pop() methods that play nice with all the other array methods.",
      function(){
      ArrayTypeExample10 = function(){
        var colors = ["red", "blue"];
        colors.push("brown");              //add another item
        colors[3] = "black";               //add an item
        // alert(colors.length);  //4

        var item = colors.pop();           //get the last item
        return(item);  //"black"
      };
      expect(ArrayTypeExample10()).toEqual("black");  
    });

    it("will act as a queue when using the shift() method in combination with push()",
      function(){
      ArrayTypeExample11 = function(){
        var colors = new Array();                      //create an array
        var count = colors.unshift("red", "green");    //push two items
        // alert(count);  //2

        count = colors.unshift("black");               //push another item on
        // alert(count);  //3

        var item = colors.pop();                     //get the first item
        // alert(item);   //"green"
        return(colors.length);  //2
      };
      expect(ArrayTypeExample11()).toEqual(2);
    });

    it("has a reverse() method that allow you to reverse the order of items in an array",
      function(){
      ArrayTypeExample13 = function(){
        var values = [1, 2, 3, 4, 5];
        values.reverse();
        return(values);       //5,4,3,2,1
      };
      expect(ArrayTypeExample13()).toEqual([5,4,3,2,1]);
    });

    it("has a sort() method that puts the items in ascending order with the smallest value first.",
      function(){
      ArrayTypeExample14 = function(){
        var values = [0, 1, 5, 10, 15];
        values.sort();
        return(values);    //0,1,10,15,5
      };
      expect(ArrayTypeExample14()).toEqual([0,1,10,15,5]);
    });

    it("allows you to pass a compare() method as an argument to the sort() method.",
      function(){
      ArrayTypeExample15 = function(){
        function compare(value1, value2) {
            if (value1 < value2) {
                return -1;
            } else if (value1 > value2) {
                return 1;
            } else {
                return 0;
            }
        }
        
        var values = [0, 1, 5, 10, 15];
        values.sort(compare);
        return(values);    //0,1,5,10,15
      };
      expect(ArrayTypeExample15()).toEqual([0,1,5,10,15]);
    });
  
  describe(" - Manipulation Methods (page 116)", function(){

    it("include a concat() method that allows you to create a new array based on the items in the current array",
      function(){
      ArrayTypeConcatExample01 = function(){
        var colors = ["red", "green", "blue"];
        var colors2 = colors.concat("yellow", ["black", "brown"]);
        
        // alert(colors);     //red,green,blue        
        return(colors2);    //red,green,blue,yellow,black,brown
      };
      expect(ArrayTypeConcatExample01()).toContain("brown");
    });

    it("include a slice() method that takes two arguments, start, and stop. It starts copying from the position of the first argument and stops copying when it reaches the position before the second.",
      function(){
      ArrayTypeSliceExample01 = function(){
        var colors = ["red", "green", "blue", "yellow", "purple"];
        var colors2 = colors.slice(1);
        var colors3 = colors.slice(1,4);
        
        // alert(colors2);   //green,blue,yellow,purple
        return(colors3);   //green,blue,yellow
      };
      expect(ArrayTypeSliceExample01()).toEqual(["green","blue","yellow"]);
    });

    it("include a splice() method that's used to insert items into the middle of an array. It can be used to delete, insert, or replace items in an array.",
      function(){
      ArrayTypeSpliceExample01 = function(){
        var colors = ["red", "green", "blue"];
        var removed = colors.splice(0,1);              //remove the first item
        // alert(colors);     //green,blue
        // alert(removed);    //red - one item array
        
        removed = colors.splice(1, 0, "yellow", "orange");  //insert two items at position 1
        // alert(colors);     //green,yellow,orange,blue
        // alert(removed);    //empty array

        removed = colors.splice(1, 1, "red", "purple");    //insert two values, remove one
        // alert(colors);     //green,red,purple,orange,blue
        return(removed);    //yellow - one item array
      };
      expect(ArrayTypeSpliceExample01()).toEqual(["yellow"]);
    });
  });
  
  describe("- Location Methods (page 118)", function(){

    it("include an indexOf() method that starts searching from the front of the array and continues to the back. It also includes a lastIndexOf() that searches from back to front.",
      function(){
      ArrayIndexOfExample01 = function(){
        var numbers = [1,2,3,4,5,4,3,2,1];
        
        // alert(numbers.indexOf(4));        //3
        // alert(numbers.lastIndexOf(4));    //5
        
        // alert(numbers.indexOf(4, 4));     //5
        // alert(numbers.lastIndexOf(4, 4)); //3       

        var person = { name: "Nicholas" };
        var people = [{ name: "Nicholas" }];
        var morePeople = [person];
        
        // alert(people.indexOf(person));     //-1
        return(morePeople.indexOf(person)); //0
      };
      expect(ArrayIndexOfExample01()).toEqual(0);
    });
  });

  describe("- Iterative Methods (page 119)", function(){

    it("include two methods, every(), and sum() which query the array for items matching a criteria. With every(), the function returns true if every item in the array returns true. With some(), the function returns true if a minimum of one item in the array returns true.",
      function(){
      ArrayEveryAndSomeExample01 = function(){
        var numbers = [1,2,3,4,5,4,3,2,1];
        
        var everyResult = numbers.every(function(item, index, array){
            return (item > 2);
        });
        
        // alert(everyResult);       //false
        
        var someResult = numbers.some(function(item, index, array){
            return (item > 2);
        });
        
        return(someResult);       //true
      };
      expect(ArrayEveryAndSomeExample01()).toEqual(true);
    });

    it("include a filter() method that returns an array filled with items that match a criteria.",
      function(){
      ArrayFilterExample01 = function(){
        var numbers = [1,2,3,4,5,4,3,2,1];
        
        var filterResult = numbers.filter(function(item, index, array){
            return (item > 2);
        });
        
        return(filterResult);   //[3,4,5,4,3]
      };
      expect(ArrayFilterExample01()).toEqual([3,4,5,4,3]);
    });

    it("include a map() method that returns an array in which every item is the result of an original item being acted upon.",
      function(){
      ArrayMapExample01 = function(){
        var numbers = [1,2,3,4,5,4,3,2,1];
        
        var mapResult = numbers.map(function(item, index, array){
            return item * 2;
        });
        
        return(mapResult);   //[2,4,6,8,10,8,6,4,2]        
      };
      expect(ArrayMapExample01()).toEqual([2,4,6,8,10,8,6,4,2]);
    });
  });
  
  describe("- Reduction Methods (page 121)", function(){

    it("include a reduce() method which takes four arguments: the previous value, the current value, the item's index, and the array object. They also include a reduceRight() method which visits the array items in the opposite direction. ",
      function(){
      ArrayReductionExample01 = function(){
        var values = [1,2,3,4,5];
        var sum = values.reduce(function(prev, cur, index, array){
            return prev + cur;
        });
        return(sum);
      };
      expect(ArrayReductionExample01()).toEqual(15);
    });
  });
});

  describe("page 122 - the Date type", function() {

    it("includes a date constructor that can be used with the 'new' operator.",
      function(){
      DateTypeExample01 = function(){
      var now = new Date();
      return(now);
      };
      expect(DateTypeExample01()).toBeDefined();
    });

    it("includes a parse() method that attempts to convert a string into a millisecond representation of a date.",
      function(){
      DateTypeExample01 = function(){
        var someDate = new Date(Date.parse("May 25, 2004"));
        return(someDate).toString();
        // needed to add toString() for the test to pass.
      };
      expect(DateTypeExample01()).toContain("May");
    });

    it("includes a UTC() method that is similar to parse() but takes different arguments and creates a date and time in the local time zone, not GMT.",
      function(){
      DateTypeConstructorExample01 = function(){
        //January 1, 2000 at midnight in local time
        var y2k = new Date(2000, 0);
        // alert(y2k.toLocaleString());
        
        //May 5, 2005 at 5:55:55 PM in local time
        var allFives = new Date(2005, 4, 5, 17, 55, 55);
        return(allFives.toLocaleString());
      };
      expect(DateTypeConstructorExample01()).toEqual('5/5/2005 5:55:55 PM');
    });

    it("does not work with valueOf() because the value is over-ridden to return the millisecond representation. i.e. you can not get the value as a string but that does not mean the date type does have value. The values are available internally for comparison purposes.",
      function(){
      DateTypeValueOfExample01 = function(){
        var date1 = new Date(2007, 0, 1);          //January 1, 2007
        var date2 = new Date(2007, 1, 1);          //February 1, 2007
        
        // alert(date1 < date2);  //true
        return(date1 > date2);  //false
      };
      expect(DateTypeValueOfExample01()).toEqual(false);
    });
  });
  
  describe("page 128 - the Regex type ", function() {
    
    describe("- Instance properties (page 131) are built-in properties that allow you to get information about the pattern. These include:", 
      function() {
        it(" - global - a bool indicating whether a g flag has been set", 
          function(){
          RegExpInstancePropertiesExample01 = function(){
            var pattern1 = /\[bc\]at/i;
            
            // alert(pattern1.global);     //false
            // alert(pattern1.ignoreCase); //true
            // alert(pattern1.multiline);  //false
            // alert(pattern1.lastIndex);  //0
            // alert(pattern1.source);     //"\[bc\]at"

            var pattern2 = new RegExp("\\[bc\\]at", "i");
            
            // alert(pattern2.global);     //false
            // alert(pattern2.ignoreCase); //true
            // alert(pattern2.multiline);  //false
            // alert(pattern2.lastIndex);  //0
            return(pattern2.source);     //"\[bc\]at"
        };
          expect(true).toBe(true);
          expect(false).toBe(false);
          expect(RegExpInstancePropertiesExample01()).toEqual("\\[bc\\]at");
      });
    it(" - ignoreCase - a bool indicating whether the i flag has been set");
    it(" - multiline - a bool indicating whether the m flag has been set");
    it(" - lastIndex - an integer indicating the character position where the next match will be attempted (always 0 to begin)");
    it(" - source - the string source of the regular expression.");
    });
    
    describe("- Instance methods (page 132)", function(){

      it("include exec() which is intended for use with capturing groups.",
        function(){
        RegExpExecExample01 = function(){
          var text = "mom and dad and baby";
          
          var pattern = /mom( and dad( and baby)?)?/gi;
          var matches = pattern.exec(text);
          
          // alert(matches.index);    //0
          // alert(matches.input);    //"mom and dad and baby"
          // alert(matches[0]);       //"mom and dad and baby"
          // alert(matches[1]);       //" and dad and baby"
          return(matches[2]);       //" and baby"
        };
        expect(RegExpExecExample01()).toEqual(" and baby");
      });

      it("include an option to pass a global flag with a call to exec, which results in each subsequent call returning the next match in the string until the end of the string is reached.",
        function(){
        RegExpExecExample02 = function(){
          var text = "cat, bat, sat, fat";        
          var pattern1 = /.at/;
          
          var matches = pattern1.exec(text);        
          // alert(matches.index);    //0
          // alert(matches[0]);       //"cat"
          // alert(pattern1.lastIndex);//0

          matches = pattern1.exec(text);        
          // alert(matches.index);    //0
          // alert(matches[0]);       //"cat"
          // alert(pattern1.lastIndex);//0

          var pattern2 = /.at/g;
          
          var matches = pattern2.exec(text);        
          // alert(matches.index);    //0
          // alert(matches[0]);       //"cat"
          // alert(pattern2.lastIndex);//0

          matches = pattern2.exec(text);        
          // alert(matches.index);    //5
          // alert(matches[0]);       //"bat"
          return(pattern2.lastIndex);//0
        };
        expect(RegExpExecExample02()).toEqual(8);
// no idea why this is 8 here...
      });
      
      it("include test(), which accepts a string argument and returns true if the pattern matches the argument. Useful for when you want to know if a pattern is matched but do not want to return the string itself.",
        function(){
        RegExpTestExample01 = function(){
          var text = "cat, bat, sat, fat";        
          var pattern = /.at/;
          
          if (pattern.test(text)){
              return("The pattern was matched.");
        };
        expect(RegExpTestExample01()).toContain("The pattern");
        };
      });
    });
    
    describe("- Constructor Properties (page 134)", function(){
      it("each have a verbose and short name.",
        function(){
        RegExpConstructorPropertiesExample01 = function(){
          var text = "this has been a short summer";
          var pattern = /(.)hort/g;
          
          /*
           * Note: Opera doesn't support input, lastMatch, lastParen, or multiline.
           * Internet Explorer doesn't support multiline.
           */        
          if (pattern.test(text)){
              // alert(RegExp.input);               //this has been a short summer
              // alert(RegExp.leftContext);         //this has been a            
              // alert(RegExp.rightContext);        // summer
              // alert(RegExp.lastMatch);           //short
              // alert(RegExp.lastParen);           //s
              return(RegExp.multiline);           //false
          }
        };
        expect(RegExpConstructorPropertiesExample01()).toBe(false);
      });

      it("can store up to nine capturing-group matches, accessed via RegExp.$1-$9",
        function(){
        RegExpConstructorPropertiesExample03 = function(){
          var text = "this has been a short summer";
          var pattern = /(..)or(.)/g;
                
          if (pattern.test(text)){
              // alert(RegExp.$1);       //sh
              return(RegExp.$2);       //t
          };
        };
        expect(RegExpConstructorPropertiesExample03()).toEqual("t");
      });
    });
  });

  describe("page 136 - the Function type", function(){
    
    it("allows you to have multiple names for a single function",
      function(){
      FunctionTypeExample01 = function(){
        function sum(num1, num2){
            return num1 + num2;
        }        
        // alert(sum(10,10));    //20
        
        var anotherSum = sum;        
        // alert(anotherSum(10,10));  //20
        
        sum = null;        
        return(anotherSum(10,10));  //20
      };
      expect(FunctionTypeExample01()).toEqual(20);
    });

    describe("declarations vs expressions (page 138)", function(){

      it("- function declarations are read and added to the execution context before the code begins running.",
        function(){
        FunctionDeclarationExample01 = function(){
          return(sum(10,10));    //20
      
          function sum(num1, num2){
              return num1 + num2;
          }
        };
        expect(FunctionDeclarationExample01()).toEqual(20);
      });

      it("- function expressions are considered part of a variable initialization statement rather than a function declaration and hence are not hoisted to the top of the source tree.",
        function(){
        FunctionInitializationExample01 = function(){
          alert(sum(10,10));    //causes an error
      
          var sum = function(num1, num2){
              return num1 + num2;
          };

        };
        var errorMessage;

        try{
          sum();
        }catch(e){
          errorMessage = e.message;
        }
        expect(errorMessage).toContain("sum");
      });
    });

    describe("functions as values (page 139)", function(){

      it("- allows a function to be used in any place any other value can be used.",
        function(){
        FunctionAsAnArgumentExample01 = function(){
          function callSomeFunction(someFunction, someArgument){
            return someFunction(someArgument);
          }

          function add10(num){
              return num + 10;
          }
          
          var result1 = callSomeFunction(add10, 10);
          // alert(result1);   //20
          
          function getGreeting(name){
              return "Hello, " + name;
          }
          
          var result2 = callSomeFunction(getGreeting, "Nicholas");
          return(result2);   //Hello, Nicholas
        };
        expect(true).toBe(true);
      });
    });

    describe("function internals (page 141)", function(){

      it("- functions contain two special objects: arguments, and this. The arguments object has a property, callee, which is a pointer to the function that owns the arguments object.",
        function(){
        FunctionTypeArgumentsExample01 = function(){
          function factorial(num){
              if (num <= 1) {
                  return 1;
              } else {
                  return num * arguments.callee(num-1)
              }
          }

          var trueFactorial = factorial;
          
          factorial = function(){
              return 0;
          };
          
          // alert(trueFactorial(5));   //120
          return(factorial(5));       //0
        };
        expect(FunctionTypeArgumentsExample01()).toEqual(0);
      });

      it("- the this object is a reference to the context object that the function is operating on. In this case, the window object, then the 'o' object.",
        function(){
        FunctionTypeThisExample01 = function(){
          window.color = "red";
          var o = { color: "blue" };
          
          function sayColor(){
              return(this.color);
          }
          
          sayColor();     //red
          
          o.sayColor = sayColor;
          return o.sayColor();   //blue
        };
        expect(FunctionTypeThisExample01()).toBe("blue");
      });

      it("- the caller property contains a reference to the function that called this function.",
        function(){
        FunctionTypeArgumentsCallerExample01 = function(){
          function outer(){
              inner();
          }
          
          function inner(){
              return(inner.caller);
          }
          
          outer();
        };
        expect(FunctionTypeArgumentsCallerExample01()).toBeUndefined();
      });

      it("- for a looser coupling, you can access the function caller via arguments.callee.caller.",
        function(){
        FunctionTypeArgumentsCallerExample02 = function(){  
         function outer(){
              inner();
          }
          
          function inner(){
              return(arguments.callee.caller);
          }
          
          outer();
        };
        expect(FunctionTypeArgumentsCallerExample02()).toEqual();
      });
    });

    describe("function properties and methods (page 143)", function(){

      it("- include a length property that indicates the number of named arguments that the function expects.",
        function(){
        FunctionTypeLengthPropertyExample01 = function(){
          function sayName(name){
              // alert(name);
          }      
          
          function sum(num1, num2){
              return num1 + num2;
          }
          
          function sayHi(){
              // alert("hi");
          }
          
          // alert(sayName.length);  //1
          // alert(sum.length);      //2
          return(sayHi.length);    //0
        };
        expect(FunctionTypeLengthPropertyExample01()).toEqual(0);
      });

      it("- include an an apply() method that takes two arguments: the value of 'this' inside the function, and an array of arguments. It also allows you to substitute the array with the arguments object.",
        function(){
        FunctionTypeApplyMethodExample01 = function(){
          function sum(num1, num2){
              return num1 + num2;
          }
          
          function callSum1(num1, num2){
              return sum.apply(this, arguments);
          }
          
          function callSum2(num1, num2){
              return sum.apply(this, [num1, num2]);
          }
          
          // alert(callSum1(10,10));   //20
          return(callSum2(10,10));   //20
        };
        expect(FunctionTypeApplyMethodExample01()).toEqual(20);
      });

      it("- include a call() method that behaves similarly to apply() but takes different arguments. The first arg is the 'this' value, but the remaining arguments are passed directly into the function.",
        function(){
        FunctionTypeCallMethodExample01 = function(){
          function sum(num1, num2){
              return num1 + num2;
          }
          
          function callSum(num1, num2){
              return sum.call(this, num1, num2);
          }
          
          return(callSum(10,10));   //20
        };
        expect(FunctionTypeCallMethodExample01()).toEqual(20);
      });

      it("- these methods are particularly useful for augmenting the 'this' value inside of the function.",
        function(){
        FunctionTypeCallExample01 = function(){
          window.color = "red";
          var o = { color: "blue" };
          
          function sayColor(){
              alert(this.color);
          }
          
          sayColor();            //red - acts on the global scope (window)
          
          sayColor.call(this);   //red - acts on the global scope (window)
          sayColor.call(window); //red - still on the global scope
          sayColor.call(o);      //blue - defines its own scope
        };
      });

      it("- includes a bind() method that creates a new function instance whose 'this' value is bound to the value that was passed into bind.",
        function(){
        FunctionTypeBindMethodExample01 = function(){
          window.color = "red";
          var o = { color: "blue" };
                             
          function sayColor(){
              return(this.color);
          }
          var objectSayColor = sayColor.bind(o);
          objectSayColor();   //blue
        };
      });
    });
  });
  
  describe("page 146 - Primitive Wrapper Types", function(){

    it("are different from reference types namely in the lifetime of the object. They only exist for one line of code before being destroyed. Given their limitations, they can be useful for manipulating primitive values.", function(){
    });

    describe("the Boolean type (page 148)", function(){

      it("Boolean objects can act unpredictably when used with Boolean expressions and really shouldn't ever be used.",
        function(){
        BooleanTypeExample01 = function(){
          var falseObject = new Boolean(false);
          var result = falseObject && true;
          // alert(result);  //true

          var falseValue = false;
          result = falseValue && true;
          // alert(result);  //false
          
          // alert(typeof falseObject);   //object
          // alert(typeof falseValue);    //boolean
          // alert(falseObject instanceof Boolean);  //true
          return(falseValue instanceof Boolean);   //false
        };
        expect(BooleanTypeExample01()).toEqual(false);
      });
    });

    describe("the Number type (page 149)", function(){

      beforeEach(function(){
        NumberTypeExample01 = function(){
          numberObject = new Number(10);
          numberValue = 99;
          
          //toString() using a radix
          console.log(numberObject.toString());       //"10"
          console.log(numberObject.toString(2));      //"1010"
          console.log(numberObject.toString(8));      //"12"
          console.log(numberObject.toString(10));     //"10"
          console.log(numberObject.toString(16));     //"a"
          
          //toFixed()
          console.log(numberObject.toFixed(2));    //outputs "10.00"

          numberObject = new Number(99);
          console.log(numberObject.toPrecision(1));    //"1e+2"
          console.log(numberObject.toPrecision(2));    //"99"
          console.log(numberObject.toPrecision(3));    //"99.0"
             
          console.log(typeof numberObject);   //object
          console.log(typeof numberValue);    //number
          console.log(numberObject instanceof Number);  //true
          return(numberValue instanceof Number);   //false
        };
      });

      it("- overrides valueOf(), toLocaleString(), and toString().",
        function(){
        expect(NumberTypeExample01()).toEqual(false);
      });
      
      it("- includes a toFixed() method that returns a string representation of a number with a specified number of decimal points.", function(){
        expect(numberObject.toFixed(2)).toEqual("99.00");
      });

      it("- includes a toPrecision() method that returns either the fixed or the exponential representation of a number depending on which makes the most sense. It takes one argument, the number of digits to use to represent the number.", function(){
        expect(numberObject.toPrecision(3)).toEqual("99.0");
      });
    });

    describe("the String type (page 151)", function(){

      it("is the object representation for strings and is created using the string constructor.",
        function(){
        StringTypeExample01 = function(){
          var stringObject = new String("hello world");
          var stringValue = "hello world";
          
          // alert(typeof stringObject);   //"object"
          // alert(typeof stringValue);    //"string"
          // alert(stringObject instanceof String);  //true
          return(stringValue instanceof String);   //false
        };
        expect(StringTypeExample01()).toEqual(false);
      });

      it("has a variety of manipulation methods that return a primitive string value as the result while leaving the original string unchanged.",
        function(){
        StringTypeManipulationMethodsExample01 = function(){
          var stringValue = "hello world";
          console.log(stringValue.slice(3));        //"lo world"
          console.log(stringValue.substring(3));    //"lo world"
          console.log(stringValue.substr(3));       //"lo world"
          console.log(stringValue.slice(3, 7));     //"lo w"
          console.log(stringValue.substring(3,7));  //"lo w"
          console.log(stringValue.substr(3, 7));    //"lo worl"
          
          console.log(stringValue.slice(-3));         //"rld"
          console.log(stringValue.substring(-3));     //"hello world"
          console.log(stringValue.substr(-3));        //"rld"
          console.log(stringValue.slice(3, -4));      //"lo w"
          console.log(stringValue.substring(3, -4));  //"hel"
          return(stringValue.substr(3, -4));     //"" (empty string)
        };
        expect(StringTypeManipulationMethodsExample01()).toEqual("");
      });

      it("has location methods indexOf() and lastIndexOf() that allow you locate substrings within another string - both return '-1' if the substring isn't found.",
        function(){
        StringTypeLocationMethodsExample01 = function(){
          var stringValue = "hello world";
          console.log(stringValue.indexOf("o"));         //4
          console.log(stringValue.lastIndexOf("o"));     //7
          console.log(stringValue.indexOf("o", 6));         //7
          return(stringValue.lastIndexOf("o", 6));     //4
        };
        expect(StringTypeLocationMethodsExample01()).toEqual(4);  
      });

      it("has location methods that when paired with a loop, allows you to locate all instances of a substring.",
        function(){
        StringTypeLocationMethodsExample02 = function(){
          var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
          var positions = new Array();
          var pos = stringValue.indexOf("e");
          
          while(pos > -1){
              positions.push(pos);
              pos = stringValue.indexOf("e", pos + 1);
          }
              
          return(positions);    //"3,24,32,35,52"
        };
        expect(StringTypeLocationMethodsExample02()).toEqual([3,24,32,35,52]);
      });

      it("has a trim() method that removes leading and trailing white space",
        function(){
      });

      it("has toUpperCase() and toLowerCase() case conversion methods.",
        function(){
      })

      it("has several pattern matching methods including match(), search(), and replace()",
        function(){
        StringTypePatternMatchingExample01 = function(){
          var text = "cat, bat, sat, fat"; 
          var pattern = /.at/;
          
          var matches = text.match(pattern);        
          console.log(matches.index);        //0
          console.log(matches[0]);           //"cat"
          console.log(pattern.lastIndex);    //0

          var pos = text.search(/at/);
          console.log(pos);   //1

          var result = text.replace("at", "ond");
          console.log(result);    //"cond, bat, sat, fat"

          result = text.replace(/at/g, "ond");
          console.log(result);    //"cond, bond, sond, fond"

          result = text.replace(/(.at)/g, "word ($1)");
          console.log(result);    //word (cat), word (bat), word (sat), word (fat)
          
          function htmlEscape(text){
              return text.replace(/[<>"&]/g, function(match, pos, originalText){
                  switch(match){
                      case "<":
                          return "&lt;";
                      case ">":
                          return "&gt;";
                      case "&":
                          return "&amp;";
                      case "\"":
                          return "&quot;";
                  }             
              });
          }
          
          return(htmlEscape("<p class=\"greeting\">Hello world!</p>")); //&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;

          var colorText = "red,blue,green,yellow";
          var colors1 = colorText.split(",");      //["red", "blue", "green", "yellow"]
          var colors2 = colorText.split(",", 2);   //["red", "blue"]
          var colors3 = colorText.split(/[^\,]+/); //["", ",", ",", ",", ""]
        };
        expect(StringTypePatternMatchingExample01()).toEqual("&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;");
      });

      it("has a localeCompare() method which compares one string to another and returns one of three values: positive, negative, or zero.",
        function(){
        StringTypeLocaleCompareExample01 = function(){
          var stringValue = "yellow";       
          console.log(stringValue.localeCompare("brick"));  //1
          console.log(stringValue.localeCompare("yellow")); //0
          console.log(stringValue.localeCompare("zoo"));    //-1
          
          //preferred technique for using localeCompare()
          function determineOrder(value) {
              var result = stringValue.localeCompare(value);
              if (result < 0){
                  return("The string 'yellow' comes before the string '" + value + "'.");
              } else if (result > 0) {
                  return("The string 'yellow' comes after the string '" + value + "'.");
              } else {
                  return("The string 'yellow' is equal to the string '" + value + "'.");
              }
          }
          
          determineOrder("brick");
          determineOrder("yellow");
          return determineOrder("zoo");
        };
        expect(StringTypeLocaleCompareExample01()).toEqual("The string 'yellow' comes before the string 'zoo'.");
      });
    });

    describe("page 161 - Singleton Built-in Object", function(){

      it("includes the Global and Math object.", function(){

      });

      describe("the Global Object (page 162)", function() {
      
        it("- includes URI-Encoding Methods which encodes Uniform Resource Identifiers so that browsers can accept and understand them.",
          function(){
          GlobalObjectURIEncodingExample01 = function(){
            var uri = "http://www.wrox.com/illegal value.htm#start";
            
            //"http://www.wrox.com/illegal%20value.htm#start"
            console.log(encodeURI(uri));
            
            //"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start"
            return(encodeURIComponent(uri));
          };
          expect(GlobalObjectURIEncodingExample01()).toEqual('http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start');
        });

        it("- generally speaking you use encodeURIComponent() more frequently than encodeURI() because it's more commin to encode query string arguments separately from the base URI.", function(){
        });

        it("- there is a decodeURI() and decodeURIComponent() that undo the above methods.",
          function(){
          GlobalObjectURIDecodingExample01 = function(){
            var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";
            
            //http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start
            console.log(decodeURI(uri));
            
            //http://www.wrox.com/illegal value.htm#start
            return(decodeURIComponent(uri));
          };
          expect(GlobalObjectURIDecodingExample01()).toEqual('http://www.wrox.com/illegal value.htm#start');
        });
      });
      
      describe("the Window Object (page 165)", function(){

        it("is a vehicle for variables and functions declared in the global scope.",
          function(){
          GlobalObjectWindowExample01 = function(){
            var color = "red";
            
            function sayColor(){
                return(window.color);
            }
            
            window.sayColor();  //"red"
          };
        });
      });

      describe("the Math Object (page 166)", function(){

        it("- has several properties including logarithms, PI, and square roots.");

        it("- has a min() and max() method that determine the largest and smallest numbers in a group.",
          function(){
          MathoObjectMinMaxExample01 = function(){
            var max = Math.max(3, 54, 32, 16);
            console.log(max);    //54
            
            var min = Math.min(3, 54, 32, 16);
            return(min);    //3
          };
          expect(MathoObjectMinMaxExample01()).toEqual(3);
        });

        it("- has a group of rounding methods including Math.ceil() which rounds up, Math.floor() which rounds down, and Math.round() which rounds the way you think it will.",
          function(){
          MathObjectRoundingExample01 = function(){
            console.log(Math.ceil(25.9));     //26
            console.log(Math.ceil(25.5));     //26
            console.log(Math.ceil(25.1));     //26
            
            console.log(Math.round(25.9));    //26
            console.log(Math.round(25.5));    //26
            console.log(Math.round(25.1));    //25
                    
            console.log(Math.floor(25.9));    //25
            console.log(Math.floor(25.5));    //25
            return(Math.floor(25.1));    //25
          };
          expect(MathObjectRoundingExample01()).toEqual(25);
        });

        it("- has a random() method which returns a random number",
          function(){
          MathObjectRandomExample01 = function(){
            var num = Math.floor(Math.random() * 10 + 1);
            return(num);    //a number between 1 and 10
          };
        });

        it("- has a function selectFrom() that accepts two args, the lowest value that should be returned, and the highest value that should be returned. This makes it easy to select a random item from an array of choices.",
          function(){
          MathObjectRandomExample03 = function(){
           var colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
            var color = colors[selectFrom(0, colors.length-1)];
            return(color);  //any of the strings in the array
          };
        });
      });
    });  
  });
});