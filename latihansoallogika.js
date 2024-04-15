//  challange 1
/* function input(x) {
  return x
    .split(",")
    .map((el) => el * 2)
    .join(" ");
}
console.log(input("1,2,3,4,5"));
 */
// function input(x) {
//   let result = x.split(",");
//   let tampung = [];
//   for (var i = 0; i < result.length; i++) {
//     tampung = tampung + result[i] * 2 + " ";
//     // tampung.push(result[i] * 2);
//   }
//   return tampung;
// }
// console.log(input("1,2,3,4,5"));

// chalaange 2
// Buatlah sebuah fungsi yang menerima input berupa array dan dua indeks. Fungsi ini harus mengembalikan array baru yang berisi elemen dari array input yang di-slice berdasarkan kedua indeks tersebut, kemudian menggabungkan elemen-elemen tersebut menjadi sebuah string yang dipisahkan oleh spasi. Contoh input: [1,2,3,4,5], indeks awal: 1, indeks akhir: 4, output yang diharapkan: "2 3 4".

// function result(array, start, end) {
//   let hasii = array.slice(start, end).join(" ");
//   return hasii;
// }
// array = [1, 2, 3, 4, 5];
// start = 1;
// end = 4;
// console.log(result(array, start, end));

// catatatan
/* let nama = ['satu']
let hasil = nama.push('dua')
console.log(nama) */

// chalangce 3
// function perkalianaTiga(x) {
//   let awalMula = x.map((angka) => angka * 3);
//   let hasilAkhir = awalMula.reduce((acc, curr) => acc + curr, 0);
//   return hasilAkhir;
// }
// console.log(perkalianaTiga([1, 2, 3, 4, 5]));

// function perkalianaTiga(x) {
//   let hasilAkhir = 0;
//   for (let i = 0; i < x.length; i++) {
//     // 1
//     hasilAkhir = hasilAkhir + x[i] * 3; // 0 + 0 * 3 = 0   0 + 1 * 3 = 3  0 + 2 * 3 = 6   0 + 3 * 3 = 9   0 + 4 * 3 = 12  0 + 5 * 3 = 15
//   }
//   return hasilAkhir;
// }
// console.log(perkalianaTiga([1, 2, 3, 4, 5]));

// chalangce 4
// Buatlah sebuah fungsi yang menerima input berupa array angka dan sebuah angka target. Fungsi ini harus mencari apakah angka target tersebut ada dalam array. Jika ada, kembalikan angka tersebut. Jika tidak, kembalikan null. Contoh input: [1,3,5,7,9], target: 5, output yang diharapkan: 5.

// function data(angka, target) {
//   let hasil = angka.find((item) => item === target) || null;
//   return hasil;
// }
// angka = [1, 3, 5, 7, 9];
// target = 9;
// console.log(data(angka, target));

/* function cariAngka(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return target;
    } else {
    }
  }
  return null;
}

// Contoh penggunaan
const array = [1, 3, 5, 7, 9];
const target = 5;
console.log(cariAngka(array, target)); // Output: 5 */

// chalangece 5
// Buatlah sebuah fungsi yang menerima input berupa array string. Fungsi ini harus mengembalikan string baru yang berisi semua kata dalam array input yang panjangnya lebih dari 3 karakter, dipisahkan oleh koma. Contoh input: ["Hello", "World", "JavaScript", "is", "fun"], output yang diharapkan: "Hello,World,JavaScript"

// function inputS(array) {
//   let result = array.filter((e) => e.length > 3).join();
//   return result;
// }
// array = ["Hello", "World", "JavaScript", "is", "fun"];
// console.log(inputS(array));

// ======================================================================================================
// soal 7
// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(i * x);
//   }
//   return z;
// }
// console.log(countBy(2, 5));
function countBy(x, n) {
  return [...Array(n)].map((e, i) => (i + 1) * x);
}
console.log(countBy(2, 5));

// soal 1
// function grow(x) {
//   let result = x[0];
//   for (let i = 0; i < x.length; i++) {
//     result = result * x[i]
//   }
//   return result
// }
// console.log(grow([1, 2, 3]));
// function grow(x) {
//   return x.reduce((acc, curr) => acc * curr, 1);
// }
// console.log(grow([1, 2, 3]));

// soal ke 2
// const reverseSeq = (n) => {
//   let result = [];
//   for (var i = n; i >= 1; i--) {
//     result.push(i);
//   }
//   return result;
// };
// console.log(reverseSeq(5))

// const reverseSeq = (n) => {
//   return Array(n)
//     .fill()
//     .map((a, b) => n - b;)
//     // .reverse();
// };
// console.log(reverseSeq(5));

// soal ke 3
// function hero(bullets, dragons) {
//   //Get Coding!
//   if(bullets /2>= dragons ) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(hero(7, 4));

// function hero(bullets, dragons) {
//   //Get Coding!
//  return bullets /2 >= dragons ? true : false;
// }
// console.log(hero(7, 4));

// soal ke 4
// function smash(words) {
//   let result = ''
//   words.forEach(function(v, i) {
//     result += v
//     if(i+ 1 != words.length ) {
//       result += ' '
//     }
//   })
//   return result
// }

// console.log(smash(["hello", "amazing","world"]))

// function smash(words) {
//   return words.join(' ')
// }

// console.log(smash(["hello", "amazing","world"]))

// soal ke 5
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump / fuelLeft === mpg ? true : false;
// };
// console.log(zeroFuel(50, 25, 2));
// soal ke 6
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence

  return dna
    .split("")
    .map((a, b) => (a === "T" ? "U" : a))
    .join("");
}
console.log(DNAtoRNA("GCAU"));

// soal ke 7
// function countBy(x, n) {
//   let z = [];
//   for(let i = 1; i <= n; i++) {
//     z.push(x * i);
//   }
//   return z;
// }
// console.log(countBy(1,10))
function countBy(x, n) {
  return Array(n)
    .fill()
    .map((e, i) => (i + 1) * x);
}
console.log(countBy(2, 5));

//soal ke 8
// var countSheep = function (num) {
//   //your code here
//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     result += i + " sheep...";
//   }
//   return result;
// };
// console.log(countSheep(3));
// var countSheep = function (num) {
//   return Array(num).fill().map((e,i) => i+1 + ' sheep...').join('');
// };
// console.log(countSheep(3));

// soal ke 9
// var max = function (list) {
//   let result = list[0];
//   for (let i = 0; i < list.length; i++) {
//     // return list[i]
//     if (result < list[i]) {
//       result = list[i];
//     }
//   }
//   return result;
// };
// console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

// var min = function (list) {
//   let result = list[0];
//   for (let i = 0; i < list.length; i++) {
//     // return list[i]
//     if (result > list[i]) {
//       result = list[i];
//     }
//   }
//   return result;
// };
// console.log(min([4, 6, 2, 1, 9, 63, -134, 566, -699]));

var max = function (list) {
  return list.sort((a, b) => b - b);
};
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

var min = function (list) {
  let result = list[0];
  for (let i = 0; i < list.length; i++) {
    // return list[i]
    if (result > list[i]) {
      result = list[i];
    }
  }
  return result;
};
console.log(min([4, 6, 2, 1, 9, 63, -134, 566, -699]));

// soal ke 10
function stringToArray(string) {
  // code code code
  return string.split(" ");
}
console.log(stringToArray("Robin Singh"));

// soal ke 11
const rps = (p1, p2) => {
  if (p1 == p2) return "Draw!";
  let rules = { rock: "scissors", paper: "rock", scissors: "paper" };

  if (p2 == rules[p1]) {
    return "player 1 won!";
  } else {
    return "player 2 won!";
  }
};
console.log(rps("rock", "scissors"));

// acak
function solution(str) {
  let result = [];
  for (let i = 0; str.length > i; i++) {
    result.push(str[i]);
  }
  return result.reverse().join("");
}
console.log(solution("halo"));

// soal ke 12

function arrayPlusArray(arr1, arr2) {
  var suma = 0;
  for (var i = 0; i < arr1.length; i++) suma += arr1[i];
  for (var i = 0; i < arr2.length; i++) suma += arr2[i];
  return suma;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

function getCount(str) {
  let result = 0;
  str.split("").forEach(function (v) {
    if ((v == "a") | (v == "i") | (v == "u") | (v == "e") | (v == "o")) {
      result = result + 1;
    }
  });
  return result;
}
console.log(getCount("abracad"));

// soal ke 13

// function findNeedle(haystack) {
//   let hasil = "found the needle at position 3";
//   return haystack.map(function (v, i) {
//     console.log(v);
//     console.log(i);
//     if (v == "needle") {
//       return hasil;
//     }
//   });
// }

// function findNeedle(haystack) {
//   let hasil = "found the needle at position ";
//   for(let i = 0; i < haystack.length; i++) {
//     if(haystack[i] == 'needle') {
//       return hasil += i;
//     }
//   }
// }

// function findNeedle(haystack) {
//   return `found ${haystack.indexOf('needle')}`
// }
// console.log(findNeedle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]));

// soal ke 14
function doubleChar(str) {
  // Your code here
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = result + str[i] + str[i];
  }
  return result;
}

// soal ke 15
function reverseWords(str) {
  // Go for it
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let hasil = result.push(str[i]);
  }
  return result.reverse().join("").split(" ").reverse().join(" ");
}
console.log(reverseWords("double spaced  words"));

const huruf = ["A", "B", "C", "D", "E"];
huruf.reverse();
console.log(huruf); // Output: ["E", "D", "C", "B", "A"]

// soal ke 16

// function countSheeps(sheep) {
//   // TODO
//   let result = 0;
//   for (let i = 0; i < sheep.length; i++) {
//     if (sheep[i] === true) {
//       result = result + 1;
//     } else {
//       result += 0;
//     }
//   }
//   return result;
// }
// console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]));

function countSheeps(sheep) {
  // TODO
  let result = 0;
  return sheep.map((x) => (x === true ? 1 : 0)).reduce((a, b) => a + b, 0);
  // return result
}
console.log(countSheeps([true, true, true, true, true, false, true, true]));
