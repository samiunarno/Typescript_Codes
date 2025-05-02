class bottle {
  radius: number = 120;
  price: number = 20;
  colour: string = "Blue";
}

function geti(obj: bottle) {
  console.log(bottle);
  if (obj instanceof bottle) {
    console.log("This is a Bottle Object");
  }
}
