"use strict";
//Very Tricky :
const b1 = ["ar", "ar", "no"];
const b2 = ["ton", "mo", "oy"];
b1.push(...b2);
const newel = {
    type: "Me",
    redux: "redux",
    dbms: "mongo",
};
const newel2 = {
    prisma: "fire",
    next: "vercel",
    cloud: "aws",
};
const list = Object.assign(Object.assign({}, newel), newel2);
console.log(list);
const greet = (f1, f2, f3) => {
    console.log(`hi ${f1} ${f2} ${f3}`);
};
