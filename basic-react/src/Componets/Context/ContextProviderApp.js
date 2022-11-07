import React from "react";
import ComponentA from "./ComponentA";
import { UserProvider } from "./UserContext";

function ContextProviderApp() {
  return (
    <div>
      <UserProvider value={"Deepak"}>
        <UserProvider value={"Pradeep"}>
          <ComponentA />
        </UserProvider>
      </UserProvider>
    </div>
  );
}

export default ContextProviderApp;
