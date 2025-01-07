//1. Using If-Else Ladder in JavaScript:
let a = 20;
let b = 140;
let c = 100;

if (a > b && a > c) {
    console.log("a is the greatest value: " + a);
} else if (b > a && b > c) {
    console.log("b is the greatest value: " + b);
} else {
    console.log("c is the greatest value: " + c);
}


//2. Using Switch Condition in JavaScript:

let a1 = 20;
let b1= 140;
let c1 = 100;

let greatest;

if (a1 > b1 && a1 > c1) {
    greatest = "a1";
} else if (b1 > a1 && b1 > c1) {
    greatest = "b1";
} else {
    greatest = "c1";
}

switch (greatest) {
    case "a1":
        console.log("a1 is the greatest value: " + a1);
        break;
    case "b1":
        console.log("b1 is the greatest value: " + b1);
        break;
        case "c1":
            console.log("c1 is the greatest value: " + c1);
            break;
        default:
            console.log("Values are equal or invalid input");
    }