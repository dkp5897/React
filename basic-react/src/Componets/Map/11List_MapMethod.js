import React from "react";
import Person from "./11List_MapPerson";

function NameList() {
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

  const personList = persons.map((person) => <Person person={person}/>);

  return (
    <div>
      {personList}
    </div>
  );
}

export default NameList;
