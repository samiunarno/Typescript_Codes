class bottlemaker {
  constructor(public name: string, public price: number) {}
}
let baa = new bottlemaker("Samiun", 20);

class human {
  age = 0;
  constructor(public name: string, public isHandsome: boolean) {}
}
new human("SAMIUN", true);

class bttl {
  constructor(
    brand: string,
    price: number,
    colour: string,
    materials: string
  ) {}
}
let btt = new bttl("Coca-cola", 20, "red", "Plastic");

console.log(btt);
