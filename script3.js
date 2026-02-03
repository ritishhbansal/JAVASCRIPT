//filter

let student = [
    { id: "001", name: "Aman", sports: "Cricket"},
    { id: "002", name: "Abhi", sports: "BasketBall"},
    { id: "003", name: "Aniket", sports: "Cricket"},
    { id: "004", name: "Avi", sports: "BasketBall"},
    { id: "005", name: "Ritish", sports: "Hockey"},
]

// student.filter((curValue, index, array) => {

// }) //syntax of filter method 1


//method 2
const newArray = student.filter((curValue) => {
    if(curValue.id % 2 == 0) return true;
    else return false;    
})
console.log("New Array here.....")
console.log(newArray);

//MAP

const map = student.map((curValue, index, array) => {
    return '<li>$(curValue.name)</li>';
})

console.log(map);

//import and export

import { multiply } from "./script2.js";

const result = multiply(2,4,5);
console.log(result);