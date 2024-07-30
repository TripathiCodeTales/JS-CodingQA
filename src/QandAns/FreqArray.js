let arr = [
  "arpita",
  "arpi",
  "1arpita26",
  "shailus",
  "shailus",
  "pourush",
  "pourush98",
  "kannus",
  "kannus00",
];

function freq(arr, name) {
  let newArr = 0;
  arr.map((element) => {
    if (element === name.toLowerCase()) {
      newArr += 1;
    }
  });
  console.log(newArr);
}

console.log(freq(arr, "ArpIta"));


function len(arr, name) {
  let newArr = [];
  arr.map((element) => {
    if (element.length === name.length) {
      newArr.push(element);
    }
  });
  console.log(newArr);
}

len();
