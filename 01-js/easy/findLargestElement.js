/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max;
    if(numbers.length===0) return;
    max = Math.max(...numbers);
    return max;
}

console.log(findLargestElement([3, 7, 2, 9, 1]))

module.exports = findLargestElement;