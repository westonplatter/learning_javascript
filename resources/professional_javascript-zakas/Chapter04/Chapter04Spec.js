// chapter 4 tests

describe("Chapter 4 Specs", function(){
  
  // we need 1 test to make the Jasmine test suite to run.
  it("pages 85-101", function() {
    expect(true).toBe(true);
  });
    
  describe("page 86 - copying values", function(){
    describe("primatives", function(){});
    describe("references", function(){});
  });
 
  describe("page 88 - passing aruments", function(){
   describe("show that arguments are passed by value", function(){});
   describe("show how objects are treated when passed by value", function(){});
 });
 
 describe("page 89 - demonstrate instanceOf", function(){});

 describe("page 90 - Execution and Context Scope", function(){
   describe("show function can access variables in the parent context", function(){});
   describe("show function's variable definitions have first priority", function(){});
   describe("show that there are no block-level scopes", function(){});
 });
 
});

