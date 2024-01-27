// btn.addEventListerner('Click', function(e){
//     alert('Namaste World1')
// })

// btn.addEventListerner('Click', function(e){
//     alert('Namaste World2')
// })

// let  = prompt("What is your faviorate number?")
// if(a == 2){
//     btn.removeEventListener('Click', function(e){
//         alert('Namaste World1')
//     })
// }


let x = function(event) {
    console.log(event.target)
    console.log(event.type, event.clientX, event.clientY)
    // alert("Hello World1!")
  }
  
  let y = function(e) {
    console.log(e)
    alert("Hello World2!")
  }
  
  btn.addEventListener('click', x)