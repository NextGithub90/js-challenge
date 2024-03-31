function feast(beast, dish) {
  //   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
  return beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1);
}
console.log(feast("chickadee", "cocolate cake"));
