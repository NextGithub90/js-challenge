// function removeExclamationMarks(s) {
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== "!") result += s[i];
//   }
//   return result;
// }
// console.log(removeExclamationMarks("hello world!"));

function removeExclamationMarks(s) {
  return s.split("!").join("");
}
console.log(removeExclamationMarks("hello world!"));
