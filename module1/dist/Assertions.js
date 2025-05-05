"use strict";
{
    //Assertion Type :
    const kgstogram = (value) => {
        if (typeof value === "string") {
            return parseFloat(value) * 1000;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
        else {
            throw new Error("Invalid input type. Only string or number is allowed.");
        }
    };
    const resti1 = kgstogram(1000);
    console.log(`The Converted Value is : ${resti1}`);
}
