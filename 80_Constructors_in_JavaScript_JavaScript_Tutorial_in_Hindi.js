class Employee{
    constructor(name){
        console.log(`${name} : Employee is here.`)
        this.name;
    }
    login(){
        console.log(`Employee has been logged in.`);
    }
    logout(){
        console.log(`Employee has been logged out.`);
    }
    leaves(leave){
        console.log(`Employee is requesting for ${leave} days leaves.`);
    }

}

class Programmer extends Employee{
    // constructor(...arg){ ---> If there is no constructor in child class, this created autometically
    //     super(...arg)
    // }
    requestedcoffee(x){
        console.log(`Employee has requested ${x} coffee.`)
    }
    leaves(leave){
        super.leaves(4)
        console.log(`One extra granted.`)
        // console.log(`Employee is requesting for ${leave+1} days leaves. (One Extra)`);
    }
}

let e = new Programmer("Anuj");
e.login()
e.leaves(4)