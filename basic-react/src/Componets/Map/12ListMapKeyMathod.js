import React from "react";

function Person(props) {
    // console.log(props.person);
  return (
    <div>
      <h2>
        {`I am ${props.person.name}. I am ${props.person.age} years old and I know 
         ${props.person.skill}`}
      </h2>
    </div>
  );
}

export default Person;




//key:-

//1.  A key is a special string attribute we need to include when creating list of elements
//2.  keys give the element a stable identity
//3.  keys help react to identify which items have changed, are added, or are removed
//4.  Help in efficient update in user interface
