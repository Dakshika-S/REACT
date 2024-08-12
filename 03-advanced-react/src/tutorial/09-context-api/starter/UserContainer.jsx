import { useContext } from "react";
//instead of thiss..import
// import { NavbarContext, useAppContext } from "./Navbar";
//use this.. import
import { useAppContext } from "./Navbar";

// const UserContainer = ({ user, logout }) => {
const UserContainer = () => {
  // const { user, logout } = useContext(NavbarContext);
  const { user, logout } = useAppContext();

  return (
    //<p>hello there, {user?.name?.toUpperCase()}</p>
    <div className="user-container">
      {user ? (
        <>
          <p>hello there, {user?.name?.toUpperCase()}</p>

          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};
export default UserContainer;
