// function rentalCarCost(d) {
//   // Your solution here
//   let diskon = 0;
//   if (d >= 7) {
//     diskon = 50;
//   } else if (d >= 3) {
//     diskon = 20;
//   }
//   return 40 * d - diskon;
// }
// console.log(rentalCarCost(3), 230);
function rentalCarCost(d) {
  return d * 40(d >= 7 ? 50 : d >= 3 ? 20 : 0);
}
console.log(rentalCarCost(3), 230);
