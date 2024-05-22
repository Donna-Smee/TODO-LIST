import { Link } from "react-router-dom";
import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <>
        
        <nav>
        <h1 className="nav-title">TODO ✔</h1>
            <ul className="nav-link-container">
                <div className="navigation">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/lists">Lists</Link>
                    <button className="nav-link">←</button>
                </div>
                
                <Link className="nav-link login-nav" to="/login">Log In</Link>
            </ul>
        </nav>
    </>
    
  )
}

export default NavBar;