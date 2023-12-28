import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userVerify, setUserVerify] = useState(false);

  const toggleVerification = () => {
    setUserVerify((prev) => !prev);
  };

  const setUserVerification = (value) => {
    setUserVerify(value);
  };

  return (
    <UserContext.Provider
      value={{ userVerify, toggleVerification, setUserVerification }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
