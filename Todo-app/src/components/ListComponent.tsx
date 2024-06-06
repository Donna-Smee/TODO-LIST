import "./list-preview-styles.css"
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import Item from "./Item";
import axios from "axios";
import useUser from "../hooks/userUser";
import { useNavigate } from "react-router-dom";


interface Props {
    listName: String,
    items: [],
    listID: String,
    onListUpdated: (updatedList: {}) => void
}

const ListComponent = ({listName, items, listID, onListUpdated}: Props) => {

    const {user, isLoading, userInfo} = useUser();
    const navigate = useNavigate();

    // create a function to handle clicking the checked button that item component will call (will give the item._id)
    const handleCheckClick = async (itemID: string) => {

        const token = user && await user.getIdToken();      
        const headers = token ? {authtoken: token} : {};
        const response = await axios.put(`/api/lists/${listID}/items/${itemID}/check`, {}, {headers});
        if (response){
            onListUpdated(response.data);
        }
    }

    const handleDeleteClick = async (itemID: string) => {
        const token = user && await user.getIdToken();      
        const headers = token ? {authtoken: token} : {};
        const response = await axios.delete(`/api/lists/${listID}/items/${itemID}`, {headers});
        if (response){
            console.log(response.data);
            onListUpdated(response.data);
        }
    }

    const deleteList = async () => {
        const token = user && await user.getIdToken();      
        const headers = token ? {authtoken: token} : {};
        const response = await axios.delete(`/api/lists/${listID}`, {headers});
        navigate("/lists");
    }

  return (
    <>
        <div className="list-component-container">
            <div className="list-container-header">
                <h3>{listName}</h3>
                <FaRegTrashCan className="list-delete-button" onClick={deleteList}/>
            </div>
                
            <div className="all-items-container">
                
                {items ? items.map((i, index) => (<Item itemID={i._id} onCheckClick={handleCheckClick} onDeleteClick={handleDeleteClick} name={i.name} checked={i.checked} key={index} previewOnly={false}></Item>)) : <div>No items yet</div>}
                
            </div>
            
        </div>
        
    </>
  )
}

export default ListComponent