// console.log(len(arr,"Arpita"))

let result = character("arpita tripathi", "g");
console.log(result);

function character(str, char) {
  let add = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      add += 1;
    }
  }
  if (add === 0) {
    return "char not found";
  } else {
    return add;
  }
}
