import {NavLink} from 'react-router-dom'

const Nav = ()=> {
    return (
  
    <nav className="nav1">
      <a className='logo' href="/Homepage" class="logo">película</a>
        <NavLink to="/HomePage" style={{paddingRight: "65px",}}>Home</NavLink>
        <NavLink to="/LoginPage" style={{paddingRight: "135px",}}>Login</NavLink>
    </nav>
  
    );
  }
export default Nav;
