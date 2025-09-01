
// function 
function greet(name) {
     return  console.log("Hello! " + name);
};

greet("hiruki");

function add(a, b){
    return a + b;
}
console.log(add(5, 5));


// Function Declaration
function greet1(){
    console.log("Hi!!!");
} greet1();
//Function Expression
const sayHello = function(){
    console.log("Hello!");
};

sayHello();

//arrow funtion
const add1 = (a,b) => a + b;
console.log(add1(2, 3));
const square = n => n*n;
console.log(square(4));
const multiply = (a, b) => {
    let result = a * b;
    return result;
}
console.log(multiply(10, 10));

//default parameters

function greetings(name = "Guest"){
    console.log("Hello, " + name);
}
greetings();
greetings("pooh");


// function scope
   let globalVariale = "Global Variable";
   function showVar(){
    let localVar = "Local Variable";
    console.log(globalVariale);
    console.log(localVar);
   }
showVar();
// console.log(localVar); - error

//callback Function
function greet2(name, callback){
    console.log("hello, " + name);
    callback();
}

function afterGreet(){
    console.log("Welcome to javascript");
}
greet2("Pooh", afterGreet);



// immediately invoked function expression
(function(){
    console.log("IIFE runs immediately!");
})(); // Runs automatically when defined



/*
    Next Topic
            Higher-order functions
            Closures
            Function binding (call, apply, bind)
            Async functions (async/await)

*/