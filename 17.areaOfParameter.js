// const areaOrPerimeter = function (l, w) {
//   if (l == w) {
//     return l * w;
//   } else {
//     return 2 * (l + w);
//   }
// };

const areaOrPerimeter = function (l, w) {
  return l == w ? l * w : 2 * (l + w);
};
console.log(areaOrPerimeter(3, 3), 9);
