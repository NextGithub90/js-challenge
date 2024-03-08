function perkalian(x) {
  let result = x[0];
  for (let i = 0; i < x.length; i++) {
    result = result * x[i];
  }
  return result;
}
console.log(perkalian([1, 2, 3, 4]));
