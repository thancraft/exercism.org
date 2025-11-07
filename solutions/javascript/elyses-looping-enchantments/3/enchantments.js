export function cardTypeCheck(stack, card) {
  let hitung = 0;
  stack.forEach((number) =>  (number === card) ? hitung++ : hitung )
  return hitung
}
export function determineOddEvenCards(stack, type) {
  let hasil = 0;
  for (let kartu of stack){
    if( (kartu % 2 === 0 && type === true ) || (kartu % 2 === 1 && type === false)) hasil++
  }
  return hasil;
}
