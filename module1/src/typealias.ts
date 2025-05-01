//Type Alias
{
  type Student = {
    name: string;
    age: number;
    gender: string;
    cont: string;
    address: string;
  };

  const student1: Student = {
    name: "Samiun",
    age: 23,
    gender: "male",
    cont: "0194644545",
    address: "Dhaka",
  };

  const student2: Student = {
    name: "Sami",
    age: 27,
    gender: "male",
    cont: "01946445555",
    address: "Dhaka,Bangladesh",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Persian";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  const result = add(2, 3);
  console.log(result);
}
