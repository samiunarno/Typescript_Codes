"use strict";
class bottle {
    constructor() {
        this.radius = 120;
        this.price = 20;
        this.colour = "Blue";
    }
}
function geti(obj) {
    console.log(bottle);
    if (obj instanceof bottle) {
        console.log("This is a Bottle Object");
    }
}
