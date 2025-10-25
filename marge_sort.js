function divideAndConquer(arr) {
  // if been one e retrun it
  if (arr.length <= 1) return arr;

  // set my guns =>
  let mid = Math.floor(arr.length) / 2; // midpoint on arr
  let left = divideAndConquer(arr.slice(0, mid));
  let right = divideAndConquer(arr.slice(mid));

  let result = [];
  let i = 0; // for left index
  let j = 0; // for right index

  // so if thire any e in my arr
  while (i < left.length && j < right.length) {
    // if number in left smaller get it
    if (left[i] < right[j]) {
      result.push(left[i]);
      // and add 1 t0 i
      i++;
    } else {
      // the same status
      result.push(right[j]);
      j++;
    }
  }
  // get array i created and what is stil at left and right
  return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(divideAndConquer([2, 3, 5, 4, 6, 1]));
