const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let prev = [];
  let res = '';

  for(let i = 0; i <= str.length; i++) {
      if(prev.length === 0) { 
          prev.push(str[i])
      } else {
          if(str[i] === prev[prev.length - 1]) {
              prev.push(str[i])
          } else {
              if (prev.length > 1) {
                  res += (prev.length + str[i - 1]);
              } 

              if (prev.length === 1) {
                  res += str[i - 1]
              }

              prev.length = 0;
              prev.push(str[i])
          }
      }    
  }

  return res;
   
}

module.exports = {
  encodeLine
};
