function sumMix(x) {
  let total = 0;
  x.forEach(function (i) {
    total += Number(i);
  });
  return total;
}

console.log(sumMix([9, 3, "7", "3"]));

// function sumMix(x) {
//   return x.map((a) => Number(a)).reduce((sum, curr) => sum + curr, 0);
// }

// console.log(sumMix([9, 3, "7", "3"]));
