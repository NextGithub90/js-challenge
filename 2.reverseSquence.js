// const reverseSeq = (n) => {
//   let result = [];
//   for (var i = n; i >= 1; i--) {
//     result.push(i);
//   }
//   return result;
// };
// console.log(reverseSeq(5));
const reverseSeq = (n) => {
  return Array(n)
    .fill()
    .map((el, i) => n - i);
  // .reverse();
};
console.log(reverseSeq(5));
