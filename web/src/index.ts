import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { UserList } from "./views/UserList";

// const user = User.build({ name: "Adrien", age: 20 });

// const userForm = new UserForm(document.getElementById("root")!, user);

// userForm.render();

// =============================

// const user = User.build({ name: "Adrien", age: 20 });

// const userEdit = new UserEdit(document.getElementById("root")!, user);

// userEdit.render();

// =============================

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.build(json);
  }
);

users.on("change", () => {
  const root = document.getElementById("root");
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
