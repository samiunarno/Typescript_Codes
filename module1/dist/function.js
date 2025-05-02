"use strict";
{
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 3);
    const pooruser = {
        name: "Samiun",
        balance: 0,
        addBalance(balance) {
            return `My New Balance is : ${this.balance + balance}`;
        },
    };
    console.log(pooruser.addBalance(1000));
    const arr = [1, 2, 3];
    const arr2 = arr.map((elem) => elem * elem);
    console.log(arr2);
}
