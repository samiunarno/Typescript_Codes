{
  //Union Types :
  type user = {
    name: string;
    email: string;
    gender: "Male" | "Female";
    blood: "O+" | "O-" | "A+";
  };
}

console.log(user.cont);
