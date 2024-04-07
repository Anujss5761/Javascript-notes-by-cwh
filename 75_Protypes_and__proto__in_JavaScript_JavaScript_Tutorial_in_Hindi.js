let a = {
    Name1 : "ANuj",
    Language : "Hindi",
    run: ()=>{
        alert("Hello")
    }
    
}

console.log(a)

let p = {
    run: ()=>{
        alert("Hello")
    }
}

p.__proto__ ={
    Name:"Kashyap"
}

a.__proto__ = p
a.run()

console.log(a.Name)