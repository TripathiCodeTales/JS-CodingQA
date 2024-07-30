// Remove Duplicates in-place from Sorted Array

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

let uniqueElements = new Set(arr); // Remove duplicates
let newArr = Array.from(uniqueElements); // Convert Set back to array

console.log(newArr);
