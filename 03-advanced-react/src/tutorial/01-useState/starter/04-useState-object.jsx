import { useState } from "react";

// const UseStateObject = () => {
//   const [name, setName] = useState("peter");
//   const [age, setAge] = useState("24");
//   const [hobby, setHobby] = useState("read books");

//   const displayPerson = () => {
//     setName("john");
//     setAge("29");
//     setHobby("scream at the computer");
//   };
const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: "24",
    hobby: "read books",
  });
  const john = () => {
    [{ name: "john", age: "29", hobby: "scream at the computer" }];
  };
  const displayPerson = () => {
    setPerson({ name: "john", age: "29", hobby: "scream at the computer" });
    setPerson({ ...john }); //override only the given details
    console.log(john);
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>enjoys to :{person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
