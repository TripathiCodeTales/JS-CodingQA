const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function median(arr) {
  let nwArr = 0;
  for (let i = 0; i < arr.length; i++) {
    nwArr += arr[i];  // we are adding the value of i to the previous sum 
  }
  console.log(nwArr / 2); 
}

console.log(median(arr));
