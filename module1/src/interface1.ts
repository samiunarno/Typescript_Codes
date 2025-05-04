{
  interface mod1 {
    name: string;
    role: string;
    age: number;
  }

  interface mod2 {
    id: number;
    date: string;
    balance: number;
  }

  // Extend mod1 and mod2 to create a combined user interface
  interface FullUser extends mod1, mod2 {
    address: string;
  }

  const user123: FullUser = {
    name: "Samiun",
    role: "Admin",
    age: 25,
    id: 1,
    date: "2025",
    balance: 2000,
    address: "Dhaka",
    // residency: "Bangladesh",
  };

  console.log(user123);
}
