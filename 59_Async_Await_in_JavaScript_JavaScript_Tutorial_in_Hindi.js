// async function anuj (){
//     return 6;
// }

// anuj().then((x)=>{
//     alert(x)
// })


async function anuj (){
    let gorakhpurWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("27 deg")
        }, 1000);
    })

    let ayodhyaWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("21 deg")
        }, 7000);
    })

    // gorakhpurWeather.then(alert)
    // ayodhyaWeather.then(alert)

    console.log("Fatching Gorakhpur Weather Please Wait...")
    let gorakhpurW = await gorakhpurWeather;
    console.log("Fatched Gorakhpur Weather" + gorakhpurW)

    console.log("Fatching Ayodhya Weather Please Wait...")
    let ayodhyaW = await ayodhyaWeather;
    console.log("Fatched Ayodhya Weather" + ayodhyaW)
    return[gorakhpurW, ayodhyaW]
}


const cherry = async () =>{
    console.log("Hey This massage from weather control room.")
}

const main = async () => {
    console.log("Hey this the data ")
    let a = await anuj();
    let b = await cherry();
    // a.then((value) =>{
    //      console.log(value);
    // })
}

main()



