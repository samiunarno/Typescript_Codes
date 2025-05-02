"use strict";
function multiply(x, y) {
    return x * y;
}
multiply(2, 3);
let fruits = ["apple", "banana", "pinaple"];
fruits.push("Sam");
// Object :
let person = {
    name: "Samiun",
    age: 25,
    isCaptain: true,
};
let person2 = {
    name: "Samiun",
    age: 20,
    isCaptain: true,
};
// const per3 = person.age + person2.age;
// console.log(per3);
//Union Type :
let ages;
ages = 25;
if (typeof ages === "number") {
    console.log(ages + 5);
}
let alibaba = [];
alibaba.push("Arno");
console.log(alibaba);
alibaba.pop();
console.log(alibaba);
