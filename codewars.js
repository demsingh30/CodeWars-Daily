// ==============================================
// 2026-10-31|  | 8kyu
// ==============================================
// Write a function that checks if a given string (case insensitive) is a palindrome.
//A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


function isPalindrome(x) {
  const y = x.split("").reverse().join("")
  return y.toLowerCase() === x.toLowerCase()
}




 


   