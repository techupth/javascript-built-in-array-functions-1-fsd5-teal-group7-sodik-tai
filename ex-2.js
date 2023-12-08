let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  return words.filter(lessnum)
}
function lessnum(words1) {return words1.length >= 5;}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
//console.log(get5CharWords)