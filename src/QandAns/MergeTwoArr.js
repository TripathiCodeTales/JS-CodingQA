Implement a function that merges two arrays into a single array, alternating elements from each array.
let data1 = [1,2,3]
let data2 = [4,5,6]
let arr3 = [];
function result (arr1, arr2) {
for (let i=0; i <arr1.length ; i++){
 arr3.push(arr1[i]);
 arr3.push(arr2[i]);
}
return arr3;
}

result(data1,data2);
console.log(arr3);