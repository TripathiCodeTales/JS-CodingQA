// substring method

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
function subs(arr, name) {
  let newArr = [];
  arr.map((element) => {
    if (element.includes(name)) {
      newArr.push(element);
    }
  });
  console.log(newArr);
}

console.log(subs(arr, "arpita"));
