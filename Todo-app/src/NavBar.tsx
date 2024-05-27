import { Link } from "react-router-dom";
import "./styles/NavBar.css";
import useUser from "./hooks/userUser";
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
  const {user, isLoading, userInfo} = useUser();

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
                
                {user ? <button className="nav-link login-nav" onClick={() => signOut(getAuth())}>Log Out</button> : <Link className="nav-link login-nav" to="/login">Log In</Link>}
                
            </ul>
        </nav>
    </>
    
  )
}

export default NavBar;