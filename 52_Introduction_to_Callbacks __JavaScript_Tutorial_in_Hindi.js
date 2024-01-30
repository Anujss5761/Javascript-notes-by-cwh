// Synchronous Programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your faviorate colour?")
// console.log( a + " is " + b + " year old and has " + c + " faviorate colour. ")


// Asynchronous Programming
// console.log("Start")
// setTimeout(function(){
//     console.log("Hey I am Good")
// },3000)
// console.log("End")




// function loadScript(src, callback){
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function() {
//         console.log("Loaded script with SRC: " + src);
//         callback(src);
//     }
//     document.body.appendChild(script);
//     }

// function hello(src){
//     alert("Hello Bharat" + src)
// }


// function goodmorning(src){
//     alert("Good Morning" + src)
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.esm.min.js", hello)




// Error Handling
function loadScript(src, callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
        console.log("Loaded script with SRC: " + src);
        callback(null, src);
    }
    script.onerror = function() {
        console.log("Error loading script with src" + src);
        callback(new error("SRC got some error"));
    }
    document.body.appendChild(script);
    }

function hello(error, src){
    // alert("Hello Bharat" + src)
    if(error){
        console.log(error);
        return;
    }
    alert("Hello" + src)
}


function goodmorning(src){
    if(src){
        console.log(src);
        return;
    }
    alert("Good Morning" + src)
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.esm.min.js", hello)





