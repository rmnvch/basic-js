const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(d) {
  if(!d) return 'Unable to determine the time of year!';

  let res;

  try {

      let test = d.getTime();
      
      let month = d.getMonth() + 1;

      if  (month >= 1 && month <= 2)
      res = "winter";  

      if  (month >= 3 && 5 >= month) 
      res = "spring";  

      if  (month >= 6 && 8 >= month) 
      res = "summer";  

      if  (month >= 9 && 11 >= month) 
      res = "autumn";  
      
      if (month === 12)
      res = "winter";  

  } catch{

      throw new Error('Invalid date!');
  }

  return res;

}

module.exports = {
  getSeason
};
