function titleCase(str) {
  let strToLower = str.toLowerCase();
  let strArray = [];
  if (str.split(" ").length > 1) {
    strArray = strToLower.split(" ");
    let newStr = [];
    for (let i = 0; i < strArray.length; i++) {
      newStr.push(strArray[i].charAt(0).toUpperCase() + strArray[i].substr(1));
    }
    return newStr.join(" ");
  } else {
    return str.charAt(0).toUpperCase() + strToLower.substr(1);
  }
}

titleCase("I'm a little tea pot");