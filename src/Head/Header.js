import {NavLink} from "react-router-dom";

function Header(){
    return <div className="header">
        <div>Cover</div>
        <div className="header_sub">
            <NavLink exact to="/" >
                Home
            </NavLink>
            <NavLink  to="/features">
                Features
            </NavLink>
            <NavLink to="/contacts" >
                Contact
            </NavLink>

        </div>
    </div>
}
export default Header;