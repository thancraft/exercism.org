export function cardTypeCheck(stack, card) {
  let hitung = 0;
  stack.forEach((number) => {
    if(number === card){
    hitung++;
  }
  })
  return hitung
}

export function determineOddEvenCards(stack, type) {
  let hasil = 0;
  for (let kartu of stack) 
    if (kartu % 2 != type) hasil++
    return hasil
}
