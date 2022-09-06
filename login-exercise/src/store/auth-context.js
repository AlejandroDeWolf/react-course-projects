import React from "react";

// this is a function that returns a context object
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
