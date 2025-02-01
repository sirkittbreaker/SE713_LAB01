score = [10, 20, 30, 40, 50];

function sum() {
  let total = 0;
  for (let i = 0; i < score.length; i++) {
    total += score[i];
  }
  return total;
}

console.log(sum());
