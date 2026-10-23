// ==============================================
// 2026-10-22 |  | 7kyu
// ==============================================
//Highest and Lowest (7 kyu)



function highAndLow(numbers) {
 const array = numbers.split(" ")

const newArray = array.map(function(item) {
  return Number(item)
})
 const small = Math.min(...newArray)
 const big = Math.max(...newArray)
 return (`${big} ${small}`)
 }

 

 


   