const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    
    if(!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!")
    }
    
    let res = [];
    
    for (let i = 0; i < arr.length; i++) { 
    
        if(typeof arr[i] === "number") {

            if(arr[i] < 6) {

                res.push(arr[i])

            }

        } else {

            if(arr[i]) {

                switch(arr[i]) {
                    case '--discard-next':
                        i = i + 1;
                    break;
                    case '--discard-prev':  
                        let discard = res.splice((i - 1), 1);
                    break;
                    case '--double-next':
                        if (i < arr.length) {
                            res.push(arr[i + 1])
                        }
                    break;    
                    case '--double-prev':
                        res.push(arr[i - 1]);
                    break; 
                    default: 
                        res.push(arr[i])         
                }
            }
        }
    }  
    
    return res;
}

module.exports = {
  transform
};
