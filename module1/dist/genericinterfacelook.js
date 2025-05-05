"use strict";
{
    //then Assign like face :
    const POorDev = {
        name: "Samiun",
        computer: {
            brand: "asus",
            model: "ROG",
            year: 2023,
        },
        smartwatch: {
            brand: "Oramo",
            model: "Oramo v1",
            year: 2024,
            healthtrack: true,
            display: true,
        },
    };
    console.log(POorDev);
    console.log(" ");
    const RichKid = {
        name: "Arno",
        computer: {
            brand: "HP",
            model: "HP PAvilion",
            year: 2023,
        },
        smartwatch: {
            brand: "Apple",
            model: "Apple Watch",
            year: 2025,
            waterproof: true,
            healthtrack: true,
        },
    };
    console.log({ POorDev, RichKid });
    if (POorDev.smartwatch.year == RichKid.smartwatch.year) {
        console.log(`Bro We have Same year watch but Mine One ${RichKid.smartwatch.brand} 
        is more Expensive than yours Bro ${POorDev.smartwatch.brand}`);
    }
}
