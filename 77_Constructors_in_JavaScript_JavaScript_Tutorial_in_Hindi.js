// class RailwayForm{
//     constructor(givenname, trainno){
//         console.log("Constructor called" + givenname + " " + trainno)
//         this.name = givenname;
//         this.trainno = trainno
//     }
//     Submit() {
//         alert(this.name + ": The form has been submitted for this train no. :" + this.trainno);
//         // document.write(this.name + ": The form has been submitted for this train no. :" + this.trainno);
//       } 
//     Cancel() {
//         alert( this.name + ": The form has been cancelled for this train no. :" + this.trainno);
//       }
   
// } 

// //Create & fill the form for Harry 
// let Shivam = new RailwayForm("Anuj", 567433);

// //Create  & fill the form for Karan
// let Karan = new RailwayForm("Deepak", 222420);
// // let Karan1 = new RailwayForm("Deepak", 229211);


// // To run the above, Please comment out these code written below
// Shivam.Submit()
// Karan.Submit()
// // Karan1.Cancel()






// This is a 2nd Constructor exaplme for better understanding about construct.

class RailwayFormConstructor{
      constructor(givenname, trainno, address){
        this.givenname = givenname;
        this.trainno = trainno;
        this.address = address
        console.log(givenname  + ":: This is your train for train no  : " + trainno + " And your address is : " + address)
      }

      preview(){
         alert(this.givenname  + ":: This is your train for train no  : " + this.trainno + " And your address is : " + this.address);
      }
      submit(){
        alert(this.name + ": The form has been submitted for this train no. :" + this.trainno);
      }
      cancel(){
        alert( this.name + ": The form has been cancelled for this train no. :" + this.trainno);
        this.trainno = 0;
      }
}

let RailwayFormObject = new RailwayFormConstructor("Anuj Kashyap", 567328 , "Rampuri Aayodhya Pincode - 220011")

RailwayFormObject.preview()
RailwayFormObject.submit()
RailwayFormObject.cancel()
RailwayFormObject.preview()