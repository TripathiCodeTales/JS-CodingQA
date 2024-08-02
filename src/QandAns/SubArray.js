// sub array
let arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    // if j =0--> k=0 ; again loop will start from j and creates an array.
    console.log(j);
    let res = [];
    for (let k = i; k <= j; k++) {
      // this loop is for print
      res.push(arr[k]);
    }
    console.log(res);
  }
}

//  output -->
//  [1]
// [1, 2]
// [1, 2, 3]
// [1, 2, 3, 4]
// [2]
// [2, 3]
// [2, 3, 4]
// [3]
// [3, 4]
// [4]
