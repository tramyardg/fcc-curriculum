function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1); // recursion
  }
}

factorialize(5);

// 5! = 1 * 2 * 3 * 4 * 5 = 120
// 5 * factorial (4) = 120
//  4 * factorial (3) = 24
//   3 * factorial (2) = 6
//    2 * factorial (1) = 2
//     1
