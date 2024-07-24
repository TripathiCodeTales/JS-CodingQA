/* Implement a function that returns the average value of numbers in an array. 
 */
let arr2 = []
let arr = [1,2,3,4,5]
function average(data){
     arr2= data.reduce((element,value)=>{
    return element+value/data.length;
})
/* arr2 +=  */
return arr2;
}
  
console.log(average(arr));