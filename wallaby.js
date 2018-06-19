module.exports = function (wallaby) {

  return {
    files: [
      'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      '!src/**/*.test.js?(x)'
    ],

    tests: ['src/**/*.test.js?(x)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({})
    },

    setup: wallaby => {
      const jestConfig = require('./package.json').jest;
      wallaby.testFramework.configure(jestConfig);
    },

    testFramework: 'jest'
  };
};