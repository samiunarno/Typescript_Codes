{
  //Spread Operator & REST :

  const brros: string[] = ["Ar", "sam", "Mah"];
  const brros1: string[] = ["Arno", "samiun", "Mahmud"];

  console.log(`Top Designation : `);

  for (const brros of brros1) {
    const a = brros.replace("Arno", "Google");
    console.log(`${a}`);
  }

  brros.push(...brros1);
  brros.push("Google", "META", "Facebook");
  brros.pop();
  brros.pop();
  console.log(`${brros}`);

  const _habul = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`hi ${friend}`));
  };

  _habul(brros[0], brros[1], brros[2]);

  const usersss = {
    id: 2021337,
    name: {
      fn: "Sam",
      ln: "Ar",
      age: 20,
      Result: 5.0,
    },
  };
  //type alias :
  type useerrr = {
    name?: string;
    roll?: string;
    age?: number;
  };

  const study: useerrr = {
    name: "Sam",
    roll: "2021337",
    age: 20,
  };

  console.log(`Full View : ${study}`);

  const ages = 20; // or any number
  const abd = ages >= 18 ? "Adult" : "Not adult";
  console.log({ abd });

  //Nullish Operator :

  const Us1 = {
    isAuthenticator: null,
    user: "Samiun",
  };
  const Us2 = {
    isAuthenticator: null,
    user: "Arno",
  };

  const rsst = Us1.isAuthenticator ?? "You are on Admin Mode User One";
  const rsst2 = Us1.isAuthenticator
    ? Us2.isAuthenticator
    : "You are on GUEST Mode User ";
  console.log(
    `You Authentication is :${Us1.user} ${rsst} ,${Us2.user} ${rsst2}`
  );

  type Ussser = {
    name: string;
    address: {
      city: string;
      country: string;
      road: string;
      pin?: number;
    };
  };

  const newaddress: Ussser = {
    name: "Sam",
    address: {
      city: "Dhaka",
      country: "Bangladesh",
      road: "Mirpur-1",
      pin: 1216,
    },
  };

  const PIN = newaddress?.address.pin ?? "NO PIN";
  console.log({ PIN });
}
