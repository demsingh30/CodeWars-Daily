
// Smash (8 kyu): join an array of words into one sentence. The point of this exercise was to do loops. 

function smash(words) {
  let sentence = ""

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      sentence = sentence + words[i]
    } else {
      sentence = sentence + " " + words[i]
    }
  }

  return sentence
}

console.log(smash(["hi", "i'm", "elfo"])) // hi i'm elfo




