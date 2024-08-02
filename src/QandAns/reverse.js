// reverse the given array

let arr = ["hello", "my", "name", "is", "arpita"];

function revers(arr) {
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  console.log(rev);
}

console.log(revers(arr));

// 1. Given a string, reverse each word in the sentence.
// (E.g. "Welcome to React but yeah, talk anything")
let str = "Welcome to React but yeah, talk anything";

let v = str.split(" ");  // will split the string in array 

let updatedValue = v.reverse(); // reverse it 
let valr = updatedValue.join(" ");  // put it back in str convert an array into string

console.log(valr);
