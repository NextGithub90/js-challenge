// function smash(words) {
//   return words.join(" ");
// }
// console.log(smash(["hello", "amazing", "world"]));
function smash(words) {
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i];
    if (i != words.length - 1) {
      result += " ";
    }
  }
  return result;
}
console.log(smash(["hello", "amazing", "world"]));
