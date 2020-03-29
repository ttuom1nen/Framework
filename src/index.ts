import { User } from "./models/User";

const user = new User({ name: "myname", age: 100 });

// Test eventing
user.on("change", () => {
  console.log("Change #1");
});
user.on("newEvent", () => {
  console.log("newEvent triggered");
});

user.trigger("newEvent");
