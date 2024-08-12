// import { useEffect, useState } from "react";

// const CleanupFunction = () => {
//   const [toggle, setToggle] = useState(false);
//   console.log("render");
//   return (
//     <div>
//       <button className="btn" onClick={() => setToggle(!toggle)}>
//         toggle component
//       </button>
//       {toggle && <RandomComponent />}
//     </div>
//   );
// };

// const RandomComponent = () => {
//   useEffect(() => {
//     // console.log("hmm, this is interesting");
//     const intId = setInterval(() => {
//       // console.log("hello from interval");
//     }, 1000);
//     return () => {
//       clearInterval(intId);
//       console.log("cleanup");
//     };
//   }, []);
//   return <h1>hello there</h1>;
// };
// export default CleanupFunction;

import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const somefunc = () => {
      //some  logic
    };
    window.addEventListener("scroll", somefunc);
    return () => window.removeEventListener("scroll", somefunc);
  }, []);
  return <h1>hello there</h1>;
};
export default CleanupFunction;

// import { useEffect, useState } from "react";

// const CleanupFunction = () => {
//   [value, setValue] = useState(true);

//   return (
//     <div>
//       {value ? (
//         <div>
//           <button onClick={secondComponent}>false</button>
//         </div>
//       ) : (
//         <button onClick={secondComponent}>true</button>
//       )}
//     </div>
//   );
//   const secondComponent = () => {
//     useEffect(() => {
//       if (value) {
//         setValue(false);
//       }
//       return setValue(true);
//     }, []);
//   };
// };

// export default CleanupFunction;
