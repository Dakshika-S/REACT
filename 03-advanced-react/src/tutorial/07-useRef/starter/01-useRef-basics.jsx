import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refcontainer = useRef(null);
  const isMounted = useRef(false);
  // console.log(refcontainer, "hi"); //during initial render
  // console.log(value);

  useEffect(() => {
    refcontainer.current.focus();
  });
  useEffect(() => {
    console.log(value);
    // console.log(refcontainer); //after the initail render
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("re-render");
  }, [value]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refcontainer.current.value;
    console.log(name);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={refcontainer}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
