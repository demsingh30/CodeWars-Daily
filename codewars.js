// ==============================================
// 2026-10-14 | Reversal | 8kyu
// ==============================================
// Kata: pro wrestling commentator (who won the reversal chain)
// Input: "A hit a reversal to B hit a reversal to A"
// The last name is the one reversed, so the winner is the 6th word from the end.

function whowon(s) {
  const words = s.split(" ");
  return words[words.length - 6];
}

console.log(whowon("A hit a reversal to B"));                         // A
console.log(whowon("A hit a reversal to B hit a reversal to A"));     // B