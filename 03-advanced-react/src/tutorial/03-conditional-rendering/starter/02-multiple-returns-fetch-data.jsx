import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await resp.json();
        console.log(user);
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false); // indicating that the data fetching process is complete.
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>there was an error;</h2>;
  }
  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src="https://avatars.githubusercontent.com/u/985197?v=4"
      />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;

// import { useEffect, useState } from "react";
// const url = "https://api.github.com/users/QuincyLarson";

// const MultipleReturnsFetchData = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setUser(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const { id, login, avatar_url, html_url } = user;
//   return (
//     <div>
//       {/* this is wrong:const {(id, login, avatar_url, html_url)} */}
//       <h1>{login}</h1>
//       <img src="avatar_url" alt="login"></img>
//       <p>works at: {bio}</p>
//     </div>
//   );
// };
// export default MultipleReturnsFetchData;
