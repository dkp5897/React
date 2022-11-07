import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      First Name
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <br></br>
      Last Name
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your first Name is - {name.firstName}</h2>
      <h2>Your last Name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default HookCounterThree;

// the setter function provided by object Hooks does not automatecally merged and update
// we have to manually merge and then update the properties

//setName({ ...name, firstName: e.target.value }) :- means copy every properties of name object and then update only firstName
//setName({ ...name, lastName: e.target.value }) :- means copy every properties of name object and then update only lastName