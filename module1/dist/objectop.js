"use strict";
{
    const useer = {
        company: "META",
        name: "samiun",
        age: 20,
        gender: true,
    };
    const usssr = {
        comp: "FACEBOOK",
        name: "ARNO",
        age: 20,
    };
    const ussrr = {
        comp: "FACEBOOK",
        name: "ARNO",
        age: 30,
    };
    //Arrow Function:
    const addarr = (num1, num2) => {
        if (num1 <= num2) {
            return num1 + num2;
        }
        else {
            return num1 * num2;
        }
    };
    addarr(useer.age, usssr.age);
    const poorUssr = {
        name: "AR",
        balance: 0,
        age: 20,
        money(balance) {
            //   if (this.balance >= balance) {
            //     return this.balance;
            //   }
            //   return `My new balance is : ${this.balance}`;
            //   console.log(`Your New Balance is : ${this.money}`);
        },
    };
    poorUssr.money(2000);
    console.log(`New Balance : ${poorUssr.balance}`);
    const arr = [2, 4, 8];
    let elem;
    const newarr = arr.map((elem) => elem * 2);
    if (arr.length > 0) {
        elem = arr[0];
        console.log(`Empty Array : ${arr}`);
    }
    else {
        console.log(`Your Latest Array : ${newarr}`);
    }
    for (let i = 0; i < newarr.length; i++) {
        console.log(`${newarr[i]}`);
    }
}
