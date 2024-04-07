class Animal{
   constructor(name){
      this.name =name;
   }

   walk(){
    console.log("Animal, " + Animal.capitalize(this.name) + " is walking.")
   }

   static capitalize(name){
     return name.charAt(0).toUpperCase() + name.substr(1, name.length);
   }
}

let p = new Animal("dog")

p.walk();
// console.log(capitalize(this)) <-- this dosen't work