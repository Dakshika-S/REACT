import { useState } from "react";

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState("");
  //truhty
  const [name, setName] = useState("susan");

  const codeExample = text || "helo world";

  return (
    //  {if(somecondition){wont workl}}
    <div>
      <h4>Falsy OR: {text || "helo worls"}</h4>
      <h4>Falsy AND: {text && "helo worls"}</h4>
      <h4>Truthy OR: {name || "helo worls"}</h4>
      <h4>Truthy AND: {name && "helo worls"}</h4>
      {codeExample}
    </div>
  );
};
export default ShortCircuitOverview;
