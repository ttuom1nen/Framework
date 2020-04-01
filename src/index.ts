import { User } from "./models/User";

const user = new User({ name: "Baby", age: 0 });

user.events.on("change", () => {
  console.log("change!");
});
user.events.trigger("change");
