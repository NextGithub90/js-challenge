// function greet(name, owner) {
//   if (name === owner) return "hello boss";
//   if (name !== owner) return "hello guest";
// }
// console.log(greet("Daniel", "Daniel"));

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
console.log(greet("Daniel", "Daniel"));
