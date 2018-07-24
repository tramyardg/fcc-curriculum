function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      num = arr[i];
      break; // break immediately if found
    } else {
      num = undefined;
    }
  }
  return num;
}

findElement([1, 3, 5, 8, 9, 10], function (num) {
  return num % 2 === 0;
});
// should return 8.

findElement([1, 3, 5, 9], function (num) {
  return num % 2 === 0;
});
// should return undefined.