const arr1 = [1, 2, 3, 4];
const arr2 = [7, 5, 4, 2];

function common() {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.push(arr1[i]);
      }
    }
  }
  console.log(newArr);
}
common();
/* 
output -->[2,4]  */
// another method

let newArr = arr1.filter((element) => arr2.includes(element));
console.log(newArr);
