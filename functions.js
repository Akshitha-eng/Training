 function addToCart(){
     alert("Product is added to cart")
 }

 function add(a,b){
     console.log(a+b);
 }
 add(10 , 40)
 add(30 , 40)
 add(50 , 40)
 add(100 , 40)
 add(13 , 50)

// ! function without parameters
 function demo(){
     console.log("function without parameters");
 }
 demo();

// ! function with parameters

 function userDetails(name , age , city){
     console.log(name);
     console.log(age);
     console.log(city);
 }
 userDetails("Yeshwant" , 20 , "Hyderbad");

//! anonymus function
 function(){
     console.log("Anonymus function");
 }
 ();

// ! function  expression
 let x = function(){
     console.log("function expression is executing");
 };
 x();


// ! IIFE
 (function(){
     console.log("IIFE");
 })();

//! arrow function
 function demo() 
 {
     console.log("Hello");
 }
 demo();

 let x = ()=>console.log("Arrow function");
 x();

 let x =_=>console.log("Arrow function");
 x();

 let x =a=>console.log(a);
 x(5);

 let x =(a , b)=>console.log(a+b);
 x(5,5);
 let x=_=>{console.log("Hi");
         console.log("Hello");
         console.log("Bye");}
     x();
//! return function
function demo(a,b){
    return a+b;
};
let x = demo(5,5);
console.log(x);

let y = (a,b) => a+b;
let a = y(10,20);
console.log(a);

let z = (a,b) =>{return a+b};
let b = y(10,100);
console.log(b);

//!Higher order function

function hof(a){
    return a;
};
let x = hof([1,2,3,4,5]);
console.log(x);

//! closure
var a= 100;
let b= "hi";
function x(){
    var user = "Akshitha";
    let company = "Google";
    const sal = 1234567890;
    console.log(user);
    console.log(company);
    console.log(sal);
    console.log(a,b);
};
x();