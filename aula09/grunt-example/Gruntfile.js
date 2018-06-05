module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
      	files: {
      		// destino e daonde vem o arquivo
      		'js/jquery.min.js' : 'src/js/jquery.js'
      	}
        // src: 'src/js/jquery.js',
        // dest: 'js/jquery.min.js'
      }
    },
    cssmin: {
      css : {
      	files: {
  			'css/style.min.css' : 'src/css/style.css'
      	}
        // src : 'src/css/style.css',
        // dest: 'css/style.min.css'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-css');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);

};