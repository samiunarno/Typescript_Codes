"use strict";
const user = {
    id: 101,
    name: {
        first: "Samiun",
        last: "Arno", // once only
    },
    cont: "017000888990",
    address: "uganda",
};
const { name: { last }, cont: contactNo, } = user;
console.log(last);
console.log(contactNo);
const myArray = ["chanler", "Joe", "redchil"];
const [, , best, ...rest] = myArray;
console.log(myArray);
