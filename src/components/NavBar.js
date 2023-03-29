import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav1">
      <Link to="/HomePage" style={{ paddingRight: "15px" }}>Home</Link>
    </nav>
  );
};

export default Nav;
