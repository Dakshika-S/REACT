// import React, { useState, useEffect } from "react";
// const url = "https://api.github.com/user";

// const FetchData = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);

// useEffect(() => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       setUsers(data);
//     })
//     .catch((err) => {
//       setError(err);
//     });
// }, []);

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }
//   return (
//     <div>
//       <h1>Github users</h1>
//       <ul>
//         {users.map((users) => (
//           <li key={users.id}>{users.login}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default FetchData;

import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <h3>github users</h3>
      {/* <ul className="users"></ul>
      {users.map((user) => {
        console.log(user);
        return <li>item</li>;
      })} */}
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FetchData;
