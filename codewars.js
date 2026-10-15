// ==============================================
// 2026-10-15 | Feast | 8kyu
// ==============================================
// Kata: pro wrestling commentator (who won the reversal chain)
// Input: "A hit a reversal to B hit a reversal to A"
// The last name is the one reversed, so the winner is the 6th word from the end.

// Rule: the dish must start AND end with the same letters as the beast's name.
// Input: beast, dish (lowercase strings, at least 2 letters each)
// Output: true or false

function feast (name, dish) {
return (dish[0] === name[0] && name[name.length - 1] === dish[dish.length - 1]) }
   