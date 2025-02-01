const most = (x, y) => {
  let result = x;
  if (y > x) {
    result = y;
  }
  return result;
};

console.log(most(15, 9));
