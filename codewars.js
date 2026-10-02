// ==================================================
// 2026-10-02 | Opposite Number | 8kyu
// ==================================================
/* Very simple, given a number, find its opposite (additive inverse). */

function opposite(number) {
  if (number > 0) {
    return -Math.abs(number)
}
  else {
    return Math.abs(number)
}
}

