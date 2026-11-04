// ==============================================
// 2026-11-3|  | 8kyu
// ==============================================
// Double Char

function doubleChar(str) {
   let newString = ''
  for(let char of str) {
   newString += char.repeat(2)
 }
  return newString
}


console.log(doubleChar('abcd'))




 


   