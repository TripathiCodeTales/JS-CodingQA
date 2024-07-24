// reverse the given array 


let arr = ["hello", "my", "name", "is", "arpita"]
   
function revers(arr){
let rev= [];
for(let i=arr.length-1; i >= 0; i--){
  rev.push(arr[i])
}
console.log(rev)
}

console.log(revers(arr));



// 1. Given a string, reverse each word in the sentence. 
// (E.g. "Welcome to React but yeah, talk anything") 
 let str = "Welcome to React but yeah, talk anything"
   
   let v = str.split(" ");
   
   let updatedValue = v.reverse();
   let valr = updatedValue.join(" ");
   
console.log(valr) ;