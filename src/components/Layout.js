import { NavLink, Outlet } from "react-router-dom";

let activeStyle = {
  textDecoration: "underline",
  color: "red",
  fontWeight: 600,
};

const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/useInput"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            useInput
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
