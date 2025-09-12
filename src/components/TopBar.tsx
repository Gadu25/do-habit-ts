import { NavLink } from "react-router";

function TopBar() {
  const navs = [
    { title: "Home", link: "/" },
    { title: "My Habits", link: "/habits" },
  ];

  return (
    <>
      <div className="topbar">
        <div className="logo">Habitify</div>
        <nav className="navs">
          <ul>
            {navs.map((nav, index) => (
              <li key={index}>
                <NavLink to={nav.link}>{nav.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default TopBar;
