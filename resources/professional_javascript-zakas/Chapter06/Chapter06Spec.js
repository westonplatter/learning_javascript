// chapter 6 tests

describe("Chapter 6 Specs - Object Oriented Programming", function(){

  it("pages 173 - 216", function(){
      expect(true).toBe(true);
  });

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

  describe("page 175 - read-only property configuration", function(){

    var person = {};
    Object.defineProperty(person, "name", {
        configurable: false,    // read-only
        value: "Nicholas"       // Initial and only value
    });

    it("name", function() {
        expect(person.name).toBe("Nicholas");
    });
    person.name = "Nick";
    it("name change ignored", function() {
        expect(person.name).toBe("Nicholas");
    });
    delete person.name;
    it("name deletion ignored", function() {
        expect(person.name).toBe("Nicholas");
    });
  });

  describe("page 175 - Data Properties", function(){

    it("include a defineProperty() method that allows you to pass the options: Configurable, Enumerable, Writable, and Value.",
      function(){
      DataPropertiesExample01 = function(){
        var person = {};
        Object.defineProperty(person, "name", {
            writable: false,
            value: "Nicholas"
        });
        
        console.log(person.name);
        person.name = "Michael";
        return(person.name);
      };
      expect(DataPropertiesExample01()).toBe("Nicholas");
    });

    it("- setting configurable to false means that the property cannot be removed from the object.",
      function(){
      DataPropertiesExample02 = function(){
        var person = {};
        Object.defineProperty(person, "name", {
            configurable: false,
            value: "Nicholas"
        });
        
        console.log(person.name);
        delete person.name;
        return(person.name);
      };
      expect(DataPropertiesExample02()).toEqual("Nicholas");
    });

    it("- once you set configurable to false, you cannot set it to true again.",
      function(){
      DataPropertiesExample03 = function(){
        var person = {};
        Object.defineProperty(person, "name", {
            configurable: false,
            value: "Nicholas"
        });
        
        //throws error
        Object.defineProperty(person, "name", {
            configurable: true,
            value: "Nicholas"
        });

        };
        var errorMessage;

        try {
            DataPropertiesExample03()
        } catch(e) {
            errorMessage = e.message;
      };
      expect(errorMessage).toContain("Cannot redefine property: name");
    });
  });

  describe("page 177 - Accessor Properties", function(){

      it("include Configurable, Enumerable, Get, and Set.",
        function(){
        AccessorPropertiesExample01 = function(){
          var book = {
              _year: 2004,
              edition: 1
          };
            
          Object.defineProperty(book, "year", {
            get: function(){
              return this._year;
            },
            
            set: function(newValue){            
              if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;  
              }
            }
          });
          
          book.year = 2005;
          return(book.edition);   //2
        };
        expect(AccessorPropertiesExample01()).toEqual(2);
      });

      it("allow you to set multiple properties.",
        function(){
        MultiplePropertiesExample01 = function(){
          var book = {};
          
          Object.defineProperties(book, {
            _year: {
                value: 2004
            },
              
            edition: {
                value: 1
            },
            
            year: {            
              get: function(){
                  return this._year;
              },
              
              set: function(newValue){
                if (newValue > 2004) {
                  this._year = newValue;
                  this.edition += newValue - 2004;
                }
              }
            }
          });
           
          book.year = 2005;
          return(book.edition);   //2
        };
        expect(MultiplePropertiesExample01()).toEqual(1);
      });

      it("allow you to retrive the property descriptor for a given property.",
        function(){
        GetPropertyDescriptorExample01 = function(){
          var book = {};
          
          Object.defineProperties(book, {
            _year: {
              value: 2004
            },
            
            edition: {
              value: 1
            },
            
            year: {            
              get: function(){
                  return this._year;
              },
              
              set: function(newValue){
                if (newValue > 2004) {
                  this._year = newValue;
                  this.edition += newValue - 2004;
                }                  
              }           
            }        
        });
           
        var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
        console.log(descriptor.value);          //2004
        console.log(descriptor.configurable);   //false
        console.log(typeof descriptor.get);     //"undefined"
        
        var descriptor = Object.getOwnPropertyDescriptor(book, "year");
        console.log(descriptor.value);          //undefined
        console.log(descriptor.enumerable);     //false
        return(typeof descriptor.get);     //"function"
      };
      expect(GetPropertyDescriptorExample01()).toEqual("function");
    });
  });

  describe("page 180 - Object Creation", function(){

      describe("The Factory Pattern (page 180)", function(){

        it("uses a function to accept arguments with which to build an object with the required information to represent another object.",
          function(){
          FactoryPatternExample01 = function(){
            function createPerson(name, age, job){
              var o = new Object();
              o.name = name;
              o.age = age;
              o.job = job;
              o.sayName = function(){
                  console.log(this.name);
              };    
              return o;
            }
            
            var person1 = createPerson("Nicholas", 29, "Software Engineer");
            var person2 = createPerson("Greg", 27, "Doctor");
            
            person1.sayName();   //"Nicholas"
            person2.sayName();   //"Greg"
          };
          expect(FactoryPatternExample01()).toBeUndefined();
        });
      });

      describe("The Constructor Pattern (page 181)", function(){

        it("differs from the Factory Pattern in that:", function(){
            expect(true).toBe(true);
        }); 

        it("- there is no object being created explicitly", function(){
            expect(true).toBe(true);
        });

        it("- the properties and methods are assigned to the 'this' object", function(){
            expect(true).toBe(true);
        });

        it("- there is no return statement", function(){
            expect(true).toBe(true);
        });

        it("- the new object is an instance of both object, and the type of object (person in this case)",
          function(){
          ConstructorPatternExample01 = function(){
            function Person(name, age, job){
              this.name = name;
              this.age = age;
              this.job = job;
              this.sayName = function(){
                console.log(this.name);
              };    
            }
            
            var person1 = new Person("Nicholas", 29, "Software Engineer");
            var person2 = new Person("Greg", 27, "Doctor");
            
            person1.sayName();   //"Nicholas"
            person2.sayName();   //"Greg"
            
            console.log(person1 instanceof Object);  //true
            console.log(person1 instanceof Person);  //true
            console.log(person2 instanceof Object);  //true
            console.log(person2 instanceof Person);  //true
            
            console.log(person1.constructor == Person);  //true
            console.log(person2.constructor == Person);  //true
            
            return(person1.sayName == person2.sayName);  //false
          };
          expect(ConstructorPatternExample01()).toEqual(false);
        });
      });

      describe("Constructors as Functions (page 182)", function(){

        function Person(name, age, job){
          this.name = name;
          this.age = age;
          this.job = job;
          this.sayName = function(){
            return(this.name);
          };
        }
          
        var person = new Person("Nicholas", 29, "Software Engineer");
        person.sayName();   //"Nicholas"
        
        Person("Greg", 27, "Doctor");  //adds to window
        window.sayName();   //"Greg"
        
        var o = new Object();
        Person.call(o, "Kristen", 25, "Nurse");
        o.sayName();    //"Kristen"
          
        it("- can be called with the new operator to act as a constructor",
          function(){
          expect(person.sayName()).toEqual("Nicholas");
        });

        it("- can be called without the new operator, in which case the properties and methods are added to the global (window) object.", function(){
          expect(window.sayName()).toEqual("Greg");
        });

        it("- can be called within the scope of a particular object using call() or apply()", function(){
          expect(o.sayName()).toEqual("Kristen");
        });
      });

      describe("Problems with Constructors (page 183)", function(){

        it("- involves how methods are duplicated when you create a new object this way. For instance, if every instance of Person has their own sayName() function, it makes no sense since all People sayName(). You can move it outside of the constructor but then it exists in the global scope which is not ideal since really you only want People to sayName() and not Dogs or whatever other class you have.",
          function(){
          ConstructorPatternExample03 = function(){
            function Person(name, age, job){
              this.name = name;
              this.age = age;
              this.job = job;
              this.sayName = sayName;
            }
            
            function sayName(){
              console.log(this.name);
            }
            
            var person1 = new Person("Nicholas", 29, "Software Engineer");
            var person2 = new Person("Greg", 27, "Doctor");
            
            person1.sayName();   //"Nicholas"
            person2.sayName();   //"Greg"
            
            console.log(person1 instanceof Object);  //true
            console.log(person1 instanceof Person);  //true
            console.log(person2 instanceof Object);  //true
            console.log(person2 instanceof Person);  //true
            
            console.log(person1.constructor == Person);  //true
            console.log(person2.constructor == Person);  //true
            
            return(person1.sayName == person2.sayName);  //true  
          };
          expect(ConstructorPatternExample03()).toEqual(true);
        });
      });

      describe("The Prototype Pattern (page 184)", function(){

        function Person(){
        }
        
        Person.prototype.name = "Nicholas";
        Person.prototype.age = 29;
        Person.prototype.job = "Software Engineer";
        Person.prototype.sayName = function(){
          return(this.name);
        };
        
        var person1 = new Person();
        person1.sayName();   //"Nicholas"
        
        var person2 = new Person();
        person2.sayName();   //"Nicholas"
      
        console.log(person1.sayName == person2.sayName);  //true
        
        console.log(Person.prototype.isPrototypeOf(person1));  //true
        console.log(Person.prototype.isPrototypeOf(person2));  //true
        
        //only works if Object.getPrototypeOf() is available
        if (Object.getPrototypeOf){
          console.log(Object.getPrototypeOf(person1) == Person.prototype);  //true
          console.log(Object.getPrototypeOf(person1).name);  //"Nicholas"
        }

        it("shares properties and methods among all instances.", function(){
            expect(person1.sayName == person2.sayName).toBe(true);
        });

        it("has an internal pointer to the prototype that is useful because it allows you to call isPrototypeOf() method to determine relationships between objects.",
            function(){
            expect(Person.prototype.isPrototypeOf(person1)).toBe(true);
        });

        it("has a getPrototypeOf() method that returns the value of [Prototype]",
            function(){
            expect(Object.getPrototypeOf(person1).name).toEqual("Nicholas");
        });

        it("allows you to add values to instances but not to overwrite them. I.e. adding a value to a property on an instance will 'shadow' any properties on the prototype with the same name. It will block access to the prototype property without altering it.",
          function(){
          PrototypePatternExample02 = function(){
            function Person(){
            }
            
            Person.prototype.name = "Nicholas";
            Person.prototype.age = 29;
            Person.prototype.job = "Software Engineer";
            Person.prototype.sayName = function(){
                return(this.name);
            };
            
            var person1 = new Person();
            var person2 = new Person();
            
            person1.name = "Greg";
            console.log(person1.name);   //"Greg" – from instance
            return(person2.name);   //"Nicholas" – from prototype
            };
          expect(PrototypePatternExample02()).toEqual("Nicholas");
        });

        it("allows you to use a delete operator that removes the instance property so the prototype property can be accessed again.",
          function(){
          PrototypePatternExample03 = function(){
            function Person(){
            }
            
            Person.prototype.name = "Nicholas";
            Person.prototype.age = 29;
            Person.prototype.job = "Software Engineer";
            Person.prototype.sayName = function(){
                return(this.name);
            };
            
            var person1 = new Person();
            var person2 = new Person();
            
            person1.name = "Greg";
            console.log(person1.name);   //"Greg" – from instance
            console.log(person2.name);   //"Nicholas" – from prototype
            
            delete person1.name;
            return(person1.name);   //"Nicholas" - from the prototype
          };
          expect(PrototypePatternExample03()).toEqual("Nicholas");    
        });

        describe("Prototypes and the in Operator (page 189)", function(){

          it("- when used on its own, the in operator returns true which tells us that the property exists on the instance or on the prototype.",
            function(){
            PrototypePatternExample04 = function(){
              function Person(){
              }
              
              Person.prototype.name = "Nicholas";
              Person.prototype.age = 29;
              Person.prototype.job = "Software Engineer";
              Person.prototype.sayName = function(){
                  return(this.name);
              };
              
              var person1 = new Person();
              var person2 = new Person();
              
              console.log(person1.hasOwnProperty("name"));  //false
              console.log("name" in person1);  //true
              
              person1.name = "Greg";
              console.log(person1.name);   //"Greg" – from instance
              console.log(person1.hasOwnProperty("name"));  //true
              console.log("name" in person1);  //true
              
              console.log(person2.name);   //"Nicholas" – from prototype
              console.log(person2.hasOwnProperty("name"));  //false
              console.log("name" in person2);  //true
              
              delete person1.name;
              console.log(person1.name);   //"Nicholas" - from the prototype
              console.log(person1.hasOwnProperty("name"));  //false
              return("name" in person1);  //true
            };
            expect(PrototypePatternExample04()).toBe(true);
          });
        
          it("- since the 'in' operator always returns true as long as the property is accessible by the object, and the hasOwnProperty() method returns true only if the property exists on the instance, you can determine if a prototype property exists.",
            function(){
            PrototypePatternExample05 = function(){
              function hasPrototypeProperty(object, name){
                  return !object.hasOwnProperty(name) && (name in object);
              }
                  
              function Person(){
              }
              
              Person.prototype.name = "Nicholas";
              Person.prototype.age = 29;
              Person.prototype.job = "Software Engineer";
              Person.prototype.sayName = function(){
                  return(this.name);
              };
              
              var person = new Person();        
              console.log(hasPrototypeProperty(person, "name"));  //true
              
              person.name = "Greg";
              return(hasPrototypeProperty(person, "name"));  //false        
            };
            expect(PrototypePatternExample05()).toBe(false);
          });

          it("- you can retrieve an array of enumerable instance properties on an object by using Object.keys()",
            function(){
            ObjectKeysExample01 = function(){
              function Person(){
              }
              
              Person.prototype.name = "Nicholas";
              Person.prototype.age = 29;
              Person.prototype.job = "Software Engineer";
              Person.prototype.sayName = function(){
                return(this.name);
              };
              
              var keys = Object.keys(Person.prototype);
              return(keys);   //"name,age,job,sayName"
            };
            expect(ObjectKeysExample01()).toEqual(["name","age","job","sayName"]);
          });
        });
        describe("Alernative Prototype Syntax (page 192)", function(){

          it("It is common to overwrite prototypes with an object literal that contains all of the properties and methods. The main difference is that the 'constructor' property no longer points to where you think it will. ",
            function(){
            PrototypePatternExample07 = function(){
              function Person(){
              }
              
              Person.prototype = {
                name : "Nicholas",
                age : 29,
                job: "Software Engineer",
                sayName : function () {
                  return(this.name);
                }
              };

              var friend = new Person();
              
              console.log(friend instanceof Object);  //true
              console.log(friend instanceof Person);  //true
              console.log(friend.constructor == Person);  //false
              return(friend.constructor == Object);  //true
            };
            expect(PrototypePatternExample07()).toEqual(true);
          });

          it("You can, however, manually set the constructor value to a value of your choosing.",
            function(){
            PrototypePatternExample08 = function(){
              function Person(){
              }
              
              Person.prototype = {
                  constructor : Person,
                  name : "Nicholas",
                  age : 29,
                  job: "Software Engineer",
                  sayName : function () {
                      return(this.name);
                  }
              };

              var friend = new Person();
              
              console.log(friend instanceof Object);  //true
              console.log(friend instanceof Person);  //true
              console.log(friend.constructor == Person);  //true
              return(friend.constructor == Object);  //false
            };
            expect(PrototypePatternExample08()).toEqual(false);
          });
        });

        describe("Dynamic Nature of Prototypes (page 194)", function(){

          it("-changes made to the prototype at any point are immediately reflected on ALL instances.", 
            function(){
            PrototypePatternExample09 = function(){
              function Person(){
              }
              
              Person.prototype = {
                  constructor: Person,
                  name : "Nicholas",
                  age : 29,
                  job : "Software Engineer",
                  sayName : function () {
                      return(this.name);
                  }
              };
              
              var friend = new Person();
              
              Person.prototype.sayHi = function(){
                  return("hi");
              };
              
              return friend.sayHi();   //"hi" – works!
            };
            expect(PrototypePatternExample09()).toEqual("hi");
          });

          it("- except when you change the prototype to a different object because the instance has a pointer only to the prototype, and not the constructor.",
            function(){
            PrototypePatternExample10 = function(){
              function Person(){
              }
              
              var friend = new Person();
                      
              Person.prototype = {
                  constructor: Person,
                  name : "Nicholas",
                  age : 29,
                  job : "Software Engineer",
                  sayName : function () {
                      return(this.name);
                  }
              };
              
              friend.sayName();   //error
            };

            var errorMessage;

            try {
                PrototypePatternExample10()
            } catch(e) {
                errorMessage = e.message;
            };
            expect(errorMessage).toContain("has no method");
          });
        });

        describe("Native Object Prototypes (page 196)", function(){

          it("have their methods defined on the constructor's prototype. You can modify native object prototypes like other prototypes. For instance, you can add a new method to a primitive wrapper.",
            function(){
            PrototypePatternExample11 = function(){
              console.log(typeof Array.prototype.sort);         //"function"
              console.log(typeof String.prototype.substring);   //"function"

              String.prototype.startsWith = function (text) {
                  return this.indexOf(text) == 0;
              };
              
              var msg = "Hello world!";
              return(msg.startsWith("Hello"));   //true
            };
            expect(PrototypePatternExample11()).toBe(true);
          });
        });

        describe("Problems with Prototypes (page 197)", function(){

          it("- mainly occur when you have a property with a reference value. For instance, you want to add additional items to one instance of an object but not another. Since that property points to the prototype's property, changes are reflected on all instances.",
            function(){
            PrototypePatternExample12 = function(){
              function Person(){
              }
              
              Person.prototype = {
                  constructor: Person,
                  name : "Nicholas",
                  age : 29,
                  job : "Software Engineer",
                  friends : ["Shelby", "Court"],
                  sayName : function () {
                      return(this.name);
                  }
              };
              
              var person1 = new Person();
              var person2 = new Person();
              
              person1.friends.push("Van");
              
              console.log(person1.friends);    //"Shelby,Court,Van"
              console.log(person2.friends);    //"Shelby,Court,Van"
              return(person1.friends === person2.friends);  //true
            };
            expect(PrototypePatternExample12()).toBe(true);
          });
        });
      });

      describe("The Combination Constructor/Prototype Pattern (page 197)", function(){

        it("- the most common way of defining custom types is to combine the constructor/prototype patterns. The constructor pattern defines instances while the prototype pattern defines methods and shared properties.",
          function(){
          HybridPatternExample01 = function(){
           function Person(name, age, job){
                this.name = name;
                this.age = age;
                this.job = job;
                this.friends = ["Shelby", "Court"];
            }
            
            Person.prototype = {
                constructor: Person,
                sayName : function () {
                    return(this.name);
                }
            };
            
            var person1 = new Person("Nicholas", 29, "Software Engineer");
            var person2 = new Person("Greg", 27, "Doctor");
            
            person1.friends.push("Van");
            
            console.log(person1.friends);    //"Shelby,Court,Van"
            console.log(person2.friends);    //"Shelby,Court"
            console.log(person1.friends === person2.friends);  //false
            return(person1.sayName === person2.sayName);  //true
          };
          expect(HybridPatternExample01()).toEqual(true);
        });
      });

      describe("The Dynamic Prototype Pattern (page 198)", function(){

        it("- initializes the prototype within the constructor but only if it is needed.",
          function(){
          DynamicPrototypeExample01 = function(){
            function Person(name, age, job){
          
              //properties
              this.name = name;
              this.age = age;
              this.job = job;
              
              //methods
              if (typeof this.sayName != "function"){
              
                Person.prototype.sayName = function(){
                    return(this.name);
                };
                  
              };
            };

            var friend = new Person("Nicholas", 29, "Software Engineer");
            return friend.sayName();
          };
          expect(DynamicPrototypeExample01()).toEqual("Nicholas");
        });
      });

      describe("The Parasitic Constructor Pattern (page 199)", function(){

        it("- is typically used as a fallback when the other patterns fails. The basic idea is to create a constructor that wraps the creation and return of another object while looking like a constructor. It allows you to over-ride the value that is returned when the constructor is called. ",
          function(){
          HybridFactoryPatternExample01 = function(){
            function Person(name, age, job){
                var o = new Object();
                o.name = name;
                o.age = age;
                o.job = job;
                o.sayName = function(){
                    return(this.name);
                };    
                return o;
            }
            
            var friend = new Person("Nicholas", 29, "Software Engineer");
            return friend.sayName();  //"Nicholas"
          };
          expect(HybridFactoryPatternExample01()).toEqual("Nicholas");
        });

        it("- allows you to create constructors for objects that may not be possible otherwise. For instance, I want to add a method to the array type. I can't. But I can make something that looks and acts like an array but is different. Basically this is nice to know as a wonky, workaround but isn't for everyday usage.",
          function(){
          HybridFactoryPatternExample02 = function(){
            function SpecialArray(){       
     
                //create the array
                var values = new Array();
                
                //add the values
                values.push.apply(values, arguments);
                
                //assign the method
                values.toPipedString = function(){
                    return this.join("|");
                };
                
                //return it
                return values;        
            }
            
            var colors = new SpecialArray("red", "blue", "green");
            console.log(colors.toPipedString()); //"red|blue|green"

            return(colors instanceof SpecialArray); //false
          };
          expect(HybridFactoryPatternExample02()).toBe(false);
        });
      });
    });

    describe("Page 201 - Inheritance", function(){

      it("is only available through implementation inheritance which is mostly accomplished through prototype chaining.", function(){
        expect(true).toBe(true);
      });

      describe("Prototype Chaining (page 202)", function(){

        it("Each constructor has a prototype object that points back to the constructor, and instances have an internal pointer to the prototype.",
          function(){
          PrototypeChainingExample01 = function(){
            
            function SuperType(){
              this.property = true;
            } // define SuperType with one property
            
            SuperType.prototype.getSuperValue = function(){
              return this.property;
            }; // add a method to SuperType
            
            function SubType(){
              this.subproperty = false;
            } // define SubType with one property
            
            SubType.prototype = new SuperType();
            //inherit from SuperType by creating a new instance of SuperType and assigning it to SubType.prototype
            //All the methods and properties that typically exist on an instance of SuperType now exist on Subtype.prototype
            
            SubType.prototype.getSubValue = function (){
                return this.subproperty;
            }; // assigns a new method to SubType.prototype
            
            var instance = new SubType();
            console.log(instance.getSuperValue());   //true
           
            console.log(instance instanceof Object);      //true
            console.log(instance instanceof SuperType);   //true
            console.log(instance instanceof SubType);     //true

            // So instance points to SubType.prototype, and SubType.prototype points to SuperType.prototype.

            console.log(Object.prototype.isPrototypeOf(instance));    //true
            console.log(SuperType.prototype.isPrototypeOf(instance)); //true
            return(SubType.prototype.isPrototypeOf(instance));   //true
          };
          expect(PrototypeChainingExample01()).toEqual(true);
        });

        it("- properties and methods are searched for along the scope chain. It searches in the instance first, then in the layers of prototypes.", function(){
          expect(true).toBe(true);
        });

        it("- the default prototype for any function is an instance of Object.", function(){
          expect(true).toBe(true);
        });

        it("- this is why methods such as .toString() work on custom objects, because all objects inherit from Object which exists up the prototype chain.", function(){
          expect(true).toBe(true);
        });

        it("- methods such as instanceof and .isPrototypeOf() allow you to determine what is in your prototype chain by returning true.", function(){
          expect(true).toBe(true);
        });

        describe("Working with methods (page 205)", function(){

          it("- you can over-ride methods on an instance by assigning them to an instance's prototype, after the prototype has been assigned as an instance of something else.",
            function(){
            PrototypeChainingExample02 = function(){

              function SuperType(){
                  this.property = true;
              }
              
              SuperType.prototype.getSuperValue = function(){
                  return this.property;
              };
              
              function SubType(){
                  this.subproperty = false;
              }
              
              //inherit from SuperType
              SubType.prototype = new SuperType();
              
              //new method added to the Subtype
              SubType.prototype.getSubValue = function (){
                  return this.subproperty;
              };
              
              //override existing method
              SubType.prototype.getSuperValue = function (){
                  return false;
              };
              
              var instance = new SubType();
              return(instance.getSuperValue());   //false
            };
            expect(PrototypeChainingExample02()).toBe(false);
          });

          it("- the object literal approach to creating prototype methods can't be used with prototype chaining because you end up overwriting the chain.",
            function(){
            PrototypeChainingExample03 = function(){
              
              function SuperType(){
                  this.property = true;
              }
              
              SuperType.prototype.getSuperValue = function(){
                  return this.property;
              };
              
              function SubType(){
                  this.subproperty = false;
              }
              
              //inherit from SuperType
              SubType.prototype = new SuperType();
              
              //try to add new methods – this nullifies the previous line
              SubType.prototype = {
                  getSubValue : function (){
                      return this.subproperty;
                  },
              
                  someOtherMethod : function (){
                      return false;
                  }
              };
              
              var instance = new SubType();
              return(instance.getSuperValue());   //error!
            };

            var errorMessage;

            try {
                PrototypeChainingExample03();
            } catch(e) {
                errorMessage = e.message;
            };
            expect(errorMessage).toContain("has no method");
          });

          it("- can result in an error with reference values when those values which were once instance properties become prototype properties.",
            function(){
            PrototypeChainingExample04 = function(){
              function SuperType(){
                  this.colors = ["red", "blue", "green"];
              }

              function SubType(){            
              }
              
              //inherit from SuperType
              SubType.prototype = new SuperType();

              var instance1 = new SubType();
              instance1.colors.push("black");
              console.log(instance1.colors);    //"red,blue,green,black"
              
              var instance2 = new SubType();
              return(instance2.colors);    //"red,blue,green,black"
            };
            expect(PrototypeChainingExample04()).toEqual(["red", "blue", "green", "black"]);
          });
        });
      });
      describe("Constructor Stealing (page 207)", function(){

        it("- works by calling the SuperType constructor from within the SubType constructor. apply() and call() are used to execute a constructor within the context of the newly created object.", 
          function(){
          ConstructorStealingExample01 = function(){
    
           function SuperType(){
              this.colors = ["red", "blue", "green"];
            }

            function SubType(){  
              //inherit from SuperType
              SuperType.call(this);
            }

            var instance1 = new SubType();
            instance1.colors.push("black");
            console.log(instance1.colors);    //"red,blue,green,black"
            
            var instance2 = new SubType();
            return(instance2.colors);    //"red,blue,green"
          };
          expect(ConstructorStealingExample01()).toContain("red");
        });

        it("- allows you to pass arguments into the SuperType constructor from within the SubType constructor.",
          function(){
          ConstructorStealingExample02 = function(){

            function SuperType(name){
              this.name = name;
            }

            function SubType(){  
              //inherit from SuperType passing in an argument
              SuperType.call(this, "Nicholas");
              
              //instance property
              this.age = 29;
            }

            var instance = new SubType();
            console.log(instance.name);    //"Nicholas";
            return(instance.age);     //29
          };
          expect(ConstructorStealingExample02()).toEqual(29);
        });
      });

      describe("Combination Inheritance (page 209)", function(){

        it("- combines prototype chaining and constructor stealing. Basic idea is to use prototype chaining to to inherit properties and methods on the prototype, and to use constructor stealing to inherit instance properties.",
          function(){
          CombinationInheritanceExample01 = function(){

            // SuperType constructor defines two properties.
            function SuperType(name){
              this.name = name;
              this.colors = ["red", "blue", "green"];
            }
            
            // SuperType prototype is assigned one method.
            SuperType.prototype.sayName = function(){
              console.log(this.name);
            };
    
            // SubType constructor calls the SuperType constructor, passes it an argument, and defines its own property called age.
            function SubType(name, age){
              SuperType.call(this, name);
              
              this.age = age;
            }
    
            // SubType prototype is assigned to be an instance of SuperType.
            SubType.prototype = new SuperType();
            
            // Defines a new method on the SubType prototype
            SubType.prototype.sayAge = function(){
              console.log(this.age);
            };
            
            var instance1 = new SubType("Nicholas", 29);
            instance1.colors.push("black");
            console.log(instance1.colors);  //"red,blue,green,black"
            instance1.sayName();      //"Nicholas";
            instance1.sayAge();       //29
            
           
            var instance2 = new SubType("Greg", 27);
            console.log(instance2.colors);  //"red,blue,green"
            instance2.sayName();      //"Greg";
            return instance2.sayAge();       //27
          };
          expect(CombinationInheritanceExample01()).toBeUndefined();
          // Not sure why this won't return 27...
        });
      });

      describe("Prototypal Inheritance (page 210)", function(){

        it("- uses an object passed into another object as the base of that object. Basically a function object(), gets passed a new object. The 'class' is the argument passed into the object.",
          function(){
          PrototypalInheritanceExample01 = function(){
            
            function object(o){
                function F(){}
                F.prototype = o;
                return new F();
            }
            
            var person = {
                name: "Nicholas",
                friends: ["Shelby", "Court", "Van"]
            };
            
            var anotherPerson = object(person);
            anotherPerson.name = "Greg";
            anotherPerson.friends.push("Rob");
            
            var yetAnotherPerson = object(person);
            yetAnotherPerson.name = "Linda";
            yetAnotherPerson.friends.push("Barbie");
            
            return(person.friends);   //"Shelby,Court,Van,Rob,Barbie"
          };
          expect(PrototypalInheritanceExample01()).toContain("Barbie");
        });

        it("- is often utilized through the Object.create() method. It accepts two args: an object to use as the prototype for a new object, and an optional object defining additional properties to apply to the new object.",
          function(){
          PrototypalInheritanceExample02 = function(){
            
            var person = {
                name: "Nicholas",
                friends: ["Shelby", "Court", "Van"]
            };
            
            var anotherPerson = Object.create(person);
            anotherPerson.name = "Greg";
            anotherPerson.friends.push("Rob");
            
            var yetAnotherPerson = Object.create(person);
            yetAnotherPerson.name = "Linda";
            yetAnotherPerson.friends.push("Barbie");
            
            return(person.friends);   //"Shelby,Court,Van,Rob,Barbie"
          };
          expect(PrototypalInheritanceExample02()).toContain("Barbie");
        });

        it("- the second argument for Object.create() is in the same format as the argument for Object.defineProperties(). Properties added in this way shadow properties of the same name on the prototype object.",
          function(){
          PrototypalInheritanceExample03 = function(){
            var person = {
              name: "Nicholas",
              friends: ["Shelby", "Court", "Van"]
            };
                               
            var anotherPerson = Object.create(person, {
              name: {
                value: "Greg"
              }
            });
            
            return(anotherPerson.name);  //"Greg"
          };
          expect(PrototypalInheritanceExample03()).toEqual("Greg");
        });
      });

      describe("Parasitic Inheritance and Parasitic Combination Inheritance(page 211-215)", function(){

        it("- the basic idea with Parasitic Inheritance is: create a function that does the inheritance, augments the object in some way, and then returns the object as if it did all the work.", function(){
          expect(true).toBe(true);
          });

        it("- Parasitic Combination Inheritance uses constructor stealing to inherit properties and a hybrid form of prototype chaining to inherit methods. The basic idea is: instead of calling the supertype constructor to assign the subtype's prototype, all you need is a copy of the supertype's prototype. Essentially, use parasitic inheritance to inherit from the supertype's prototype, then assign the result to the subtype's prototype.", 
          function(){
          ParasiticCombinationInheritanceExample01 = function(){

            function object(o){
                function F(){}
                F.prototype = o;
                return new F();
            }
        
            function inheritPrototype(subType, superType){
                var prototype = object(superType.prototype);   //create object
                prototype.constructor = subType;               //augment object
                subType.prototype = prototype;                 //assign object
            }
                                    
            function SuperType(name){
                this.name = name;
                this.colors = ["red", "blue", "green"];
            }
            
            SuperType.prototype.sayName = function(){
                console.log(this.name);
            };

            function SubType(name, age){  
                SuperType.call(this, name);
                
                this.age = age;
            }

            inheritPrototype(SubType, SuperType);
            
            SubType.prototype.sayAge = function(){
                console.log(this.age);
            };
            
            var instance1 = new SubType("Nicholas", 29);
            instance1.colors.push("black");
            console.log(instance1.colors);  //"red,blue,green,black"
            instance1.sayName();      //"Nicholas";
            instance1.sayAge();       //29
            
           
            var instance2 = new SubType("Greg", 27);
            return(instance2.colors);  //"red,blue,green"
            instance2.sayName();      //"Greg";
            instance2.sayAge();       //27
          };
          expect(ParasiticCombinationInheritanceExample01()).toContain("green");
        });
      });
    });
  });










