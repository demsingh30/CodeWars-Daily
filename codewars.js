// ==============================================
// 2026-11-1|  | 8kyu
// ==============================================
// Complete the square sum function so that it squares each number passed into it and then sums the results together.


function squareSum(numbers){
  let newArray = numbers.map(function(element) {
    return element ** 2})


  let anotherArray = newArray.reduce(function (acc, c) {
    return acc + c
 }, 0)
 return anotherArray
}




 


   