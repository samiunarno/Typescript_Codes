"use strict";
var _a, _b;
{
    let a = 20;
    if (a == 10) {
        console.log("Undefined");
    }
    else {
        console.log("defined");
    }
    const age = 10;
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Not Adult");
    }
    const isAdult = age >= 18 ? "Adult" : "No";
    console.log(isAdult);
    const isAuthenticate = null;
    const result = isAuthenticate !== null && isAuthenticate !== void 0 ? isAuthenticate : "Guest";
    const result2 = isAuthenticate ? isAuthenticate : "Guest";
    console.log({ result }, { result2 });
    const userrr = {
        name: "Sam",
        address: {
            city: "Dhaka",
            road: "Mirpur",
            present: "DHK",
        },
    };
    const pa = (_b = (_a = userrr === null || userrr === void 0 ? void 0 : userrr.address) === null || _a === void 0 ? void 0 : _a.permanent) !== null && _b !== void 0 ? _b : "Not Available";
    console.log(pa);
}
