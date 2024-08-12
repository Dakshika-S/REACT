import UserContainer from "./UserContainer";
// const NavLinks = ({ user, logout }) => {
const NavLinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      {/* <UserContainer user={user} logout={logout} /> */}
      <UserContainer />
    </div>
  );
};
export default NavLinks;
