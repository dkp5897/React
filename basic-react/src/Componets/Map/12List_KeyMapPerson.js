import React from "react";
import Person from "./12ListMapKeyMathod";

function PersonList() {
  // const names = ['Rajan','Sooraj','Amit','Saurabh']
  const persons = [
    {
      id: 1,
      name: "Deepak",
      age: 25,
      skill: "React",
    },
    {
      id: 2,
      name: "Rajan",
      age: 26,
      skill: "JAVA",
    },
    {
      id: 3,
      name: "Shivam",
      age: 24,
      skill: "NodeJs",
    },
  ];

  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));

  return <div>{personList}</div>;
}

export default PersonList;
