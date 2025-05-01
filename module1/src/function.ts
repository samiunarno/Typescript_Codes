{
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(2, 3);

  const pooruser = {
    name: "Samiun",
    balance: 0,
    addBalance(balance: number): string {
      return `My New Balance is : ${this.balance + balance}`;
    },
  };

  console.log(pooruser.addBalance(1000));

  const arr: number[] = [1, 2, 3];

  const arr2: number[] = arr.map((elem: number): number => elem * elem);

  console.log(arr2);
}
