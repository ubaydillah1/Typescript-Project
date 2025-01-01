import { User } from "./models/User";

const user = new User({ name: "Adrien", age: 20 });

user.on("change", () => {
  console.log(user);
});

user.on("save", () => {
  console.log("Data succesfully saved");
});
