enum UserRole {
  Admin = "admin",
  guest = "guest",
  superAdmin = "super admin",
}

let abcd: unknown;

abcd = 12;
abcd = "Samiun Arno";

if (typeof abcd === "string") abcd.toUpperCase();
else if (typeof abcd === "number") abcd.toFixed(2);

console.log(abcd);
