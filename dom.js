
 /*console.log(window);
 console.log(document);

 let element = document.getElementById("demo");
 element.innerText = "G+"
// console.log(element)
let ele = document.getElementById("test");
// ele.innerText= "<h1>Header</h1>"
ele.innerHTML = "<h1>Header</h1>"
console.log(ele);

let ele = document.getElementsByClassName("test");
console.log(ele);
console.log(Array.isArray(ele));
ele[0].innerText="Hello"

let x = [...ele];
//console.log(x , Array.isArray(x));
x.map(element=>{
    element.style.backgroundColor="orange"
})*/


let ele = document.querySelectorAll(".test");
console.log(ele);

let ele = document.createElement("h1");
ele.innerText = "Dynamic creation of html element";
ele.id = "demo";
//console.log(ele);



let image = document.createElement("img");
image.src = "https://media-hosting.imagekit.io//755cc749b0a041fe/Screenshot%202025-01-23%20130622%20(1).png?Expires=1832396566&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WvasYuQRJ7wUQaSOSUCEqbdhtyXL6fmNSc06BCuptVnRneV7nIU6KhIatFtB65rLVv1oDYljO4BRCqK0F5rAY5wYbWl7cLIza0eMH42nAXklDQgYcupCNT-ICkPVdr7zoqNBDJBbx0J-Qx-PGrQigTR366JGc3jtWM-KXrLEi-ayqYQY0IF6s3FFGuEEm7NYGrGQsiCzNJzRTjQqsCN20HGDAGw3RylvgDoKxeDC7NCdigEKlFU5l9F736w1Yzqr4rO2URMUDNDf5DU0AiIdffsMm8zB2QZbqKnnh5ZGwlp8T8SXgjrY0p38vTAHKU4tP73cw1h2MTIYKF7KYjlPxg__";
console.log(image);

document.body.appendChild(ele);
document.body.appendChild(image)

let form = document.querySelector("form");
let username = document.getElementById("uName");
let mail = document.getElementById("uMail");
let psw = document.getElementById("uPass");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let uname = username.value;
    let uemail = mail.value;
    let upass = psw.value;

    let userDetails={
        uname , uemail, upass
    }
    console.log(userDetails);
    localStorage.setItem("userData" , JSON.stringify(userDetails))
    

    

    

})


