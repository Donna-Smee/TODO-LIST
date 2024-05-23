import "./page.css";
import { Link, useNavigate } from "react-router-dom";
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";



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
      
      {error && <p>{error}</p>}
    
      <label htmlFor="email">Email </label>
      <input name="email" type="text" onChange={e => setEmail(e.target.value)}/>

      <br /><br />

      <label htmlFor="password">Password </label>
      <input name="password" type="password" onChange={e => setPassword(e.target.value)}/>

      <br /><br />

      <button onClick={logIn}>Log In</button>
  

      <br />
      <Link to="/create-account">Don't have an account? Create one here :D</Link>
    </div>
  )
}

export default LoginPage