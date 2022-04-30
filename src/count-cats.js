const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(mtrx) {
  const cats = [];
  const cat = '^^';
  
  for (let arr of mtrx) {
      for (let item of arr) {
        if(item == cat) cats.push(item);
      }
    }

  return cats.length > 0 ? cats.length : 0;
}

module.exports = {
  countCats
};
