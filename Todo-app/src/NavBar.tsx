import { Link, useNavigate } from "react-router-dom";
import "./styles/NavBar.css";
import useUser from "./hooks/userUser";
import { getAuth, signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";



const NavBar = () => {
  const {user, isLoading, userInfo} = useUser();
  const [showNav, setShowNav] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(showNav);
  }, [showNav])
  

  return (
    <>
        
        <nav>
        
            <ul className="nav-link-container">
                {showNav && <div className="navigation">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/lists">Lists</Link>
                    
                </div>}
                
                {showNav && (user ? <button className="nav-link login-nav" onClick={() => {
                  signOut(getAuth());
                  navigate("/");
                }}>Log Out</button> : <Link className="nav-link login-nav" to="/login">Log In</Link>)}
                
                <button className={showNav ? "nav-link" : "nav-link nav-hide"} onClick={() => setShowNav(!showNav)}><FaBars /></button>
                
            </ul>
        </nav>
    </>
    
  )
}

export default NavBar;