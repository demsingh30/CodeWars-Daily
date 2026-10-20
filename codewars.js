// ==============================================
// 2026-10-20 |  | 7kyu
// ==============================================
// Vowel Count (7 kyu)
//Return the number (count) of vowels in the given string.



function getCount(str) {
str.split("")
count = 0
for (i=0; i < str.length; i++) {
  if (str[i] === 'a' ||  str[i] === 'e' ||  str[i] === 'i' ||  str[i] === 'o' ||  str[i] === 'u') 
  {
     count++
  }

}
return count
}
console.log(getCount("hello"))


   