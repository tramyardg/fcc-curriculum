function largestSumOfFour(arr) {
  let subArraysLength = 4;
  let maxArray = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3]; // reference is the first element
  for (let i = 0; i < subArraysLength; i++) {
    if ((arr[i][0] + arr[i][1] + arr[i][2] + arr[i][3]) > maxArray) {
      maxArray = (arr[i][0] + arr[i][1] + arr[i][2] + arr[i][3]);
    }
  }
  return maxArray;
}

// largestSumOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
// returns 2859 -> largest sum of sub array elements

// largestSumOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])
// returns 114