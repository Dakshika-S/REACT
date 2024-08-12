import { Person } from "./Person";
import { data, people } from "../../../data";

const List = () => {
  return (
    <div className="container">
      <h2>Leverage Javascript</h2>
      {people.map((person) => {
        return <Person key={person.name} {...person} />; //this is a component
        // return <div key={person.id}>{person.name}</div>;
      })}
    </div>
  );
};

// const List = () => {
//   return (
//     <div>
//       <ol>
//         {people.map((person) => {
//           return <li key={person.id}> {person.name}</li>;
//         })}
//       </ol>
//     </div>
//   );
// };
export default List;
