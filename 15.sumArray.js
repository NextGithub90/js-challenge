// function sumArray(array) {
//   if (array == null || array < 2) return 0;
//   let singkat = array.sort((a, b) => a - b);
//   let result = 0;
//   for (let i = 1; i < singkat.length - 1; i++) {
//     result += singkat[i];
//   }
//   return result;
// }
// console.log(sumArray([6, 2, 1, 8, 10]));

function sumArray(array) {
  if (array == null || array.length <= 2) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, curr) => acc + curr);
}
console.log(sumArray([6, 2, 1, 8, 10]));

// soal ke 14
function sumArray(array) {
 let result = 0
 if ( array == null || array == '' || array == undefined) return 0
 
}
 
  console.log(sumArray([6, 2, 1, 8, 10]));
  