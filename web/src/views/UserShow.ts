import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
        <div>
            <h1>User Detail</h1>
            <div>Username : ${this.model.get("name")}</div>
            <div>Age : ${this.model.get("age")}</div>
        </div>
    `;
  }
}
