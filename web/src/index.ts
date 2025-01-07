import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.build({ name: "Adrien", age: 20 });

const userForm = new UserForm(document.getElementById("root")!, user);

userForm.render();
