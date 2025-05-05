"use strict";
{
    // Example usage of the Owner type
    const person1 = "car";
    const person2 = "car";
    // Generic function to safely get a value from an object by key
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    // An example object representing a user
    const user = {
        name: "Samiun Mahmud",
        age: 22,
        address: "Dhaka",
    };
    // Retrieve a property value from the user object
    const result = getPropertyValue(user, "name");
    // Log the result (optional)
    console.log(result); // Output: Samiun Mahmud
}
