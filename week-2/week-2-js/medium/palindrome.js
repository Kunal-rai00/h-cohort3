/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Normalize the string: remove non-alphanumeric characters, convert to lowercase
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanedStr.split("").reverse().join("");
  
  // Compare the cleaned string with its reverse
  if (reversedStr === cleanedStr) {
    return true;
  } else {
    return false
  }
}

console.log(isPalindrome("Able, was I ere I saw Elba!")); // Should return true


module.exports = isPalindrome;
