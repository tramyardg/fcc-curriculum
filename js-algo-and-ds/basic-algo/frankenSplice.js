// splice
// array is affected once you splice it
// i.e., let arr = [4,5]; arr.splice(1) => [5]; console.log(arr); => [4]

// slice
// the original array is conserved
// i.e., let arr2 = [4,5]; arr2.slice(1) => [5]; console.log(arr2); => [4,5]

// concat empty array [] with nonempty array => nonempty array
// i.e., [4,5].concat([]); => [4,5]
function frankenSplice(arr1, arr2, n) {
  let emptyArr = [];
  let tempArr = arr2.concat(emptyArr);
  let newArr1 = tempArr.splice(n); // ["knees", "toes"]; // tempArr2 => ["head", "shoulders"]
  let leftArr = tempArr.concat(arr1);
  return leftArr.concat(newArr1);
}

frankenSplice([1, 2, 3], [4, 5], 1);
// should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1);
// should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
// should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

/**
 * Note:
 * The first array should remain the same after the function runs.
 * The second array should remain the same after the function runs.
 */