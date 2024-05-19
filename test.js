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

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return [...arguments].reduce((a, b) => a + b);
}
console.log(goals(1, 1, 1));
