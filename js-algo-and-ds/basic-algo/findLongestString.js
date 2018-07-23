function findLongestWordLength(str) {
  let strArray = str.split(" ");
  let longestStr = strArray[0].length;
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > longestStr) {
      longestStr = strArray[i].length;
    }
  }
  return longestStr;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// just like find max or min number in an array
// this can function can be used in finding the longest string with "length"
// [5, 4, 12, 2, 8, 1, 18, 6]

function findMaxNum(numArray) {
  let max = numArray[0];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > max) {
      max = numArray[i]
    }
  }
  return max;
}

function findMinNum(numArray) {
  let min = numArray[0];
  for (let i = 0; i < numArray; i++) {
    if (numArray[i] < min) {
      min = numArray[i];
    }
  }
  return min;
}
