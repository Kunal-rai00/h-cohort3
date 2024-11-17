/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// function countVowels(str) {
//     // Your code here

//     let totalVowels = 0;
//     let vowels = ["a", "e", "i", "O", "u"];
//     let arrangedString = str.toLowerCase().split("")
//     arrangedString.forEach(element => {
//       vowels.forEach((vowel)=>{
//         if(vowel === element){
//           totalVowels += 1;
//         }
//       })
//     });
//     return totalVowels;
// }

function countVowels(str) {
  let totalVowels = 0;
  let vowels = ["a", "e", "i", "o", "u"]; // Only lowercase vowels
  let arrangedString = str.toLowerCase(); // Convert the string to lowercase once

  // Iterate over each character in the string
  for (let i = 0; i < arrangedString.length; i++) {
      if (vowels.includes(arrangedString[i])) {
          totalVowels++;
      }
  }
  return totalVowels;
}

console.log(countVowels("kunall"));  // Outputs: 2
module.exports = countVowels;


console.log(countVowels("kunall"))
module.exports = countVowels;