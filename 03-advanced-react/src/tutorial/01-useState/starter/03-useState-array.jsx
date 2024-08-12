import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setpeople] = React.useState(data);

  const removeItems = (id) => {
    // console.log(id);
    const newpeople = people.filter((person) => person.id !== id);
    // setpeople(people.filter((person) => person.id !== id););
    setpeople(newpeople);
  };
  const clearAllItems = () => {
    setpeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItems(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        style={{ marginTop: "2rem" }}
        className="btn"
        onClick={clearAllItems}
        // onClick={() => setpeople([])}
      >
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
