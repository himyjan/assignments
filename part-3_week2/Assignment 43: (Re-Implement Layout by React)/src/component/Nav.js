import Hamburger from "./Hamburger"
import Sidebar from "./Sidebar"

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="header-wrapper">
        <h1 className="logo">Website Title / Logo</h1>
        <Hamburger />
        <input type="checkbox" id="switch" />
        <Sidebar />
      </div>
    </nav>
  );
};

export default Nav;
