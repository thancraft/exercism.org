export function needsLicense(kind) {
  if (kind == 'car' || kind == 'truck') {
    return true
  }else{
    return false
  }
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */

export function chooseVehicle(option1, option2){
  var pilihanSatu = option1.split(' ', option1.length);
  var pilihanDua = option2.split(' ', option2.length);

  if( pilihanSatu[0] < pilihanDua[0] ){
    return option1 + ' is clearly the better choice.'
  }else{
    return option2 + ' is clearly the better choice.'
  } 
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if (age >= 3 && age <= 10 ) {
    return originalPrice * ( 70 / 100 )
  } else if (age <= 3) {
    return originalPrice * ( 80 / 100 )
  }{
    return originalPrice * ( 50 / 100 )
  }
}
