// ==================================================
// 2026-10-03 | Sum of Positive | 8kyu
// ==================================================
/* You get an array of numbers, return the sum of all of the positive ones.
   Example: [1, -4, 7, 12] => 1 + 7 + 12 = 20
   Note: If there is nothing to sum, the sum is default to 0. */



function positiveSum(arr) {
  return arr.filter(function(num) {
    return num >= 0
  })

  .reduce (function (total,num) {
      return total + num 
  } ,
  0)
}

