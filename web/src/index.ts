import { User } from "./models/User";

const user = User.build({ id: 1 });

user.on("change", () => {
  console.log("Successfully Fetched");
  console.log(user);
});

user.on("save", () => {
  console.log("Data succesfully saved");
});

user.fetch();
