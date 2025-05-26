import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className='h-auto w-full p-3 flex flex-row items-center justify-center gap-4 text-decasa font-decasa text-xl'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-4 decoration-decasa decoration-2 font-bold"
            : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-4 decoration-decasa decoration-2 font-bold"
            : ""
        }
      >
        About
      </NavLink>
      <NavLink
        to='/menu'
        className={({ isActive }) =>
          isActive
            ? "underline underline-offset-4 decoration-decasa decoration-2 font-bold"
            : ""
        }
      >
        Menu
      </NavLink>
    </div>
  );
};

export default NavBar;
