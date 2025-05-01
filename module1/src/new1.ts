const user: {
  company: string;
  first: string;
  last: string;
  age: number;
  isActive: boolean;
} = {
  company: "NewLab",
  first: "Samiun",
  last: "Mahmud",
  age: 23,
  isActive: true,
};

user.company = "Newlab INC";

console.log(user);
