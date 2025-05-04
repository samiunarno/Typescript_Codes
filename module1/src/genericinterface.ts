{
  //Generic Interface??

  interface Devs<T> {
    name: string;
    comp: {
      brand: string;
      model: string;
      year: number;
    };
    sm: T;
  }

  const Devops: Devs<{
    brand: string;
    model: string;
    year: number;
  }> = {
    name: "Samiun",
    comp: {
      brand: "Asus",
      model: "ROG",
      year: 2023,
    },
    sm: {
      brand: "Apple",
      model: "Apple Watch",
      year: 2023,
    },
  };
}
