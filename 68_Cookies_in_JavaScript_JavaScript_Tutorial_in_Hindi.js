// console.log(document.cookie)
// document.cookie ="name=harry11273774"
// console.log(document.cookie)


let key = prompt("Enter your key");
let value = prompt("Enter your value");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie)