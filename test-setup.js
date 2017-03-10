// this file is not transpiled, must use commonjs

// Register babel to transpile BEFORE the tests run
var babelRegister = require('babel-register')
babelRegister()

console.log('setting up tests')

// Disable webpack features that Mocha doesnt understand
require.extensions['.css'] = function(){}