import { User } from "./models/User";

const user = new User({ id: 1 });

user.set({ name: "New name", age: 111 });
user.save();
