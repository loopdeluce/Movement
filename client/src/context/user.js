import React, { useState, createContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});

  function handleUserChange(user) {
    setUser((oldUser) => {
      sessionStorage.setItem("user", user);
      return user;
    });
  }

  const value = [user, handleUserChange];

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
