// find all repeating elements in an array


const arr = [1,1,2,2,2,3,3,3,3,4,4,4,4,4]
let newArr = [];
function RepeatElements(){
    for (let i =0; i < arr.length; i++){
    if (!newArr.includes(arr[i])){
     newArr.push(arr[i])
    }
    }
     console.log(newArr);
}
RepeatElements();


