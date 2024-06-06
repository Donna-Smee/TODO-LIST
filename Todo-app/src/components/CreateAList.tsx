import { CgAddR } from "react-icons/cg";
import "./create-list-styles.css";
import { useState } from "react";
import useUser from "../hooks/userUser";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const CreateAList = () => {

    const [listTitleInput, setListTitleInput] = useState("");
    const {user, isLoading, userInfo} = useUser();

    const navigate = useNavigate();

    const createList = async () => {
        if (listTitleInput === ""){return;}

        const token = user && await user.getIdToken();
        const headers = token ? {authtoken: token} : {};
        const response = await axios.post("/api/lists/", {listName: listTitleInput}, {headers});

        if (response){
            navigate(`/lists/${response.data._id}`);
        }else {
            alert("error");
            alert(response);
        }

    }


    return (
    <div className="create-list-container">
        <h3>Create a To Do List!</h3>
        <div className="create-list-input-container">
            <input type="text" id="list-name-input" onChange={(event) => setListTitleInput(event.target.value)} value={listTitleInput} placeholder="List Name"/>
            <CgAddR className="create-list-add-button" onClick={() => createList()}/>
        </div>
    </div>
    )
}

export default CreateAList

// http://localhost:5173/lists/6656077d7020697423a09b0b