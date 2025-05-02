"use strict";
{
    //Nullable Types
    const search = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("Not Searching");
        }
    };
    search(null);
    const getspeedin = (value) => {
        if (typeof value === "number") {
            const conver = value * 1000;
            console.log(`The speed is : ${conver}`);
        }
        if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            console.log(result);
        }
    };
    getspeedin("");
    const throwarrow = (msg) => {
        throw new Error(msg);
    };
    throwarrow("Sorry Failed try again");
}
