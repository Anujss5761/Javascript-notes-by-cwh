class Animal{
    constructor(name, color){
        this.name = name;
        this.color = color
    }

    run(){
        console.log(this.name + " is running.")
    }
    shout(){
        console.log(this.name + " is shouting.")
    }
}

class Monkey extends Animal {
    eatBanana() {
        console.log(this.name + " is eating banana.")
    }
    hide() {
        console.log( this.name + " is hiding")
    }
}


let ani = new Animal("Bruno", "white")
let m = new Monkey("Hanu", "Orenge")

ani.shout()
m.eatBanana()
m.hide()
// ani.hide() this will throw and arror.
