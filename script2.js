//event handlers using with the help of html(declared in html and defined in java script)

// function myFunction() {
//     console.log("mujhe touch kiya");
// }
// const mouseOver = () => {
//     console.log("mujhe cheda kisi ne");
// }
// function keyPressEvent() {
//     console.log("Key was pressed");
// }


//event listner(same as event handler but it is purely defined in java script)


const box1 = document.getElementById("box-1");
box1.addEventListener("click", () => {//first parameter is event type, second parameter is callback function and if we have to use capture we have to add third parameter
    console.log("clicked on box");
})  
//---------------------------------------------------
//bubbling and capture

const container = document.getElementById("container");
container.addEventListener("click", () => {
    console.log("clicked on container");
})//capture is by default false........
// }, true)  

//----------------------------------------------------

// box1.addEventListener("mousemove", (e) => {// we can create event objecct it carries the info of event when click performs
//     console.log("click by event 2",e.clientX, e.clientY);
// })  

// const nameInput = document.getElementById("nameInput");
// nameInput.addEventListener("keypress", (e) => {
//     console.log("key", e.key);
// })

nameInput.addEventListener("keydown", (e) => {
    console.log("key", e.key);
})

nameInput.addEventListener("focus", (e) => {
    console.log("key", e);
})

export function multiply(a,b,c) {
    return a*b*c;
}