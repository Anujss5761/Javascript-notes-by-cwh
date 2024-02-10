// let p1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         console.log("Resolved after 2 seconds.")
//         resolve(56);
//     }, 2000);
// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(56);
//         }, 2000);
//     })
//     return p2;
// }).then((value)=>{
//     console.log("We are done.");
// }).then((value)=>{
//     console.log("Pakka Done");
// })


// Loadscript

const Loadscript = (src) =>{
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script");
        script.type = "text/javascript"
        script.src = src;
        document.body.appendChild(script)
        script.onload = (script) =>{
            resolve("Script has been loaded sir.")
        }
        script.onerror = (script) =>{
            reject(0);
        }
    })
}

let p1 = Loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.esm.min.js")

p1.then((value)=>{
    console.log("Scrpit has been loaded")
    return Loadscript("https://cdnd.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.esm.min.js")
}).catch((error) =>{
    console.log("We are sorry sir. We have found an error here.")
}) 