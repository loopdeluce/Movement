import React, { useState, createContext } from "react";

const NewSessionContext = createContext();

function NewSessionProvider({ children }) {
  const [sessionCounter, setSessionCounter] = useState(0);

  function handleNewSession() {
    setSessionCounter((sessionCount) => sessionCount + 1);
  }

  const value = [sessionCounter, handleNewSession];

  return (
    <NewSessionContext.Provider value={value}>
      {children}
    </NewSessionContext.Provider>
  );
}

export { NewSessionContext, NewSessionProvider };
