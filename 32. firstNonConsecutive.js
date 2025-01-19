// function firstNonConsecutive(arr) {

// }
// console.log(firstNonConsecutive([1,2,3,5,6]));

function firstNonConsecutive(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== temp + 1) {
      return arr[i];
    }
    temp = arr[i];
  }
  return null;
}
console.log(firstNonConsecutive([1, 2, 3, 4, 7]));
