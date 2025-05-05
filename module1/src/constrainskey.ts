{
  // Define a type for different types of vehicles
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  // Define Owner as a union of vehicle types
  type Owner = "bike" | "car" | "ship";

  // Get the keys of Vehicle type (same as Owner)
  type Owner2 = keyof Vehicle;

  // Example usage of the Owner type
  const person1: Owner = "car";
  const person2: Owner = "car";

  // Generic function to safely get a value from an object by key
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y): X[Y] => {
    return obj[key];
  };

  // An example object representing a user
  const user = {
    name: "Samiun Mahmud",
    age: 22,
    address: "Dhaka",
  };

  const car = {
    model: "Toyota",
    year: 2000,
    Colour: "BL",
  };

  // Retrieve a property value from the user object
  const result = getPropertyValue(car, "model");
  const result2 = getPropertyValue(car, "year");

  // Log the result (optional)
  console.log(result, result2);
}
