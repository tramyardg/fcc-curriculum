function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  } else {
    let newStr = "";
    for (let i = 0; i < num; i++) {
      newStr += str;
    }
    return newStr;
  }
}

repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", 3);
repeatStringNumTimes("abc", 4);
repeatStringNumTimes("abc", 1);
repeatStringNumTimes("*", 8);
repeatStringNumTimes("abc", -2);