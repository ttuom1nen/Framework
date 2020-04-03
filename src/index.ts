import { User } from "./models/User";

const user = new User({ name: "Peter", age: 7 });

user.on("change", () => {
  console.log(user);
});

user.save();
