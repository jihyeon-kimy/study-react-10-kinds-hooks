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
        <li>
          <NavLink
            to="/usePreventLeave"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            usePreventLeave
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/useBeforeLeave"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            useBeforeLeave
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/useFadeIn"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            useFadeIn
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/useNetwork"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            useNetwork
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/useScroll"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            useScroll
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/useFullscreen"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            useFullscreen
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
