import "./page.css";
import "./list-page.css"
import { useParams } from "react-router-dom";
import useUser from "../hooks/userUser";
import axios from "axios";
import { useEffect, useState } from "react";
import AddItemComponent from "../components/AddItemComponent";
import ListComponent from "../components/ListComponent";

const ListPage = () => {
  const [listInfo, setListInfo] = useState(null);
  const {listID} = useParams();
  const {user, isLoading, userInfo} = useUser();

  const handleListUpdate = async (updatedListInfo) => {
    setListInfo(updatedListInfo);
  }

  const clearList = async () => {
    console.log("in here to clear");
      const token = user && await user.getIdToken();
      const headers = token ? {authtoken: token} : {};
      const response = await axios.delete(`/api/lists/${listID}/items`, {headers});
      if (response){
        console.log("clear lists");
        setListInfo(response.data);
        
      } 
  }
  

  useEffect(() => {
    const getListInfo = async () => {
      if (!listID) {return;}
  
      const token = user && await user.getIdToken();
      const headers = token ? {authtoken: token} : {};
      const response = await axios.get(`/api/lists/${listID}`, {headers});
      if (response){
        console.log("inside");
        setListInfo(response.data);
        
      } 
    }

    
    if (!isLoading && user){
      getListInfo();
    }
    
  }, [user, isLoading]);

  

  return (
    <div className='page-margin'>
      <div className="list-page-container">
        <div className="list-container">
          <ListComponent listName={listInfo ? listInfo.name : "List Name"} items={listInfo ? listInfo.items : []} listID={listInfo ? listInfo._id : ""} onListUpdated={handleListUpdate}></ListComponent>
          
        </div>
        <div className="list-functionality-container">
          <AddItemComponent listID={listInfo ? listInfo._id : ""} onListUpdated={handleListUpdate}></AddItemComponent> 
        </div>
      </div>
      <button onClick={clearList}>Clear List</button>
    </div>
  )
}

export default ListPage