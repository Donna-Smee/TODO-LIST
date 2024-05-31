import axios from "axios";
import { useState } from "react";
import useUser from "../hooks/userUser";
import { Navigate, useNavigate } from "react-router-dom";

interface Props {
  listID: String,
  onListUpdated: (updatedList: {}) => void
}

const AddItemComponent = ({listID, onListUpdated} : Props) => {
  const [itemInput, setItemInput] = useState("");
  const {user, isLoading, userInfo} = useUser();
  const navigate = useNavigate();

  // add item to list
  const addItemToList = async () => {
    if (itemInput === ""){
      return;
    }


    const token = user && await user.getIdToken();      
    const headers = token ? {authtoken: token} : {};
    const response = await axios.post(`/api/lists/${listID}/items`, {itemName: itemInput}, {headers});
    onListUpdated(response.data);
   

  }

  return (
    <div>
        <input type="text" placeholder='Add item to list' value={itemInput} onChange={(e) => setItemInput(e.target.value)}/>
        <button onClick={addItemToList} >Add</button>
    </div>
  )
}

export default AddItemComponent