import { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  const login = (value) => {
    setLoggedIn(true);
    setUserDetails({
      name: "Alan",
      notifications: 3,
    });
  };

  const logout = (value) => {
    setLoggedIn(false);
    setUserDetails([]);
  };

  const contextValue = {
    status: {
      loggedIn,
      login,
      logout,
    },
    user: {
      userDetails,
      setUserDetails,
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
