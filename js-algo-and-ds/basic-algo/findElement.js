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

findElement([1, 2, 3, 4], num => num % 2 === 0);