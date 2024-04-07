let arr = [3, 4, 5, 6, 12, 13, 14]
let [a, , , , ...rest] = arr;

console.log(a, rest);