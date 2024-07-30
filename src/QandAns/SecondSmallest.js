// Find Second Smallest and Second Largest Element in an array

let arr = [1, 2, 3, 4, 3, 5, 6, 7, 9, 5, 6, 4, 5];

function small() {
  let smallNum = 100;
  for (let i = 0; i < arr.length; i++) {
    if (smallNum > arr[i]) {
      smallNum = arr[i];
    }
  }
  console.log(`small no is  ${smallNum}`);

  let nwArr = arr.filter((element) => smallNum !== element);
  console.log(`after removing ${nwArr}`);

  let scondsmall = 100;
  for (let i = 0; i < nwArr.length; i++) {
    if (scondsmall > nwArr[i]) {
      scondsmall = nwArr[i];
    }
  }
  console.log(`second smallest number is ${scondsmall}`);
}

small();
