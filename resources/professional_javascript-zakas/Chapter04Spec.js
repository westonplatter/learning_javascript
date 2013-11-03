// chapter 4 tests
//

function Example(){
};

Example.prototype.tester = true;

describe("Chapter 4 Specs", function(){
  var example;
  
  beforeEach(function(){
    example = new Example();
  });
  
  it("Example.tester should true", function(){
    expect(example.tester).toBe(true);
  });
})
