import "./page.css";
import useUser from "../hooks/userUser";
import axios from "axios";
import { useEffect, useState } from "react";


const HomePage = () => {
  const {user, isLoading, userInfo} = useUser();


  
  

  return (
    <>
    <div className='page-margin'>HomePage
      <div>{userInfo ? userInfo.name : "No name"}</div>

      {(user != null) ? <div>{user.email}</div> : <div>{'Email not available'}</div>}

      <br />
      
      <h3>Number of Lists: {userInfo && userInfo.lists ? userInfo.lists.length : 0}</h3>
      
    </div>

    
    </>
    
  )
}

export default HomePage