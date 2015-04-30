module.exports = {
  site: {
    options: {
      metadata: {
        title: 'A Static Site',
        description: 'A Static site built using Grunt + Metalsmith',
        environment: '<%= grunt.config.get("environment") %>'
      },
      plugins: {
        'metalsmith-markdown': {},
        'metalsmith-permalinks': {
          'pattern': ':title',
          'relative': false
        },
        'metalsmith-templates': {
          'engine': 'handlebars',
          'directory': './src/templates'
        },
        'metalsmith-watch': {}
      }
    },
    src: './src/pages',
    dest: 'build'
  }
};