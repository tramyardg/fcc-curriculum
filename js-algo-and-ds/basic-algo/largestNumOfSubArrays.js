// find the inner max value first
function findInnerMax(innerArr) {
  let maxInner = innerArr[0];
  for (let i = 0; i < innerArr.length; i++) {
    if  (innerArr[i] > maxInner) {
      maxInner = innerArr[i];
    }
  }
  return maxInner;
}

function largestNumOfSubArrays(arr) {
  let largestElemInSub = [];
  for (let i = 0; i < arr.length; i++) {
    largestElemInSub.push(findInnerMax(arr[i]))
  }
  return largestElemInSub;
}


largestNumOfSubArrays([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
// [27, 5, 39, 1001]