const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
    if(!Array.isArray(arr)) return false;
    let res = '';
    for (n of arr) {
      switch(typeof n) {
        case 'string': 
          res += n.trim()
              .substring(0,1)
              .toUpperCase()
        break;  
      }
    };    
  return res ? res.split('').sort().join("") : false;
};

module.exports = {
  createDreamTeam
};
