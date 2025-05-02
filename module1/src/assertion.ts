let anything: any;

anything = "Next Step";

anything = true;

let op = (anything as string).length;

const kgtogm = (value: string | number) => {
  if (typeof value === "string") {
    const convertedValue = parseFloat(value);
    return `the converted value is ${convertedValue}`;
  }
  if (typeof value === "number") {
    return value * 1000;
  }
};

const result = kgtogm(1000) as number;
const result2 = kgtogm("1000") as string;

console.log(result2);
