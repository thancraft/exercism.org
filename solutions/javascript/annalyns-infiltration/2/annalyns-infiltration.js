export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  console.log(archerIsAwake, prisonerIsAwake)
  return !archerIsAwake && prisonerIsAwake
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  return petDogIsPresent && !archerIsAwake || !petDogIsPresent && !knightIsAwake && !archerIsAwake && prisonerIsAwake
}
