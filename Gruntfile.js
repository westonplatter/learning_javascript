module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), 
    
    jasmine: {
      professional_javascript: {
        options: {
          specs: 'resources/professional_javascript-zakas/**/*.js',
        }
      },
      patterns_stefanov: {
        options: {
          specs: './resources/javascript_patterns-stefanov/**/*.js',
        }
      },
      patterns_osmani: {
        options: {
          specs: './resources/javascript_patterns-osmani/**/*.js',
        }
      }
    },
  
    watch: {
      scripts: {
        files: './resources/**/*.js', 
        tasks: ['jasmine', 'jshint:professional_javascript'], 
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
        src: 'resources/professional_javascript-zakas/**/*.js',
      },
      patterns_stefanov: {
        src: 'resources/javascript_patterns-stefanov/**/*.js',
      }, 
      patterns_osmani: {
        src: 'resources/javascript_patterns-osmani/**/*.js',
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-contrib-jasmine');  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.registerTask('test'         , ['default']);
  grunt.registerTask('default'      , ['jasmine', 'jshint']);
  grunt.registerTask('professional' , ['jasmine:professional_javascript', 'jshint:professional_javascript']);
  grunt.registerTask('stefanov'     , ['jasmine:patterns_stefanov', 'jshint:patterns_stefanov']);
  grunt.registerTask('osmani'       , ['jasmine:patterns_osmani', 'jshint:patterns_osmani']);
};


