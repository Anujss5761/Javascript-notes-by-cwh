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

function loadScript(src, callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
        console.log("Loaded script with SRC: " + src);
        callback();

    }
    document.body.appendChild(script);
    }

function hello(){
    alert("Hello Bharat")
}


function goodmorning(){
    alert("Good Morning")
}
loadScript("https://www.amazon.in/Kikibix-Currant-Natural-Transfat-Emulsifiers/dp/B0C9X87YN8/ref=sr_1_1?crid=5BA1RONT7SO4&keywords=B0C9X87YN8&nsdOptOutParam=true&qid=1706461807&sprefix=b0c9x87yn8%2Caps%2C281&sr=8-1", hello)
