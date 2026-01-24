let c = 12;
let d = 23;
console.log("c+d is", c+d);
d=d+6;
console.log("c+d is", c+d);

//DECLARATIPON AND INITIALIZATION

let age = 26; //declaration + initialisation
const name = 'Ritish'; //const var can not changed again like let
console.log(name);
console.log(age);
age = 28; //initialization if again put let it shows error
console.log(age);

//DATA TYPES

let g=23; // number data type
console.log("the type of g is", typeof(g));
g='name'; //data type is string and can be change in same varible
console.log("the type of g is", typeof(g));
g=false; //data type is boolean 
console.log("the type of g is", typeof(g));

//TYPE CONVERSIONS

let f=23; 
console.log("the type of f is", typeof(f));
f=String(f);// can be converted in string data type but can not be converted in boolean without defining the boolean 
console.log("type of f is", typeof(f));

let n=true;
console.log("type of f is", typeof(n));
n=Number(n);//in boolean if true is converted in number it comes with 1 and with false its 0
console.log("type of f is", typeof(n));
console.log(n);

let i="hello";
console.log("type of f is", typeof(i));
i=Number(i);
console.log("type of f is", typeof(i));
console.log(i);//it will show Not a number(NaN) because string cannot be converted in number


//OPERATORS

//aritheic operator(+-*/%++--)

//assignment operator(= += -= *= /= %=)
let o=8;
console.log(o);
o += 4;
console.log(o);

//comparison operator(== != === !== > < <= >= ) always show boolean expression
const num1=5;
const num2=7;
const result = num1 == num2;
console.log(result);

const num3=5;//number
const num4="5";//string
const result1 = num3 == num4;
console.log(result1);
const result2 = num3 === num4;//give result according to data type 
console.log(result2);

//logical operator(&& || !) these are basically gates like and,or,not

const name3 =true;
const name1 =false;
const result3 = name3 && name1;
console.log(result3);

//IS-ElSE STATEMENT

const umar = 12;
if(umar >=18){
    console.log("you can vote");
} else {
    console.log("you cannot vote");
}

//if else if

const marks=56;

if(marks > 90){
    console.log("A");
} else if(marks >80){
    console.log("B");
} else if(marks >70){
    console.log("C");
} else if(marks >60){
    console.log("D");
} else if(marks >50){
    console.log("E");
} else {
    console.log("FAIL");
}

//nesting 

const umar1 = 76;
if(umar1 >=18){
    console.log("you can vote");
} if(umar1 > 69){
    console.log("you can vote again")
}
else {
    console.log("you cannot vote");
}

//ternary operator

let mark = 57;

let result5 = (mark >=40) ? "PASSED" : "Failed";
console.log(result5);
mark = 34;
result5 = (mark >=40) ? "PASSED" : "Failed";
console.log(result5);

//SWITCH STATEMENT

 const grade = "E";

 switch(grade) {
    case"A":
    console.log("very good");
    break;
    case"B":
    console.log("good,keep learning");
    break;
    case"C":
    console.log("need improvement");
    break;
    case"D":
    console.log("not good");
    break;
    default:
        console.log("Invalid Grade");
        break;
 }

 //LOOPS

 //for loop

 for(let index=0; index<5; index++){
    console.log("Ritish", index);
 }
console.log("--------")//just for space
 for(let index1=0; index1<5; index1=index1+2){
    console.log("Ritish", index1);
 }

 // while loop

 let step=0;
 while(step<5){
    console.log("step",step);
    step+=1;
 } 

 //DO WHILE LOOP

 let steps=0;
 do{
    console.log("steps", steps);
    steps+=1;
 } while(steps<5);

 //continue and break statement

 let step2=0;
 while(step2<5){
    console.log("step",step2);
    step2+=1;
    if(step2 === 2){
        break;
    }
 } 

 let step3=0;
 while(step3<5){
    step3+=1;
    if(step3 === 2){
        continue;
    }
    console.log("step",step3);
 } 

 //ARRAYS

 const array =[
    "apple", 
    "banana",
     "cherry",
     23,
     true,
     false,
      {
    naam: "Ritish"
    }, 
    function hello() {
    console.log("hello world");
 }];// array can contain anything any data type data,any object and any function
 console.log(array);
 console.log(array[6]);
 console.log(array.length);

 const newarray = array;
 newarray[1] = "KIWI";
 console.log(newarray);

//methods of array

const arrays =[3,4,5,4,5,9,3];

console.log(arrays.indexOf(5));
console.log(arrays.indexOf(33));//agar element nhi hai to output -1 show krega
console.log(arrays.includes(5));
console.log(arrays.push("Ritish"));//push is use to add element at last of the array
console.log(arrays);
console.log(arrays.unshift("Ritish"));//unshift is to add element at the last of the array
console.log(arrays);
arrays.pop();//to remobve last element of array
console.log(arrays);

arrays.shift();//to remove first element of the array
console.log(arrays);

const subarrays = arrays.slice(2,7);//to create new arrays from the existing array and start with with index number but ends with exclusive number of indexing
console.log(subarrays);

arrays.sort();//to ascending the element of the array
console.log(arrays); 

//FUNCTIONS

function sum(a,b){
    const sum = a+b;
    console.log("the result is", sum);
    return sum;
}//onces declared use anywhere doen't have to write the same code everywhere just call the function

const x =20;
const y=4;
sum(x,y);

const u=40;
const v=89;
sum(u,v);

//function expression(we can stire funtion in varible and call that variable to call a function)

const square = function (num) {
    return num * num;
}

console.log(square);
console.log(square(4));

//nested  function

function addsquares(a,b) {
    
    const sa = sq(a);
    const sb = sq(b);

    function sq(num) {
        return num* num;
    }
    return sa + sb;
}
const j = 7;
const p = 2;
console.log(addsquares(j,p));

//arrow functiom

const greet1 = () => {
    console.log("Hello World"); 
}
greet1(); 

const greet = (count) => {
    for(let i =0; i<count; i++){
    console.log("Hello World"); 
}
}
greet(4); 

const square1 = (num0) => num0*num0;//it works without return keyword but casually we dont use this syntax

console.log(square1(4));

//callback function(we can make in arrow function and normal function both)

const calculate = (ab, ba, operation) => {
    return operation(ab,ba);
}
//taking operation as creating function for it by calling calculate function
//method 1
    // console.log(calculate(3,4, function (numb2,numb3) {//(this is a operation function)don't have to define name as it is anonymous function just take it usual
    //     return numb2 + numb3;
    // }));

    //OR
//method 2
const addition = calculate(3,4, function (numb2,numb3) {//(this is a operation function)don't have to define name as it is anonymous function just take it usual
        return numb2 + numb3;
    });
    console.log(addition);
//method 3
    const subtraction = (m,n) => m-n;

    const subresult = calculate(8,3, subtraction);
    console.log(subresult);

    //method 4

    function multiply(h,p) {
        return h*p;
    }

    console.log(calculate(4,3,multiply));

    //some practical callback function

 const l = [4,-2,-5,-2,-1,5,3,2,4,0];

 const firstnegative = (num) => {
    return num < 0;
 }

 const result6 = l.find(firstnegative);
 console.log(result6);

const utar2 = l.findIndex(firstnegative);
console.log(utar2);

const utar3 = l.forEach((num,) => {
    console.log("array number is ", num,);
});
console.log(utar3);

// set time out function(it is a asynchronous function which means it works differently from normal flow)

setTimeout(function () {
    console.log("This would printed after certain no. of millisec")
},1500);

//example of settimeout and callback function

function getCheese(callback){
    setTimeout(() => {
        const cheese = "🧀"
        console.log("Here is cheese", cheese);
        callback (cheese);
    }, 2000)
}
getCheese ((cheese) => {
    console.log("Get the cheese", cheese);
})

//CALLBACK HELL 

//just taking example- pizza-> cheese

function getCheese1(callback){
    setTimeout(() => {
        const cheese1 = "🧀"
        console.log("Here is cheese", cheese1);
        callback (cheese1);
    }, 2000)
}

function makeDough(cheese1, callback) {
    setTimeout(() => {
       const dough = cheese1 + "🍩";
        console.log("Here is the dough", dough);
        callback(dough);
    }, 2000)
}

function makePizza(dough , callback) {
    setTimeout(() => {
       const pizza = dough + "🍕";
        console.log("Here is the pizza", pizza);
        callback(pizza);
    }, 2000)
}

// this nesting of callback function is known as CALLBACK HELL(there is difficulty in reading this code and debugging this code so thats to reduce this nesting we use PROMISES)
getCheese1 ((cheese1) => {
    makeDough(cheese1, (dough) => {
        makePizza(dough, (pizza) => {
            console.log("got my pizza", pizza);
        });
    });
});

//PROMISES
// In JavaScript, a promise is a good way to handle synchronous operaations.It is used to find out if the asynchronous operation is successfully completed or not. A promise may have one of three states--1. Pending 2.Fulfilled 3.Rejected

const ticket = new Promise(function(resolve, reject){
    const isBoarded = false;
    if(isBoarded){
        resolve("You are in the flight");
    } else{
        reject("Flight is cancelled");
    }
});

// to call the promise there are 3 method
//then() it is used with the callback when the promise is successfully fulfilled or resolved.
//catch() it is used with the callback when the promise is rejected or if an error occurs.
//finally() it gets executed when the promise is either resolved successfully or rejected.

ticket.then((data) => {//if condition gets true this will run
    console.log("woho", data);
}).catch((data) => {//if it is false then this will run
    console.log("oh-no", data);
}).finally(() => {
    console.log("I will always be executed either it is resolved or rejected");
})

// same cheese example with promises

setTimeout(() =>{
    console.log("This cheese example is with PROMISES");
},7300);

function getCheese2() {
    return new Promise((resolve,reject) => {
         setTimeout(() => {
        const cheese2 = "🧀";
        resolve(cheese2);
    },7300)
    })
}

function makeDough2(cheese2) {
    return new Promise((resolve,reject) => {
         setTimeout(() => {
        const dough2 = cheese2 + "🍩";
        // resolve(dough2);
        reject("Bad Cheese");
    },7300)
    })
}

function makePizza2(dough2) {
    return new Promise((resolve,reject) => {
         setTimeout(() => {
        const pizza2 = dough2 + "🍕";
        resolve(pizza2);
    },7300)
    })
}

//this is promises I'm commenting it to understand async function with same example

// getCheese2()
//     .then((cheese2) => {
//         console.log("Here is the cheese", cheese2);
//         return makeDough2(cheese2);
//     })
//     .then((dough2) => {
//                console.log("Here is the dough", dough2);
//                return makePizza2(dough2);
//     })
//     .then((pizza2) => {
//       console.log("Here is the pizza", pizza2);
       
//     }).catch((data) => {
//         console.log("error occured", data);
//     }).finally(() => {
//         console.log("Process Ended");
//     })

async function orderPizza() {
    try{//put that code in try you that can generate error
    const cheese2 = await  getCheese2(); //await keyword is only used for asynchronous function.
    console.log("Here is the cheese", cheese2);
    const dough2 = await makeDough2(cheese2);
    console.log("Here is the dough", dough2);
    const pizza2 = await makePizza2(dough2);
    console.log("Here is the pizza", pizza2);
} catch (err) {
    console.log("Error occured", err);
} finally {
    console.log("Process Ended");
}
}

orderPizza();