function confirmEnding(str, target) {
  let targetLength = target.length;
  let strLength = str.length;
  let strArray = [];
  let lastWord = "";
  if (str.split(" ").length > 1) { // if more than one words
    strArray = str.split(" ");
    lastWord = strArray[strArray.length - 1];
    if (lastWord === target || lastWord.substr(lastWord.length - targetLength) === target) {
      return true;
    }
  } else {
    if (str.substr(strLength - targetLength) === target) {
      return true;
    }
  }
  return false;
}

confirmEnding("Bastian", "n");