function strToArray(arg) {
  // removed trailing and leading spaces in the string
  return arg.trim().split("");
}

// sol 1
function reverseStr(arg) {
  return strToArray(arg).reverse().join("");
}

// sol 2
function reverseStr2(arg) {
  let strArr = strToArray(arg);
  let str = "";
  for (let i = strArr.length - 1; i >= 0; i--) {
    str += strArr[i];
  }
  return str;
}