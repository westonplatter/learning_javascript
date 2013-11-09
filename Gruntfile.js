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
      all: ["resources/**/*js"],
    },
  });
  
  grunt.loadNpmTasks("grunt-contrib-jasmine");  
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.registerTask("test", ["default"]);
  grunt.registerTask("default", ["jasmine"]);
};


