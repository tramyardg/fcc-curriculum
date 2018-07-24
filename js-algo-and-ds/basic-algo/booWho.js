function booWho(bool) {
  let typeOfArg = typeof bool;
  let typeOfBoolTrue = typeof true;
  return typeOfArg === typeOfBoolTrue;
}

booWho(null);
booWho(true);
booWho(false);
booWho([1, 2, 3]);
booWho([].slice);
booWho({ "a": 1 });
booWho(1);