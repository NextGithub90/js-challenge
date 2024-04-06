// function solution(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i += 2) {
//     console.log(str[i + 1]);
//     const char1 = str[i];
//     const char2 = str[i + 1] || "_";
//     result.push(char1 + char2);
//   }
//   return result;
// }
// console.log(solution("abcde"), ["ab", "cd", "ef"]);

// function solution(str, ending) {
//   // TODO: complete
//   // return str.length - 2 === ending.length;
//   let word = str.split("").reverse();
//   let end = ending.split("").reverse().join("");
//   for (let i = 0; i < end.length; i++) {
//     console.log(word[i]);
//     console.log(end[i]);
//   }
// }
// console.log(solution("abcde", "cde"));
// console.log(solution("abccde", "abc"));

// function digitize(n) {
//   return n
//     .toString()
//     .split("")
//     .reverse()
//     .map(function (v) {
//       return parseInt(v);
//     });
// }
// console.log(digitize(35231));
// console.log(digitize(0), [0]);

// function boolToWord(bool) {
//   //...
//   if (bool === true) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }
// console.log(boolToWord(true));

function maps(x) {
  let hasil = [];
  x.forEach(function (y) {
    hasil.push(y * 2);
  });
  return hasil;
}

console.log(maps([1, 2, 3])); // Output: [2, 4, 6]

// let halo = 2
// console.log(halo)

function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9;
}
console.log(simpleMultiplication(0), 45, "");
console.log(simpleMultiplication(1), 9);

function invert(array) {
  // return array.map((angka) => angka * -1)
  return array.map((x) => (x == 0 ? x : -x));
}
console.log(invert([-1, -2, -3, -4, 5]));
