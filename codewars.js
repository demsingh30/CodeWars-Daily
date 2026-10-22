// ==============================================
// 2026-10-21 |  | 7kyu
// ==============================================
// Disemvowel Trolls(7 kyu)
//Return the number (count) of vowels in the given string.


 
function disemvowel(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (!'aeiou'.includes(str[i].toLowerCase())) {
      result += str[i]
    }
  }
  return result
}
 

 


   