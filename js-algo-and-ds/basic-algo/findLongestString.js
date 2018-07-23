function findLongestWordLength(str) {
  let strArry = str.split(" ");
  let longestStr = strArry[0].length;
  for (let i = 0; i < strArry.length - 1; i++) {
    if (strArry[i].length > longestStr) {
      longestStr = strArry[i].length;
    }
  }
  return longestStr;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// just like find max number in an array
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
