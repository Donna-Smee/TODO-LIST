import React, { useState } from 'react'
import useUser from '../hooks/userUser'
import axios from 'axios';
import "../App.css";

const UserInfoEdit = () => {
    const {user, isLoading, userInfo} = useUser();
    const [nameInput, setNameInput] = useState("");
    const [updatingName, setUpdatingName] = useState(false);

    const changeName = async () => {
        
        if (!user || nameInput === "") {return;}
        setUpdatingName(true);
        const token = user && await user.getIdToken();
        const headers = token ? {authtoken: token} : {};
        const response = await axios.put(`/api/users/${user.email}`, {newName: nameInput}, {headers});

        if (response){
            setUpdatingName(false);
            setNameInput("");
        }
    }

  return (
    <div className='user-info-container'>
        <h4>User Information</h4>
        <br />
        <div>Email: {(user && userInfo) ? userInfo.user_email : "Email loading..."}</div>
        <div>Name: {(user && userInfo) ? userInfo.name : "Name loading..."}</div>
        <div className='change-name-container'>
            <input id='change-name-input' type="text" placeholder='Enter new name' value={nameInput} onChange={e => setNameInput(e.target.value)}/>
            <button className={updatingName ? "change-name-button disabled" : "change-name-button"} onClick={changeName}>{updatingName ? "Saving Name..." : "CHANGE NAME"}</button>
        </div>

    </div>
  )
}

export default UserInfoEdit