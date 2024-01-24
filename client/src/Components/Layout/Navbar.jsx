import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold text-white">HouseHunter</h1>
        </Link>

        <ul className="hidden md:flex items-center">
          <li>
            <Link to="/registration" className="px-3 py-2 text-white hover:text-gray-300 font-medium">
              Registration
            </Link>
          </li>
          <li>
            <Link to="/login" className="px-3 py-2 text-white hover:text-gray-300 font-medium">
              Login
            </Link>
          </li>
        </ul>

        <button className="md:hidden block focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full px-3 py-2 text-white">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor"  />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
