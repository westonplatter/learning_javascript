describe('description', function() {
  
  var testModule = (function() {    
    var counter = 0;
    
    return {
      timer: 0,
      
      incrementCounter: function () {
        return ++counter;
      },
   
      resetCounter: function () {
        counter = 0;
        return counter;
      }
    };
  })();
  
  it("modules have private properties", function() {
    expect( testModule.counter ).toEqual( undefined );
  });
  
  it("modules have public properties", function() {
    expect( testModule.timer ).toEqual( 0 );
  });
  
  describe('module public functions', function() {
    it("have read/write access to private properties", function() {
      expect( testModule.incrementCounter() ).toEqual( 1 );
      expect( testModule.resetCounter() ).toEqual( 0 );
    });
  });
  
});
