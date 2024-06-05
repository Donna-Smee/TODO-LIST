import "./page.css";
import { Link, useNavigate } from "react-router-dom";
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "./login-create-acc-styles.css"


const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/");
    } catch (e){
      setError(e.message);
    }
  }

  return (
    <div className='page-margin'>
      
      <div className="userform-container">
        {error && <p>{error}</p>}
    
        
        <input name="email" type="text" onChange={e => setEmail(e.target.value)} placeholder="Email"/> <br />

        <input name="password" type="password" onChange={e => setPassword(e.target.value)} placeholder="Password"/>

        <br />
        <button className="userform-button" onClick={logIn}>Log In</button>


        <br />
        <Link to="/create-account">Don't have an account? Create one here :D</Link>
      </div>
    </div>
  )
}

export default LoginPage