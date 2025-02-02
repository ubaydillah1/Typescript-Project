import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const context = useContext(UserContext);

  function handleLoggedIn(): void {
    if (context) {
      context.setUser({
        name: "Ubay",
        email: "ubay@gmail.com",
      });
      console.log(context.user);

      console.log("Login");
    }
  }

  function handleLogout(): void {
    if (context) {
      context.setUser(null);
      console.log("Logout");

      console.log(context.user);
    }
  }

  return (
    <div>
      <p>You are currently {context?.user !== null ? "Login" : "Logout"}</p>
      <button onClick={handleLoggedIn}>Login User</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default User;
