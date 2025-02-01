const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const div3 = n.filter((num) => num % 3 === 0);
const power3 = div3.map((num) => num ** 3);

console.log(power3);
