export function getListOfWagons(...number) {
  return number
}

export function fixListOfWagons(ids) {
  const [a, b, ...lokomotif] = ids
  return [...lokomotif, a, b]
}

export function correctListOfWagons(ids, missingWagons) {
  const [ ...missing] = missingWagons
  const [a, ...pengenal] = ids
  return  [a, ...missing, ...pengenal] 
}

export function extendRouteInformation(information, additional) {
  const {...informaasi} = information
  const {...tambahan} = additional;
  return {...informaasi, ...tambahan}
}

export function separateTimeOfArrival(information) {
  const {timeOfArrival, ...informasi} = information
  return [ timeOfArrival, informasi ]
}
