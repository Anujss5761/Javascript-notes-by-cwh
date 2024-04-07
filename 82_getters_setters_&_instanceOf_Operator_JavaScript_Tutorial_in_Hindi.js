class Animal{
    constructor(name){
        this._name = name;
    }
    fly(){
        alert("Me ud rha hu")
        // document.write("Me ud rha hu")
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name =newName;
    }
}

class Rabbit extends Animal{
    eatCarrot(){
        console.log("Eating Carrot")
    }
}

let a = new Animal("Bruno")
a.fly()
// a.name = prompt("Type your Name.")
a.name = "Anuj";
// console.log(a.name)
let c = 56;

console.log(c instanceof Animal)
console.log(c instanceof Rabbit)
console.log(a instanceof Animal)
