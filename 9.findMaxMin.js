// cara manual
/* var min = function (list) {
  let minValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (minValue > list[i]) {
      minValue = list[i];
    }
  }
  return minValue;
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));

var max = function (list) {
  let maxValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (maxValue < list[i]) {
      maxValue = list[i];
    }
  }
  return maxValue;
};
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
 */
// cara singkat
/* var min = function (list) {
  return list.sort((a, b) => a - b)[0];
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));

var max = function (list) {
  return list.sort((a, b) => b - a)[0];
};
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
 */

// menggunakan method min and max
var min = function (list) {
  let result = Math.min(...list);
  return result;
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));

var max = function (list) {
  let hasil = Math.max(...list);
  return hasil;
};
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
