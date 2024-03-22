// function points(games) {
//   let result = 0;
//   for (let i = 0; i < games.length; i++) {
//     console.log(games[i][0]);
//     if (games[i][1] == games[i][2]) {
//       result = result + 1;
//     } else if (games[i][1] > games[i][2]) {
//         result = result + 3;
//     }
//   }
//   return result
// }

function points(games) {
  let result = 0;
  games.map(function (h) {
    if (h[0] == h[2]) {
      result = result + 1;
    } else if (h[0] > h[2]) {
      result = result + 3;
    }
  });
  return result;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])); // 30
