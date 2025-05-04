{
  type module1 = {
    name: string;
    age: number;
    role: string;
  };

  type NewRole = module1 & { date?: string };

  const usir1: NewRole = {
    name: "Arno",
    age: 20,
    role: "Admin",
    // date: "2023-3-20",
  };

  interface md2 {
    id: {
      name: string;
      age: number;
      role: string;
      Position: string;
    };
  }

  type md4 = md2 & { Address?: string };
  type md3 = {
    id: md2["id"] & { date: string };
  };
  interface md5 extends md2 {
    role: string;
  }

  const usir2: md3 & md4 = {
    id: {
      name: "Arno",
      age: 20,
      role: "IAC12P",
      Position: "Student",
      date: "2024",
    },
  };
}
