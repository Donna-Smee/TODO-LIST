import "./page.css";
import useUser from "../hooks/userUser";
import { useEffect } from "react";

const HomePage = () => {
  const {user, isLoading} = useUser();

  const displayWelcomeMessage = () => {
      if (user){
        return user.email;
      }
      return "none";
    }
    
 

  return (
    <>
    <div className='page-margin'>HomePage
      <div>{displayWelcomeMessage()}</div>
    </div>

    
    </>
    
  )
}

export default HomePage