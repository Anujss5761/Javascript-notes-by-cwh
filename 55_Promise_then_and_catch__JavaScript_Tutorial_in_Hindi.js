// Resolve
let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        console.log(" I am a promise and I am resolved");
        resolve(true)
    }, 5000)
})

// console.log(p)






// Reject
let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        console.log(" I am a promise and I am rejected");
        reject(new Error("I am a error"))
    }, 5000)
})



// console.log(p)

p1.then((value) => {
    console.log(value)
})

// p2.catch((error)=>{
//     console.log("Some error occured in p2")
// })

((error)=>{
    console.log("I am a Error.")
})

// p2.then((value) => {
//     console.log(value)
// })
