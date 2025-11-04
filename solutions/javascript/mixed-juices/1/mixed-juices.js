export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
        return 0.5;
      break;
    case 'Energizer': //double case digunakan untuk menguji 2 state yang sama callback nya
    case 'Green Garden': // di switch case tidak ada logical operator or (||)
        return 1.5;
      break;
    case 'Tropical Island':
        return 3;
      break;
    case 'All or Nothing':
        return 5;
    default:
        return 2.5;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let ygDipotong = 0;
  let jumlah = 0;
  let i = 0;

  while (jumlah < wedgesNeeded && i < limes.length) {
    const lime = limes[i];

    switch (lime) {
      case 'large':
          jumlah += 10;
        break;
      case 'medium':
          jumlah += 8;
        break;
      case 'small':
          jumlah += 6;
        break;
      default:
        break;
  }


    ygDipotong++;
    i++;
    
  }

  return ygDipotong;
  
};

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {

  while ( timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0])
    orders.shift()
  }
  
  return orders;
}
