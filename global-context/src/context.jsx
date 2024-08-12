import { createContext, useState } from "react";

const GlobalContext = createContext();

const AppContext = (props) => {
  const [name, setName] = useState("peter");

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {/* value={{name:name, setName:setName like this can give}} */}
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
