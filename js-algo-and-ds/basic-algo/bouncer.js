function bouncer(arr) {
  return arr.filter(Boolean);
}

// alternate solution
function bouncer2(arr) {
  // from documentation
  // https://forum.freecodecamp.org/t/javascript-array-prototype-filter/14289
  return arr.filter(
      function (value) {
        return (typeof value === 'string' && value.length > 0) || (typeof value === 'number' && value > 0);
      }
  );
}

bouncer([7, "ate", "", false, 9]);
// should return [7, "ate", 9].
bouncer(["a", "b", "c"]);
// should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]);
// should return [].
bouncer([1, null, NaN, 2, undefined]);
// should return [1, 2].