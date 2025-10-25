let list = [1, 2, 3];

if (list != "") {
  for (let i = 0; i <= list.length - 1; i++) {
    if (list[i] == 3) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

// [Binary]
let array = [1, 2, 3];
let target = 3;

if (array.length === 0) {
  console.log(null);
} else {
  let first = 0;
  let last = array.length - 1;
  while (first <= last) {
    let midpoint = Math.floor((first + last) / 2);
    if (array[midpoint] == target) {
      return console.log(true);
    } else {
      if (array[midpoint] < target) {
        first = midpoint + 1;
      } else {
        last = midpoint - 1;
      }
    }
  }
  return console.log(false);
}

let arr = [2, "hassan", 4];
console.log(arr.length);
arr.push("hussien"); // <= Constent RunTime
console.log(arr);
arr.unshift("omar"); // <= linear RunTime
console.log(arr);
let clone = ["ahmed", 22];

let all = [...arr, ...clone];
console.log(all);
