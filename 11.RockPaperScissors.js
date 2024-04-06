// rock = batu
// scissor = guntinng
// paper = kertas
// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return "Draw!";
//   } else if (p1 == "scissors" && p2 === "rock") {
//     return "Player 2 won!";
//   } else if (p1 === "paper" && p2 === "scissors") {
//     return "Player 2 won!";
//   } else if (p1 === "rock" && p2 === "paper") {
//     return "Player 2 won!";
//   } else {
//     return "Player 1 won!";
//   }
// };

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  console.log(rules[p1]);
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

console.log(rps("scissors", "rock"));
