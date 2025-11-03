export function totalBirdCount(birdsPerDay) {
  var terhitung = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
        terhitung += birdsPerDay[i];
  }
  return terhitung
}

export function birdsInWeek(birdsPerDay, week) {
  var total = 0;
  for (let i = 7 * (week - 1); i <7 * week; i++) {
        total += birdsPerDay[i];
  }
  return total
}

export function fixBirdCountLog(birdsPerDay) {
  var total = 0;
  for (let i = 0; i < birdsPerDay.length ; i += 2) {
        birdsPerDay[i] += 1;
  }
  return birdsPerDay

}
