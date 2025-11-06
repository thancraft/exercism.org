export function getFirstCard(deck) {
  const [pertama, ] = deck
  return pertama
}

export function getSecondCard(deck) {
  const [, kedua] = deck
  return kedua
}

export function swapTwoCards(deck) {
  const [pertama, kedua] = deck
  return [kedua, pertama]
}

export function shiftThreeCardsAround(deck) {
  const [pertama, kedua, ketiga] = deck
  return [kedua, ketiga, pertama]
}

export function pickNamedPile(piles) {
  const { chosen: pilih , disregarded : diabaikan } = piles;
  return pilih
}

export function swapNamedPile(piles) {
  // 🪄 Don't break the magic.
  // 🚨 Do NOT use piles.chosen or piles.disregarded.
  // 🚨 Do NOT touch the next line or Elyse will accidentally reveal the trick.
  const {chosen: disregarded, disregarded: chosen} = piles;
  
  return { chosen, disregarded };
}
