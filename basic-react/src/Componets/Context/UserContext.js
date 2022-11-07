
import React from "react";

//step-1 : create component
const UserContext = React.createContext();

//step-2: provide context value
const UserProvider = UserContext.Provider;

//step-2: consume context value
const UserConsumer = UserContext.Consumer;

export {UserConsumer , UserProvider}

// we can provide default value to UserComsumer