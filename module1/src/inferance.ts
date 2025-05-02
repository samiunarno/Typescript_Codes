let abcde: number | string | null | undefined;

abcde = 12;
abcde = "Samiun Arno";

function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(2, 3));

interface user {
  name: string;
  email: string;
  password: string;
}
const obj = {
  name: "Samiun Arno",
  email: "samiunarno@gmail.com",
  password: "abcde",
};

function newbie(obj: user) {}
console.log(newbie(obj));
