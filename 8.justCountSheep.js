// var countSheep = function (num) {
//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     result = result + i + " sheep..."
//   }
//   return result;
// };
// console.log(countSheep(1), "1 sheep...");
// console.log(countSheep(2), "1 sheep...2 sheep...");
// console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");

var countSheep = function (num) {
  return [...Array(num)].map((e, i) => i + 1 + " sheep ...").join(" ");
};
console.log(countSheep(3));

//// atau
const countSheep = (num) => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");
