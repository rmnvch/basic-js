const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str = '', {repeatTimes = 1,
  separator = '+',
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|'}) {

  let additionRes = "" + str;
  let output = '';

  for(let i = 0; i < additionRepeatTimes; i++) {
      
      additionRes += addition; 

      if(i !== additionRepeatTimes - 1) {
          additionRes += additionSeparator
      }   
  }

  for(let i = 0; i < repeatTimes; i++) {
      
      output += additionRes; 

      if(i !== repeatTimes - 1) {
          output += separator
      }    
  }


  return output; 
}

module.exports = {
  repeater
};
