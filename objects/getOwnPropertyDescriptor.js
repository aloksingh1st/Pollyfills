const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Get descriptor for "firstName"
let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");

console.log(descriptor);
