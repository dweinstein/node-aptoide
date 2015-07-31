const debug = require('debug');
const name = require('./package').name;

module.exports = function (str) {
  return require('debug')(name+':'+str);
};
