function enough(cap, on, wait) {
  // your code here
  let result = on + wait - cap;
  //   if ((on + wait) > cap) {
  //     return result ;
  //   } else {
  //     return 0;
  //  }
  return on + wait > cap ? result : 0;
}
console.log(enough(100, 60, 50));
