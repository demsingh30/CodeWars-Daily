// ==================================================
// 2026-10-04 | Generate Range of Integers | 8kyu
// ==================================================
/* Implement the function generateRange which takes three arguments (start, stop, step)
   and returns the range of integers from start to stop (inclusive) in increments of step.
   Examples:
   (1, 10, 1)  -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   (-10, 1, 1) -> [-10, -9, ..., 0, 1]
   (1, 15, 20) -> [1]
   Note: start < stop, step > 0 */



function generateRange(start, stop, step) {
  let array = []
 for (let i = start; i <= stop; i +=step) {
  array.push(i) }
  return array
}


