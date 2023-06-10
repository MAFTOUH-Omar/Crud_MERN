import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-purple-800 w-5/6 rounded-lg border-gray-950 border-2 mx-auto flex justify-center">
      <nav className="flex items-center justify-between container mx-auto p-4">
        <div className="space-x-4">
          <NavLink
            to="/"
            className="text-zinc-50 hover:text-zinc-100 text-lg tracking-wide font-semibold"
          >
            All Users
          </NavLink>
          <NavLink
            to="/add"
            className="text-zinc-50 hover:text-zinc-100 text-lg tracking-wide font-semibold"
          >
            Add User
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
