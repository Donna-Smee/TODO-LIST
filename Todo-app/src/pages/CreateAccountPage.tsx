import "./page.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useUser from "../hooks/userUser";
import "./login-create-acc-styles.css";

const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {user, isLoading, userInfo} = useUser();

  const navigate = useNavigate();

  const createAccount = async () => {
    try {
      if (email == "" || name == "" || password == ""){
        alert("You must give an email, name and password");
        return;
      }

      await createUserWithEmailAndPassword(getAuth(), email, password);
      
     

      // create user data in mongodb
      const response = await axios.post("/api/users", {
        email: email,
        name: name
      });

      const user = response.data;
      console.log(user);
      

      navigate("/");
    } catch (e){
      setError(e.message);
    }
  }

  return (
    <div className='page-margin'>
      
      <div className="userform-container">{error && <p>{error}</p>}
   
        
        <input name="email" type="text" onChange={e => setEmail(e.target.value)} placeholder="Email"/> <br />

        <input name="name" type="text" onChange={e => setName(e.target.value)} placeholder="Name"/> <br />

      
        <input name="password" type="password" onChange={e => setPassword(e.target.value)} placeholder="Password"/>

        <br />

        <button onClick={createAccount} className="userform-button">Create Account</button>


        <br />
        <Link to="/login">Already have an account? Log in!</Link></div>
    </div>
  )
}

export default CreateAccountPage