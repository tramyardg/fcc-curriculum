function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1); // recursion
  }
}
// 5! = 1 * 2 * 3 * 4 * 5 = 120
factorialize(5);
