{
  let anybo: number | string;
  anybo = 10;
  anybo = "hello";
  if (typeof anybo === "boolean") {
    console.log("THese is not a boolean");
  }

  let c: object;

  c = [1, 2, 3];

  console.log(c);
}
