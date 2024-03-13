// function DNAtoRNA(dna) {
//   // create a function which returns an RNA sequence from the given DNA sequence
//   let rna = "";
//   for (var i = 0; i < dna.length; i++) {
//     if (dna[i] === "T") {
//       rna += "U";
//     } else {
//       rna = rna + dna[i];
//     }
//   }
//   return rna;
// }
// console.log(DNAtoRNA("TTTT"), "UUUU");
// console.log(DNAtoRNA("GCAT"), "GCAU");

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna
    .split("")
    .map((el) => (el === "T" ? "U" : el))
    .join("");
}
console.log(DNAtoRNA("TTTT"), "UUUU");
console.log(DNAtoRNA("GCAT"), "GCAU");
