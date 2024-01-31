// let promise = new Promise(function(resolve ,reject){
//     alert("I am in alert in promise.")
// })

// console.log("Hello");
// setTimeout( function(){
//     console.log("SetTimeout in 2 seconds")
// }, 2000)

// console.log("My Name is Anuj Kashyap.")



let promise = new Promise(function(resolve ,reject){
    alert("Hello")
    resolve(2)
})

console.log("Hello");
setTimeout( function(){
    console.log("SetTimeout in 2 seconds")
}, 2000)

console.log("My Name is Anuj Kashyap.")
console.log(promise);



