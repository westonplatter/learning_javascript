// chapter 5 tests

describe("Chapter 5 Specs - Reference Types", function(){
  
  // we need 1 test to make the Jasmine test suite to run.
  it("pages 103-170", function() {
    expect(true).toBe(true);
  });

  describe("Page 104 - the Object type", function(){
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
  });
  
  describe("page 116 - Array Manipulation Methods", function(){

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
  });
});
  // describe("page 122 - the Date type", function() {
  //   describe("inherited methods", function() {
  //   });
    
  //   describe("date formatting methods", function() {
  //   });
  // });
  
  
  // describe("page 128 - the Regex type ", function() {
  //   describe("instance properties", function() {
  //   });
    
  //   describe("instance methods", function() {
  //   });
    
  //   describe("constructor properties", function() {
  //   });
  // });
  
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

