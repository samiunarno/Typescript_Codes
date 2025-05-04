{
  const BigArray = (Value: string): string[] => {
    return [Value];
  };

  const BigArray1 = <T>(Value: T): T[] => {
    return [Value];
  };

  const res1 = BigArray("Bangladesh");

  console.log(res1);

  const resenc = BigArray1<string>("Bangladesh");
  console.log("");
  for (let i = 0; i < 2; i++) {
    console.log(" ");
  }
  console.log("Welcome to", resenc);
}
