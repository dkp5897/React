import React from "react";

const Hello = () => {
  // with JSX
  //   return (
  //     <div className="hello-class">
  //       <h1>Hello Deepak</h1>
  //     </div>
  //   );

  // without JSX
  return React.createElement(
    "div",
    { id: "hello", className: "hello-class" },
    React.createElement("h1", null, "Hello Deepak")
  );
};

export default Hello;
