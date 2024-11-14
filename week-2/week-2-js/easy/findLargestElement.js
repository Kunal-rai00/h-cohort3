/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestNumber = numbers[0]; // Start by assuming the first number is the largest
    
    for (let i = 1; i < numbers.length; i++) { // Start loop from the second element
        if (largestNumber < numbers[i]) {
            largestNumber = numbers[i]; // Update largestNumber if a larger number is found
        }
    }
    
    return largestNumber; // Return the largest number after the loop completes
}

console.log(findLargestElement([-1, -3, -5, -9])); // Test with negative numbers


module.exports = findLargestElement;