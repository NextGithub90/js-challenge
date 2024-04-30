const quarterOf = (month) => {
  // Your code here
  if (month <= 6) return 1;
  if (month <= 10) return 2;
  if (month == 11) return 4;
};
console.log(quarterOf(8));
