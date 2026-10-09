// ==============================================
// 2026-10-09 | Counting Sheep | 8kyu
// ==============================================
/*
Consider an array/list of sheep where some sheep may be
missing from their place. We need a function that counts
the number of sheep present in the array (true means present).
*/

function countSheeps(sheep) {
  let counter = 0;
  for (const sheeps of sheep) {
    if (sheeps === true) counter += 1;
  }
  return counter;
}