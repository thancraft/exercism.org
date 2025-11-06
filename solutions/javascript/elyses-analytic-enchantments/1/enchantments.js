export function getCardPosition (stack, card) { return stack.indexOf(card)}

export function doesStackIncludeCard(stack, card) { return stack.indexOf(card) !== -1 }

export function isEachCardEven(stack) { return stack.every((nomor) =>  nomor % 2 === 0 )}

export function doesStackIncludeOddCard(stack) {  return stack.some((nomor) => nomor % 2 !== 0) }

export function getFirstOddCard(stack) { return stack.find( (nomor) => nomor % 2 !== 0) }

export function getFirstEvenCardPosition(stack) { return stack.findIndex( (nomor) => nomor % 2 === 0 ) }
