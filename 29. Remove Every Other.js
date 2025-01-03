function removeEveryOther(arr) {
  //your code here
  return arr.filter((el, i) => !(i % 2));
}
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //['Hello', 'Hello Again'])
