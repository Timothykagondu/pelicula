import {NavLink} from 'react-router-dom'
const Nav = ()=> {
    return (
    <nav className="nav1">
        <NavLink to="/HomePage" style={{paddingRight: "15px",}}>Home</NavLink>
        {Nav}
    </nav>
    );
  }
export default Nav;