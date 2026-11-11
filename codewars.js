// ==============================================
// 2026-11-11|  | 7kyu
// ==============================================
/* Task:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.




*/

function XO(str) {
   let string =  str.toLowerCase() 
   let countone = 0
   let counttwo = 0
   for (const char of string) {
    if (char === 'x') {
     countone++
    }
    else if (char === 'o') {
      counttwo++
    }
   }
 return countone === counttwo
}

 


   