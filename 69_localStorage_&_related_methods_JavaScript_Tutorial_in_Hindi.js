let key = prompt("Enter key, you want.")
let value = prompt("Enter value, you want.")

localStorage.setItem(key, value)

console.log(`The value is ${key} is ${localStorage.getItem(key)}`)