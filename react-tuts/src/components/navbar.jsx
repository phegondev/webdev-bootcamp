import { Link } from "react-router-dom";


function Navbar({ title }) {

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="">{title}</a>
            </div>
            <ul className="nav-links">

                <li><Link to={"/home"} className="active">Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/home"}>Services</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </nav>
    )

}
export default Navbar;