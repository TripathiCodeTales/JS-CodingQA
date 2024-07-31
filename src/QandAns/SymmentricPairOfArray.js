let arr = [[11, 20], [30, 40], [5, 10], [40, 30], [10, 5]];
let solution =[];

for (let i =0; i< arr.length; i++){
  let first = arr[i][0];
  let second = arr[i][1];
  for (let j=i+1; j< arr.length; j++){
   if (arr[i][0]== arr[j][1] && arr[i][1]== arr[j][0]){
   solution.push(first,second)
   }
  }
  console.log(solution)
}

