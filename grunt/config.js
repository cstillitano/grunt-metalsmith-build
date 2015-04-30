module.exports = function(grunt, options) {
  return {
    dev: {
      options: {
        variables: {
          environment: null
        }
      }
    },
    prod: {
      options: {
        variables: {
          environment: 'prod'
        }
      }
    }
  };
};