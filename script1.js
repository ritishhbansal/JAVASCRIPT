//DOM MANIPUALTION(Document Object Model)
// --------------------------------------------------------------------------------
//accessing the html elements by 4 methods
// -------------------------------------------------------------------------



// const myBody = document.body;

// console.log(myBody);

// const box2 = document.getElementById("box-2");
// console.log(box2);

// const divs = document.getElementsByTagName("div");
// console.log(divs);

// const boxes = document.getElementsByClassName("box");
// console.log(boxes);

// const random = document.getElementsByClassName("random");
// console.log(random);

// const random0 = document.querySelector('.container .random');
// console.log(random0);



// -----------------------------------------------------------------------------
//modyfying the element of html
// ------------------------------------------------------------------------------------------

const box1 = document.getElementById("box-1"); 
// box1.innerHTML = ("Hello World");
// box1.innerHTML = "<h1>Hello</h1>";
box1.style.backgroundColor = "red";

const boxes = document.getElementsByClassName("box");

for(let i = 0; i<boxes.length; i++){
    boxes[i].classList.add("round-border");
}

// box1.classList.remove("box");


//----------------------------------------------
//Creating new element of html
//------------------------------------------------

const para = document.createElement("p");
para.innerText = "this is brand new";

const container = document.getElementById("container");
container.appendChild(para);
para.classList.add("box"); 
