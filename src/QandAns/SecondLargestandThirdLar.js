//  second largest array 



let arr=[10,20,30,40,60,40,80,90,70,100,0]
let largest=arr[0],secondLargest=arr[0];
arr.forEach((item,index,element)=>{
  if(element[index]>largest){
    secondLargest=largest;
    largest=element[index];
  }
})
console.log(largest);
console.log(secondLargest); 

// // 
// Write a function that finds the second largest number in an array.

let arr =[14,12,15,17];

let largestnumber=arr[0];
  function arp(array){  
for (let i=0; i<arr.length ;i++){
             if (arr[i] >= largestnumber ){
            largestnumber = arr[i]
              }
             }
             //return largestnumber
       }  
  
arp(arr);
console.log(largestnumber); 

const removeLargest = arr.filter((item)=>{
return item !== largestnumber
})


console.log(removeLargest);


let secondLargestNum = arr[0];

for (let i=0; i < removeLargest.length; i++){
if (removeLargest[i]> secondLargestNum){
   secondLargestNum = removeLargest[i]
}
}

console.log(secondLargestNum)