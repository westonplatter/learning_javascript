describe("default inheriance", function() {
  
  function Parent(name){
    this.name = name || 'Adam';
  }
  
  Parent.prototype.say = function() {
    return this.name;
  };
  
  function Child(name) {}
  
  
  function inherit(_child, _parent){
    _child.prototype = new _parent();
  }
  
  it("Parent name should default to Adam", function() {
    var parent = new Parent();
    expect( parent.name ).toBe( 'Adam' );
  });
  
  it("Parent name can be set", function() {
    var parent = new Parent('Maria');
    expect( parent.name ).toBe( 'Maria' );
  });
  
  it("Parent name can return name", function() {
    var parent = new Parent('Tom');
    expect( parent.say() ).toBe( 'Tom' );
    
  });
  
  describe('Child can inherit from Parent', function() {
    
    it("has same default properties", function() {
      inherit(Child, Parent);
      var kid = new Child();
      expect( kid.name ).toBe( 'Adam' );
    });
    
    it("has same functions", function() {
      inherit(Child, Parent);
      var kid = new Child();
      expect( kid.say() ).toBe( 'Adam' );
    });
    
    //---------------------------------------------------------------- DRAWBACKS
    
    it("does not allow override of properties", function() {
      inherit(Child, Parent);
      var kid = new Child('Maria');
      expect( kid.name ).toBe( 'Adam' );
    });
    
    it("prototypical functions use prototypical properties", function() {
      inherit(Child, Parent);
      var kid = new Child( 'Tom' );
      expect( kid.say() ).toBe( 'Adam' );
    });
  });
  
});
