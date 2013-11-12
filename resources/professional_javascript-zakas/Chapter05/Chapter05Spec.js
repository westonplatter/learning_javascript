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
  });
});

  // FunctionAsAnArgumentExample01 = function(){
  //       function callSomeFunction(someFunction, someArgument){
  //         return someFunction(someArgument);
  //       }

  //       function add10(num){
  //           return num + 10;
  //       }
        
  //       var result1 = callSomeFunction(add10, 10);
  //       // alert(result1);   //20
        
  //       function getGreeting(name){
  //           return "Hello, " + name;
  //       }
        
  //       var result2 = callSomeFunction(getGreeting, "Nicholas");
  //       return(result2);   //Hello, Nicholas
  //     };
  //     expect(true).toBe(true);
  //     });



  // describe("page 136 - the Function type", function() {
  //   describe("overloading", function() {
  //   });
    
  //   describe("declarations vs expressions", function() {
  //   });
    
  //   describe("functions as values", function() {
  //   });
    
  //   describe("function properties", function() {
  //   });
    
  //   describe("function methods", function() {
  //   });
  // });
  
  // describe("page 146 - Primative Wrapper Types", function() {
  //   describe("boolean type", function() {
  //   });
    
  //   describe("number type", function() {
  //   });
    
  //   describe("string type", function() {
  //   });
  // });
  
  // describe("page 161 - Singleton Built-in Object", function() {
  //   describe("global object", function() {
  //   });  
    
  //   describe("math object", function() {
  //   });
  // });

