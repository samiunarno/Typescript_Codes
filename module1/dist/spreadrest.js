"use strict";
var _a, _b;
{
    //Spread Operator & REST :
    const brros = ["Ar", "sam", "Mah"];
    const brros1 = ["Arno", "samiun", "Mahmud"];
    console.log(`Top Designation : `);
    for (const brros of brros1) {
        const a = brros.replace("Arno", "Google");
        console.log(`${a}`);
    }
    brros.push(...brros1);
    brros.push("Google", "META", "Facebook");
    brros.pop();
    brros.pop();
    console.log(`${brros}`);
    const _habul = (...friends) => {
        friends.forEach((friend) => console.log(`hi ${friend}`));
    };
    _habul(brros[0], brros[1], brros[2]);
    const usersss = {
        id: 2021337,
        name: {
            fn: "Sam",
            ln: "Ar",
            age: 20,
            Result: 5.0,
        },
    };
    const study = {
        name: "Sam",
        roll: "2021337",
        age: 20,
    };
    console.log(`Full View : ${study}`);
    const ages = 20; // or any number
    const abd = ages >= 18 ? "Adult" : "Not adult";
    console.log({ abd });
    //Nullish Operator :
    const Us1 = {
        isAuthenticator: null,
        user: "Samiun",
    };
    const Us2 = {
        isAuthenticator: null,
        user: "Arno",
    };
    const rsst = (_a = Us1.isAuthenticator) !== null && _a !== void 0 ? _a : "You are on Admin Mode User One";
    const rsst2 = Us1.isAuthenticator
        ? Us2.isAuthenticator
        : "You are on GUEST Mode User ";
    console.log(`You Authentication is :${Us1.user} ${rsst} ,${Us2.user} ${rsst2}`);
    const newaddress = {
        name: "Sam",
        address: {
            city: "Dhaka",
            country: "Bangladesh",
            road: "Mirpur-1",
            pin: 1216,
        },
    };
    const PIN = (_b = newaddress === null || newaddress === void 0 ? void 0 : newaddress.address.pin) !== null && _b !== void 0 ? _b : "NO PIN";
    console.log({ PIN });
}
