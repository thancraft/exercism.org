export function twoSum(array1, array2){ 
  return Number(String(array1).replaceAll(',', '')) + Number(String(array2).replaceAll(',', ''))
}

export function luckyNumber(value) {
  let cek = String(value);
  return String(value).split('').reverse().join('') == cek
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input){

  if( !input ){
    return "Required field"; 
  } 

  if (Number(input)){
    return ''
  }else{
    return "Must be a number besides 0"
  }
  
}

