// function doubleChar(str) {
//   // Your code here
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result += str[i] + str[i];
//   }
//   return result;
// }
// console.log(doubleChar("halo"));

function doubleChar(str) {
  // Your code here
  return str
    .split("")
    .map((el) => el + el)
    .join("");
}
console.log(doubleChar("halo"));
