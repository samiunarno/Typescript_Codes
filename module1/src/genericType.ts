type genericArr<T> = Array<T>;

const RollNumb: genericArr<number> = [1, 2, 3, 4, 5];
const RollStr: genericArr<string> = ["1", "2", "3"];
const RollBool: genericArr<boolean> = [true, false, true, false, true];

const UsER: genericArr<{ name: string; age: number }> = [
  {
    name: "Arno",
    age: 100,
  },
  {
    name: "Samiun",
    age: 100,
  },
];

console.log(UsER[1].name);
