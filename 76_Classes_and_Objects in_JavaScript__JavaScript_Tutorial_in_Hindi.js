class RailwayForm{
    Submit() {
        alert(this.name + ": The form has been submitted for this train no. :" + this.trainno);
        // document.write(this.name + ": The form has been submitted for this train no. :" + this.trainno);
      } 
    Cancel() {
        alert( this.name + ": The form has been cancelled for this train no. :" + this.trainno);
      }
    fill(givenname, trainno){
        this.name = givenname;
        this.trainno = trainno
    }
} 

//Create a form for Harry 
let Shivam = new RailwayForm();
//Fill the Harry's details in the form
Shivam.fill("Anuj", 567433);

//Create a form for Karan
let Karan = new RailwayForm();
let Karan1 = new RailwayForm();
//Fill the details for Karan
Karan.fill("Deepak", 222420);
Karan1.fill("Deepak", 229211);

Shivam.Submit()
Karan.Submit()
Karan1.Cancel()
