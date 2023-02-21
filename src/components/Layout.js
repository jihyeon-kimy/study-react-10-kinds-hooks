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
        <li>
          <NavLink
            to="/useTabs"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            useTabs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/useTitle"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            useTitle
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/useClick"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            useClick
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/useConfirm"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            useConfirm
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
