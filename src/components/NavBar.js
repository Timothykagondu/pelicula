import {NavLink} from 'react-router-dom'

const Nav = ()=> {
    return (
    <nav className="nav1">
        <NavLink to="/loginPage" style={{paddingRight: "15px",}}>Login</NavLink>
        <NavLink to="/Portfolio" style={{paddingRight: "15px",}}>Portfolio</NavLink>
        <NavLink to="/HomePage" style={{paddingRight: "15px",}}>Home</NavLink>

    </nav>
    );
  };
export default Nav;