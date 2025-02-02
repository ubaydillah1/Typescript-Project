import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<AuthUser>({} as AuthUser);

  function handleLoggedIn() {
    setIsLoggedIn({
      name: "Ubay",
      email: "ubay@gmail.com",
    });
  }

  return (
    <div>
      <p>You are currently {isLoggedIn !== null ? "Login" : "Logout"}</p>
      <button onClick={handleLoggedIn}>Login</button>
      <button>Logout</button>
    </div>
  );
};

export default User;
