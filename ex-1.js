let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  return words.map((a)=> {return a.length})
   

}
//let result = words.map(getWordLengths)

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
