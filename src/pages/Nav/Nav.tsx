import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="flex justify-between text-red-600 font-bold bg-teal-950 pt-2 pb-2 wrapper">
      <Link to="/" className="link">
        Main
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
      <Link to="/registration" className="link">
        Registration
      </Link>
      <Link to="/rates" className="link">
        Currency rates
      </Link>
      <Link to="/convert" className="link">
        Currency converter
      </Link>
      <Link to="/lesson" className="link">
        Lesson
      </Link>
      <Link to="/profiles" className="link">
        Profiles
      </Link>
      <Link to="/users" className="link">
        Users
      </Link>
      {/* navigation to another URL */}
      <Link
        to="https://react.dev/reference/react/Suspense"
        target="_blank"
        className="link"
      >
        Suspense
      </Link>
    </div>
  );
};

export default Nav;
