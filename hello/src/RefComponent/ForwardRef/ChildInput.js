import React from "react";

// function ChildInput() {
//   return (
//     <div>
//       <input type="text"/>
//     </div>
//   )
// }

const ChildInput = React.forwardRef((props,ref) => {
    return (
      <div>
        <input type="text" ref={ref} />
      </div>
    );
  });

export default ChildInput;
