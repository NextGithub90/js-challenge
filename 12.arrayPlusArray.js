// function arrayPlusArray(arr1, arr2) {
//   return arr1.concat(arr2).reduce((acc, crr) => acc + crr);
// }

// function arrayPlusArray(arr1, arr2) {
//    let result = 0
//    for(let i = 0; i < arr1.length; i++) {
//     result = result + arr1[i]
//    }
//    for(let i = 0; i < arr2.length; i++) {
//     result = result + arr2[i]
//    }
//    return result
//   }

function arrayPlusArray(arr1, arr2) {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      result = result + arguments[i][j];
    }
  }
  return result;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
