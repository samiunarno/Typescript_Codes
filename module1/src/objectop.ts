{
  const useer: {
    readonly company: string;
    name: string;
    age: number;
    gender: boolean;
    address?: string;
  } = {
    company: "META",
    name: "samiun",
    age: 20,
    gender: true,
  };

  const usssr: {
    readonly comp: string;
    name: string;
    age: number;
  } = {
    comp: "FACEBOOK",
    name: "ARNO",
    age: 20,
  };

  const ussrr: {
    readonly comp: string;
    name: string;
    age: number;
  } = {
    comp: "FACEBOOK",
    name: "ARNO",
    age: 30,
  };

  //Arrow Function:

  const addarr = (num1: number, num2: number): number => {
    if (num1 <= num2) {
      return num1 + num2;
    } else {
      return num1 * num2;
    }
  };
  addarr(useer.age, usssr.age);

  const poorUssr = {
    name: "AR",
    balance: 0,
    age: 20,
    money(balance: number): any {
      //   if (this.balance >= balance) {
      //     return this.balance;
      //   }
      //   return `My new balance is : ${this.balance}`;
      //   console.log(`Your New Balance is : ${this.money}`);
    },
  };

  poorUssr.money(2000);
  console.log(`New Balance : ${poorUssr.balance}`);

  const arr: number[] = [2, 4, 8];
  let elem: string | number;

  const newarr = arr.map((elem) => elem * 2);
  if (arr.length > 0) {
    elem = arr[0];
    console.log(`Empty Array : ${arr}`);
  } else {
    console.log(`Your Latest Array : ${newarr}`);
  }
  for (let i = 0; i < newarr.length; i++) {
    console.log(`${newarr[i]}`);
  }

  //Spread Operator & REST :

  const brros: string[] = ["Ar", "sam", "Mah"];
  const brros1: string[] = ["Ar", "sam", "Mah"];

  let a = brros.push(...brros1);

  console.log(a);
}
