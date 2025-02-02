import { useState } from "react";
import { AuthUser, UserContext } from "./UserContext";

type UserContextProviderProps = {
  children: React.ReactNode;
};

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
