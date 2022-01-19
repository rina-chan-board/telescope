import { Link } from "react-router-dom";
import logo from "./logo.png";
const Nav = ({handleClear}) => {


    return ( <div className="nav">

        <img  className="logo" src={logo} width="2%"/>
        <h1 className="title">TELESCOPE</h1>

        <div className="navlinks">
            <Link className="navlink" to="/home" ><span className="navlinktext">home</span></Link>
            <Link className="navlink" to="/likes"><span className="navlinktext">likes</span></Link>
            <Link className="navlink" to="/about"><span className="navlinktext">about</span></Link>
            <span className="navlink clearlikes" onClick={() => handleClear("likes", [])}><span className="navlinktext">clear all likes</span></span>
        </div>

    </div> );
}
 
export default Nav;