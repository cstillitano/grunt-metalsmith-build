module.exports = {
  configFiles: {
    options: {
      reload: true
    },
    files: ['Gruntfile.js'],
    tasks: ['jshint']
  },
  metalsmith: {
    files: ['./src/templates/*'],
    tasks: ['sass', 'autoprefixer']
  },
  sass: {
    files: ['./src/assets/scss/*.scss'],
    tasks: ['sass', 'autoprefixer']
  },
  javascript: {
    files: ['./src/assets/js/*.js', '.src/assets/js/**/*.js'],
    tasks: ['concat', 'jshint']
  }
};