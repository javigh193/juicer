import { Link } from "react-router";
import { useAuth } from "../../context/useAuth";

export const Navbar: React.FC = () => {
  const { isLoggedIn, user, logout } = useAuth()

  return (
    <nav data-cy-id="navbar" className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        
        {/* Left block */}
        <div className="flex font-bold items-center space-x-20">
          <Link to="/">
            Home
          </Link>
          <div className="font-bold lg:flex">
            <Link to="/juicingstation" className="text-black hover:text-darkBlue">
              Juicing Station
            </Link>
          </div>
        </div>

        {/* Center block */}
        <div data-cy-id="nav-title" className="absolute right-6/14 text-2xl text-amber-700 font-extrabold">
          <h1>Juice Calculator</h1>
        </div>

        {/* Right block */}
        {isLoggedIn() ? (
          <div data-cy-id="user-greeting" className="hidden lg:flex items-center space-x-6 text-back">
            <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
            <a
              onClick={logout}
              className="px-8 py-3 font-bold rounded bg-lightGreen hover:opacity-70"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="lg:flex items-center font-bold space-x-6 text-back">
            <Link to="/login" className="hover:text-darkBlue">
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 font-bold rounded bg-lightGreen hover:opacity-70"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}