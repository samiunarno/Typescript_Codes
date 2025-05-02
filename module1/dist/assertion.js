"use strict";
let anything;
anything = "Next Step";
anything = true;
let op = anything.length;
const kgtogm = (value) => {
    if (typeof value === "string") {
        const convertedValue = parseFloat(value);
        return `the converted value is ${convertedValue}`;
    }
    if (typeof value === "number") {
        return value * 1000;
    }
};
const result = kgtogm(1000);
const result2 = kgtogm("1000");
console.log(result);
