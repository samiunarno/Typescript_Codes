function multiply(x: any, y: any): any {
  return x * y;
}
multiply(2, 3);

let fruits: string[] = ["apple", "banana", "pinaple"];

fruits.push("Sam");
// Object :

let person = {
  name: "Samiun",
  age: 25,
  isCaptain: true,
};

let person2 = {
  name: "Samiun",
  age: 20,
  isCaptain: true,
};

// const per3 = person.age + person2.age;

// console.log(per3);

//Union Type :
let ages: number | string | boolean;

ages = 25;

if (typeof ages === "number") {
  console.log(ages + 5);
}

let alibaba: string[] = [];
alibaba.push("Arno");
console.log(alibaba);
alibaba.pop();
console.log(alibaba);
