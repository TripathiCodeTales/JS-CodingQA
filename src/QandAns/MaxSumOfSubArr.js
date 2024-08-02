
const arr = [1, -1,2,-4,5,6,0,7,-2] 
let maxi = Number.NEGATIVE_INFINITY;

 let ans= [];
  //let res= [];
console.log(maxi);
 for(let i =0;i<arr.length;i++){  //to define the length of loop
     
     for(let j=i;j<arr.length;j++){  // to create an array 
             let sum =0;  
        let res= []; 
             for(let k = i;k<=j;k++){  // use for print
                     res.push(arr[k]);
                    sum+=arr[k];
             }
            ans.push(res); 
             maxi = Math.max(maxi,sum); // use to find maximum sum of an array
            
         }
    
 }
 console.log(ans)
 console.log(maxi)

//  output->
//  [[-1], [-1, -2], [-1, -2, 3], [-1, -2, 3, 0], [-1, -2, 3, 0, 4], [-2], [-2, 3], [-2, 3, 0], [-2, 3, 0, 4], [3], [3, 0], [3, 0, 4], [0], [0, 4], [4]]
  
//  7
 
 //m3 optimal-> KADANE'S Algo */

  
  let sum =0;
 for(let i =0;i<arr.length;i++){
              sum+=arr[i];
             maxi = Math.max(maxi,sum);
             if(sum<=0)sum =0;
         }
 console.log(maxi);