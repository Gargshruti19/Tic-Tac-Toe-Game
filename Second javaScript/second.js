
let heading = document.getElementById("heading");
console.dir(heading);

let heading2 = document.getElementsByClassName("heading-class");
console.dir(heading2);
console.log(heading2);

let paras = document.getElementsByTagName("p");
console.log(paras);

 let div = document.querySelector("div-class");
 console.dir(div);


 let newBtn = document.createElement("button");
 newBtn.innerHTML = "I am there";

 newBtn.style.color="white";
 newBtn.style.backgroundColor = "red";
 document.querySelector("body").prepend(newBtn);