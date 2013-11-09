module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), 
    
    jasmine: {
      specs: "./resources/**/*.js" 
    },
  
    watch: {
      scripts: {
        files: "./resources/**/*.js", 
        tasks: ["jasmine"], 
        options: {
          interrupt: true
        },
      },
    }, 
    
    jshint: {
      professional_javascript: {
        options: {
          '-W085': true, // allow with statement for Ch3 example
        },
        src: ["resources/professional_javascript-zakas/**/*.js"],
      },
    },
    
  });
  
  grunt.loadNpmTasks("grunt-contrib-jasmine");  
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.registerTask("test", ["default"]);
  grunt.registerTask("default", ["jasmine", "jshint:professional_javascript"]);
};


