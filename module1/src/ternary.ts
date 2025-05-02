{
  let a = 20;

  if (a == 10) {
    console.log("Undefined");
  } else {
    console.log("defined");
  }

  const age: number = 10;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "Adult" : "No";
  console.log(isAdult);

  const isAuthenticate = null;
  const result = isAuthenticate ?? "Guest";
  const result2 = isAuthenticate ? isAuthenticate : "Guest";
  console.log({ result }, { result2 });

  type Userss = {
    name: string;
    address: {
      city: string;
      road: string;
      present: string;
      permanent?: string;
    };
  };
  const userrr: Userss = {
    name: "Sam",
    address: {
      city: "Dhaka",
      road: "Mirpur",
      present: "DHK",
    },
  };
  const pa = userrr?.address?.permanent ?? "Not Available";
  console.log(pa);
}
