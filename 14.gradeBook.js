function getGrade(s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3;
  if (score < 60) return "F";
  if (score < 70) return "D";
  if (score < 80) return "C";
  if (score < 90) return "B";
  if (score <= 100) return "A";
  return score;
}
console.log(getGrade(44, 55, 52)); // e
console.log(getGrade(65, 70, 59)); // d
console.log(getGrade(70, 70, 70)); // c
console.log(getGrade(89, 89, 90)); // b
console.log(getGrade(92, 93, 94)); // a
