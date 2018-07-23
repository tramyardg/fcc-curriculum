function truncateString(str, num) {
  let strLength = str.length;
  let endingStr = "...";
  if (strLength > num) {
    return str.substr(0, num) + endingStr;
  } else if (strLength === num || num > strLength || num <= 0) {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
// "A-tisket..."
truncateString("Peter Piper picked a peck of pickled peppers", 11);
// "Peter Piper..."
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
// "A-tisket a-tasket A green and yellow basket"
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
// "A-tisket a-tasket A green and yellow basket"
truncateString("A-", 1);
// "A..."
truncateString("Absolutely Longer", 2);
// "Ab..."