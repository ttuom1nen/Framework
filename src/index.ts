import { User } from "./models/User";

console.log("Hi there!");

const user = new User({ name: "myname", age: 100 });

console.log(user.get("name"));
console.log(user.get("age"));
