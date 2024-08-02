// Example 1:
// Input: (1,2),(2,1),(3,4),(4,5),(5,4)
// Output: (2,1) (5,4)
// Explanation: Since (1,2) and (2,1) are symmetric pairs and (4,5) and (5,4) are symmetric pairs.
//

const arr = [
  [11, 20],
  [30, 40],
  [5, 10],
  [40, 30],
  [10, 5],
];
let solution = [];

for (let i = 0; i < arr.length; i++) {
  let first = arr[i][0];
  let second = arr[i][1];
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i][0] == arr[j][1] && arr[i][1] == arr[j][0]) {
      solution.push(first, second);
    }
  }
  console.log(solution);
}

const arr1 = [
  [11, 20],
  [30, 40],
  [5, 10],
  [40, 30],
  [10, 5],
];
let res = [];
let map = new Map();
for (let i = 0; i < arr1.length; i++) {
  let first = arr1[i][0],
    second = arr1[i][1];
  if (map.has(second, first)) {
    res.push([first, second]);
  } else {
    map.set(first, map.get(second));
  }
}
console.log(res);
