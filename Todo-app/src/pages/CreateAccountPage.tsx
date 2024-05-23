import "./page.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(getAuth(), email, password);
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

      <button onClick={createAccount}>Create Account</button>
  

      <br />
      <Link to="/create-account">Already have an account? Log in!</Link>
    </div>
  )
}

export default CreateAccountPage