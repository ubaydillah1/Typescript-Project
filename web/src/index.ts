import { User } from "./models/User";

const user = new User({ name: "Ubay Dillah", age: 19 });

user.attributes.get("id");
user.attributes.get("name");
user.attributes.get("age");

user.sync.save();
