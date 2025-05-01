"use strict";
const greet = (...friend) => {
    friend.forEach((friend) => console.log(`hi ${friend}`));
};
greet("Samiun", "Arno", "Tony");
