import { User } from "./models/User";

const user = new User({ name: "Ubay Dillah", age: 19 });

// console.log(user.get("name"));
// console.log(user.get("age"));

// user.set({ age: 20 });

// console.log(user.get("name"));
// console.log(user.get("age"));

user.on("change", () => {
  console.log("Trigger 1");
});
user.on("change", () => {
  console.log("Trigger 2");
});
user.on("save", () => {
  console.log("Save was triggered");
});

user.trigger("change");
