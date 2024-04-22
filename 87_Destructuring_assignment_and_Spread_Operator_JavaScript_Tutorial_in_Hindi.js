let arr = [3, 4, 5, 6, 12, 13, 14]
// let [a, , , , ...rest] = arr;

let {a, b} = {a:1, b:3}
console.log(a, b);

// Spread Operator

let arr1 = [7,8,9]
let obj2 = { ...arr1 }
console.log(obj2);


function sum(v1, v2, v3){
    return v1 + v2 + v3;
}


console.log(sum(...arr1));

let obj3 = {
    name:"ABhishek",
    company:"DTGC",
    address:"XYZ"
}

console.log({...obj3, name:"ANuj"});