let btn1 = document.querySelector("#btn1");
let box1 = document.querySelector("div");
//     ------------------------------Event Object ---------------------------------
btn1.onclick = () => {
    console.log("btn1 was clicked");
};
btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.clientX, e.clientY);
};
box1.onmouseover = (e) => {
    console.log("you are on the Box !!!");
    console.log(e);
    console.log(e.type);
    console.log(e.clientX, e.clientY);
};
//          --------------------------------------------------------------------------

//          -----------------------Event Listener--------------------------

// node.addEventListner (event,callBack)
btn1.addEventListener("click", () => {
    console.log("Button was clicked -1  !!");
})
btn1.addEventListener("click", () => {
    console.log("Button was clicked - 2 !!");
})

const handler3 = () => {
    console.log("Button was clicked - 3!!");
}

btn1.addEventListener("click", handler3);


btn1.addEventListener("click", () => {
    console.log("Button was clicked - 4 !!");
})

//              -----------------------node.removeElementListener(event,callBack)---------------------------


btn1.removeEventListener("click", handler3);



//         ------------------------------------------------------------------



