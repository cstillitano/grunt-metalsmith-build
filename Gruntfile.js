/*global module:false*/
module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    init: true
  });

  grunt.registerTask('dev', [
    'config:dev',
    'clean:build',
    'metalsmith',
    'sass',
    'autoprefixer',
    'concat',
    'jshint',
    'browserSync',
    'watch'
  ]);

  grunt.registerTask('prod', [
    'config:prod',
    'clean:build',
    'metalsmith',
    'sass',
    'autoprefixer',
    'cssmin',
    'concat',
    'jshint',
    'uglify',
    'browserSync',
    'watch'
  ]);

};
