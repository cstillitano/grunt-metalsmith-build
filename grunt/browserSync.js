module.exports = {
	bsFiles: {
  	src : './build/**/*.{css,js,html}'
  },
  options: {
      server: {
          baseDir: "./build/"
      },
      watchTask: true
  }
};