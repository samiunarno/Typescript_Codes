"use strict";
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["guest"] = "guest";
    UserRole["superAdmin"] = "super admin";
})(UserRole || (UserRole = {}));
let abcd;
abcd = 12;
abcd = "Samiun Arno";
if (typeof abcd === "string")
    abcd.toUpperCase();
else if (typeof abcd === "number")
    abcd.toFixed(2);
console.log(abcd);
