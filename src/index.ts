import { User } from "./models/User";

console.log("Hi there!");

const user = new User({ name: "myname", age: 100 });

// Test eventing
user.on("change", () => {});
user.on("newEvent", () => {});

console.log(user);
