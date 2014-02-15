describe("Rent-a-Constructor inheritance pattern", function () {
  
  function Article() {
    this.tags = ['js', 'css'];
  }
  var article = new Article();
  
  function BlogPost() {}
  BlogPost.prototype = article;
  
  function StaticPage() {
    Article.call(this);
  }
  
  it("all articles should have Article.tags", function() {
    var article = new Article();
    expect( article.tags ).toEqual( ['js', 'css'] );
    expect( article.hasOwnProperty('tags') ).toEqual( true );
  });
  
  it("new BlogPosts have tags, but not as their 'ownProperty'", function() {
    var post = new BlogPost();
    expect( post.tags ).toEqual( new Article().tags );
    expect( post.hasOwnProperty('tags') ).toEqual( false );
  });
  
  it("new StaticPages should have tags as their 'ownProperty'", function() {
    var page = new StaticPage();
    expect( page.tags ).toEqual( new Article().tags );
    expect( page.hasOwnProperty('tags') ).toEqual( true );
  });
  
  it("BlogPost.tags point to Article.tags, but StaticPage has it's own copy of Article.tags", function() {
    article.tags.push('ruby');
    var post = new BlogPost();
    expect( post.tags ).toEqual( ['js', 'css', 'ruby'] );
    
    var page = new StaticPage();
    expect( page.tags ).toEqual( ['js', 'css'] );
    
    page.tags.push('php');
    expect( page.tags ).toEqual( ['js', 'css', 'php'] );
    
    expect( article.tags ).toEqual( ['js', 'css', 'ruby'] );
  });
});
